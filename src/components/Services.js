import React from 'react';

const services = (props) => {

    let view = null

    if(props.lang==='hindi'){

        view = (
            <>
                <div className="serviceskDivL1">
                    <div className="microJob"><p>{props.data.services.hindi[0]}</p></div>
                    <div className="microJob"><p>{props.data.services.hindi[1]}</p></div>
                    <div className="microJob"><p>{props.data.services.hindi[2]}</p></div>
                </div>
                <div className="serviceskDivL2">
                    <div className="microJob"><p>{props.data.services.hindi[3]}</p></div>
                    <div className="microJob"><p>{props.data.services.hindi[4]}</p></div>
                </div>
            </>

        )
    }

    if(props.lang==='english'){

        view = (
            <>
                <div className="serviceskDivL1">
                    <div className="microJob"><p>{props.data.services.english[0]}</p></div>
                    <div className="microJob"><p>{props.data.services.english[1]}</p></div>
                    <div className="microJob"><p>{props.data.services.english[2]}</p></div>
                </div>
                <div className="serviceskDivL2">
                    <div className="microJob"><p>{props.data.services.english[3]}</p></div>
                    <div className="microJob"><p>{props.data.services.english[4]}</p></div>
                </div>
            </>

        )
    }


    return ( 

       view

     );
}
 
export default services;