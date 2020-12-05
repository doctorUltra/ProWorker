import React from 'react';

const chooseLanguage = (props) => {

    let view=null

    if(props.lang==='hindi')
    {
        view = (
        <>
            <div className="firstLang"><button onClick={props.handleClick} value="english">English</button></div>
            <div className="secLangHighlight"><button onClick={props.handleClick} value="hindi">हिंदी</button></div>
        </>
        )
    }

    if(props.lang==='english')
    {
        view = (
        <>
            <div className="firstLangHighlight"><button onClick={props.handleClick} value="english">English</button></div>
            <div className="secLang"><button onClick={props.handleClick} value="hindi">हिंदी</button></div>
        </>
        )
    }


    return ( 

        view

     )
}
 
export default chooseLanguage;