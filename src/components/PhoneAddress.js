import React from 'react';
import phoneIcon from '../assets/phone.png'
import pin from '../assets/pin.png'

const phoneAddress = (props) => {

    let address = ''

    if(props.lang==='hindi'){

        address = props.data.address.hindi
    }
    if(props.lang==='english'){

        address = props.data.address.english
    }

    return ( 

        <>
            <div className="phoneDiv">
                    <img src={phoneIcon} width="16px" height="16px"></img>
                <p><a href={"tel:"+props.num}>{props.num}</a></p>
            </div>
            <div className="addressDiv">
                <img src={pin} width="18px" height="18px"></img>
                <p>{address}</p>
            </div>
        </>
     );
}
 
export default phoneAddress;