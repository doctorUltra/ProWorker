import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import wapp from '../assets/whatsapp.png'
import ReactGa from 'react-ga'

const wappButton = (props) => {

    let cta = ''
    let msg = ''

    if(props.lang==='hindi'){

        cta = props.data.cta.hindi
        msg = "मुझे आपकी ऑनलाइन बिज़नेस कार्ड प्रोफाइल अच्छी लगी"
    }
    if(props.lang==='english'){

        cta = props.data.cta.english

        msg = "Hi. I saw your online business card. I'm interested in your service."
    }

    let clickHandler = ()=>{

        ReactGa.event({

            category:'Button',
            action:'Whatsapp me click'

        })

    }

    return ( 

        <>
            <ReactWhatsapp number={"+91"+ props.num} message={msg} element="div">
                <button className="wappButton" onClick={clickHandler}>{"👉 "+cta}
                    <img src={wapp} width="32px" height="32px"></img>
                </button>
            </ReactWhatsapp>
        </>

     );
}
 
export default wappButton;