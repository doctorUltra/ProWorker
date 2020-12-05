import React, { useEffect } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import Image from "react-bootstrap/Image";
import '../App.css'
import ProfilePic from '../assets/profile.jpg'
import phoneIcon from '../assets/phone.png'
import pin from '../assets/pin.png'
import logoPic from '../assets/Frame 9.png'
import ReactGa from 'react-ga'

const LandingPage = () => {

    useEffect(()=>{

        ReactGa.initialize('UA-163091086-1')

        ReactGa.pageview('/landingPage')
    
    }

    ,[])


    let handleClick=()=>{

        console.log('click')
    }

    let wappClickHandler=()=>{

        console.log('click wapp')
    }

    return ( 

        <div className="landingPage">
            <div className="logoPic"><img src={logoPic} width="100px"></img></div>

            <div className="landingTitle">
                <div><h3>Take your services online today with pro-worker for</h3></div>
                <div><h1>absolutely free!</h1></div>
            </div>

            <div className="exampleCard">
                <div className="languageChoose">
                    <div className="firstLang"><button onClick={handleClick} value="english">English</button></div>
                    <div className="secLangHighlight"><button onClick={handleClick} value="hindi">हिंदी</button></div>
                </div>

                <div className="infoDiv">
                    <div className="aboutDiv">
                        <div className="firstLayer">
                            <div className="profilePicDiv">
                                <div className="picDiv">
                            
                                    <Image src={ProfilePic} width={94} height={94} roundedCircle />
                                </div>
                            
                            </div>

                            <div className="info">
                                <div className="nameDiv"><p>राम प्रसाद</p></div>
                                <div className="jobDiv"><p>कारपेंटर</p></div>
                                <div className="projectsCompletedDiv">
                                    <p>@32 प्रोजेक्ट पूरे किये</p>
                                </div>
                    
                            </div>
                
                        </div>
                

                        <div className="phoneAddrDiv">
                            <div className="phoneDiv">
                                <img src={phoneIcon} width="16px" height="16px"></img>
                                <p><a>7217660704</a></p>
                            </div>
                            <div className="addressDiv">
                                <img src={pin} width="18px" height="18px"></img>
                                <p>साकेत, दिल्ली</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hand"><h1>👇</h1></div>
            <div>
                <ReactWhatsapp number={"+917217660704"} message="Hi, I'm interested in your service." element="div">
                    <button className="wappButton" onClick={wappClickHandler}>Create my online card
                        
                    </button>
                </ReactWhatsapp>
            </div>

        </div>
     );
}
 
export default LandingPage;