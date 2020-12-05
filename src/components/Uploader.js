import React, { Component } from 'react';
import database from '../Database'

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nameEng:"",
            nameHin:"",
            addrEng:"",
            addrHin:"",
            portNum:1,
            phone:0,
            profilePic:'',
            l1:'',
            l2:'',
            l3:'',
            l4:'',
            l5:'',
            l6:''
         }
    }

    nameHandlerEng=(e)=>{

        this.setState({
            nameEng:e.target.value
        })
    }
    nameHandlerHin=(e)=>{

        this.setState({
            nameHin:e.target.value
        })
    }
    profileHandler=(e)=>{

        this.setState({
            profilePic:e.target.value
        })
    }
    addrHandlerHin=(e)=>{

        this.setState({
            addrHin:e.target.value
        })
    }
    addrHandlerEng=(e)=>{

        this.setState({
            addrEng:e.target.value
        })
    }
    portfolioNumHandler=(e)=>{

        this.setState({
            portNum: e.target.value
        })
    }
    phoneNumHandler=(e)=>{

        this.setState({
            phone:e.target.value
        })
    }
    link1=(e)=>{
        this.setState({
            l1: e.target.value
        })
    }
    link2=(e)=>{
        this.setState({
            l2: e.target.value
        })
    }
    link3=(e)=>{
        this.setState({
            l3: e.target.value
        })
    }
    link4=(e)=>{
        this.setState({
            l4: e.target.value
        })
    }
    link5=(e)=>{
        this.setState({
            l5: e.target.value
        })
    }
    link6=(e)=>{
        this.setState({
            l6: e.target.value
        })
    }

    uploadClickhandler=()=>{

        let portfolioArray =[this.state.l1, this.state.l2, this.state.l3, this.state.l4, this.state.l5,this.state.l6]
        

        let data = {
            "address" : {
              "english" : this.state.addrEng,
              "hindi" : this.state.addrHin
            },
            "completed" : {
              "english" : "32 jobs completed",
              "hindi" : "32 प्रोजेक्ट पूरे किये "
            },
            "cta" : {
              "english" : "Ask me anything",
              "hindi" : "बात करें "
            },
            "job" : {
              "english" : "Carpenter",
              "hindi" : "कारपेंटर "
            },
            "name" : {
              "english" : this.state.nameEng,
              "hindi" : this.state.nameHin
            },
            "portfolio" : {
              "images" : portfolioArray,
              "total" : this.state.portNum
            },
            "profile" : this.state.profilePic,
            "services" : {
              "english" : [ "sofa", "design", "furniture", "wardrobe", "door" ],
              "hindi" : [ "सोफा", "डिज़ाइन ", "फर्नीचर", "वार्डरोब", "दरवाज़ा" ]
            }
          }

        database.put(this.state.phone+'.json', data)
            .then(response => {
            
            console.log(response)
            alert(response.statusText)
          })
        
    }


    render() { 
        return ( 

            <div>
                <div>
                    <label>
                        Phone Number
                        <input name="phone" type="number" onChange={this.phoneNumHandler}></input>
                    </label>
                    
                </div>
                <div>
                    <label>
                        Name(english)
                        <input name="name-english" placeholder="english" onChange={this.nameHandlerEng} value={this.state.nameEng}></input>
                    </label>
                    <label>
                        Name(hindi)
                        <input name="name-hindi" placeholder="hindi" onChange={this.nameHandlerHin} value={this.state.nameHin}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Addr(english)
                        <input name="addr-english" placeholder="english" onChange={this.addrHandlerEng} value={this.state.addrEng}></input>
                    </label>
                    <label>
                        Addr(hindi)
                        <input name="addr-hindi" placeholder="hindi" onChange={this.addrHandlerHin} value={this.state.addrHin}></input>
                    </label>
                </div>

                <div>
                    <label>
                        Profile Pic link
                        <input name="profile" type="text" onChange={this.profileHandler} value={this.state.profilePic}></input>
                    </label>
                </div>
                <div>
                <label>
                    number of portfolio
                    <input name="portfolio-num" type="number" onChange={this.portfolioNumHandler} value={this.state.portNum}></input>
                    </label>

                </div>
                
                <div>
                    <label>
                        Portfolio-1 link
                        <input name="portfolio-1" onChange={this.link1} value={this.state.l1}></input>
                    </label>
                    <label>
                        Portfolio-2 link
                        <input name="portfolio-2"  onChange={this.link2} value={this.state.l2}></input>
                    </label>
                    <label>
                        Portfolio-3 link
                        <input name="portfolio-3"  onChange={this.link3} value={this.state.l3}></input>
                    </label>
                    <label>
                        Portfolio-4 link
                        <input name="portfolio-4"  onChange={this.link4} value={this.state.l4}></input>
                    </label>
                    <label>
                        Portfolio-5 link
                        <input name="portfolio-5"  onChange={this.link5} value={this.state.l5}></input>
                    </label>
                    <label>
                        Portfolio-6 link
                        <input name="portfolio-6"  onChange={this.link6} value={this.state.l6}></input>
                    </label>
                </div>
                <div>
                    <button onClick={this.uploadClickhandler} value={this.state.l1}>Upload</button>
                </div>
            </div>
         );
    }
}
 
export default Uploader;