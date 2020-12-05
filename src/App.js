import React, { Component } from 'react';
//import downloadIcon from './assets/download_2.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import './App.css';
import Waterfall from './waterfall';
import './style.css'
import {Helmet} from "react-helmet";
import firebase from 'firebase'
import database from './Database'
import Info from './components/Info'
import ChooseLanguage from './components/ChooseLanguage'
import PhoneAddress from './components/PhoneAddress'
import WappButton from './components/WappButton'
import Services from './components/Services'
import Loader from './components/Loader'
import LandingPage from './components/LandingPage'
import CreateCardCTA from './components/CreateCardCTA2'
import ReactGa from 'react-ga'
import LogRocket from 'logrocket';


const firebaseConfig = {
  apiKey: "AIzaSyDt6nEMv_J3oWDx98QHf7G7ElJ8hGn8Fb0",
  authDomain: "pro-worker-b96d5.firebaseapp.com",
  databaseURL: "https://pro-worker-b96d5.firebaseio.com",
  projectId: "pro-worker-b96d5",
  storageBucket: "pro-worker-b96d5.appspot.com",
  messagingSenderId: "570796310570",
  appId: "1:570796310570:web:8747e8015acda83b584353",
  measurementId: "G-84YQW6BTVE"
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage().ref()

LogRocket.init('fno8y9/pro-worker');


class App extends Component {

  constructor(props) {

    super(props);
    this.state = { profilePic: '',

                    allData:{},
                    loaded:false,
                    language:'hindi',
                    validID:true
  }

    this.ref = React.createRef();

  }

  componentDidMount=()=>{

    //console.log(this.props.match.params.num)

    ReactGa.initialize('UA-163091086-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
    console.log(window.location.pathname + window.location.search)

    database.get('https://pro-worker-b96d5.firebaseio.com/'+this.props.match.params.num+'.json')
      .then(response => {
        let dataArr = response.data
        
        if(dataArr===null){

          this.setState({
            validID:false,
            loaded: true
          })
        }

        else{ 

          this.setState({
            profilePic : dataArr.profile,
            allData: dataArr,
            loaded: true
          })

        }
        
        
      })

  }

  handleLanguageClick=(e)=>{

    this.setState({
      language: e.target.value
    })

    if(e.target.value==='english'){
      
      ReactGa.event({
        category:'Button',
        action:'English click'
    })
    }
    if(e.target.value==='hindi'){
      
      ReactGa.event({
        category:'Button',
        action:'Hindi click'
    })
    }
   
  }

  render() { 

    console.log(this.state)

    if(this.state.loaded===false){

      return(
        <div className="laoderDiv">
          <Loader />
        </div>
      )
    }

    if(this.state.loaded===true && this.state.validID===false){

      return(
        <LandingPage />
      )
      

    }

    if(this.state.loaded===true && this.state.validID===true){

    
    console.log(this.state)
    let totalImages = this.state.allData.portfolio.total

    let imagesWithTall=[]

    for(let i=0; i<totalImages; i++){

      imagesWithTall[i] = {id: (i+1), url: this.state.allData.portfolio.images[i]}

    }

    const order = imagesWithTall.map(x => x.id);

    return (  


      <div className="mainDiv" ref={this.ref}>

        <div className="create_cta">
                  
          <CreateCardCTA 
            lang={this.state.language}
          />
                        
        </div>

        <div className="languageChoose">
          <ChooseLanguage
            lang={this.state.language}
            handleClick={this.handleLanguageClick}
          />
        </div>
        <div className="infoDiv">
          <div className="aboutDiv">

            <div className="firstLayer">
              <div className="profilePicDiv">
                <div className="picDiv">
                  
                  <Image src={this.state.profilePic} width={94} height={94} roundedCircle />
                </div>
                
              </div>

              <div className="info">
                <Info 
                  data={this.state.allData}
                  lang={this.state.language}
                />
                
              </div>
              
            </div>
            

            <div className="phoneAddrDiv">
              <PhoneAddress 
                data={this.state.allData}
                lang={this.state.language}
                num={this.props.match.params.num}
              />
            </div>

          </div>

          <div className="serviceskDiv">
            
            <Services 
              data={this.state.allData}
              lang={this.state.language}
            />
           
          </div>
        </div>

        <div className="diffLine"></div>

        <div className="portfolioDiv">
          
          <Waterfall columnCount={2} list={imagesWithTall} order={order} />

        </div>


        <div className="wappButtonDiv">
          <WappButton 
            num={this.props.match.params.num}
            lang={this.state.language}
            data={this.state.allData}
          />
          
        </div>
        
      </div>

    );
  }
}
}
 
export default App;


