import React from 'react';


const info = (props) => {

    let name = ''
    let job = ''
    let complete = ''

    if(props.lang==='hindi'){

        name = props.data.name.hindi
        job = props.data.job.hindi
        complete = props.data.completed.hindi
    }

    if(props.lang==='english'){

        name = props.data.name.english
        job = props.data.job.english
        complete = props.data.completed.english
    }

   

    return ( 

        <>
                
            <div className="nameDiv"><p>{name}</p></div>
            <div className="jobDiv"><p>{job}</p></div>
            <div className="projectsCompletedDiv">
                <p>{"@" + complete}</p>
            </div>
        </>
     )
}
 
export default info