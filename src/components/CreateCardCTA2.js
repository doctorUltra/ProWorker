import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import Logo from '../assets/Frame 9.png'

const createCard = (props) => {

    let msg =''
    let title = ''
    let m=''

    if(props.lang==='english'){

        msg = "Click to create for FREE"
        title = "Create your own card!! 👇"
        m="Please create my card"
    }
    if(props.lang==='hindi'){

        msg = "क्लिक कीजिये कार्ड के लिए FREE"
        title = "ऐसा ही कार्ड बनवाइए फ्री में!! 👇 "
        m = "कृपया मेरा कार्ड बनाइये "
    }


    return ( 
    <>
        <div className="CreateCardBanner">
            <div className="createCardFirstLayer">
                <img src={Logo} width="42px"></img>
                <p>{title}</p>
            </div>
            <ReactWhatsapp number="+917217660704" message={m} element="div">
                <button>
                    {msg}
                </button>
            </ReactWhatsapp>
        </div>
    </>
     );
}
 
export default createCard;