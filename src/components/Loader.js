import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const loader = () => {


    return ( 

        <>

        <div>
            <h2>Pro.Worker</h2>
        </div>

        <Loader
            type="Oval"
            color="#21c1b3"
            height={50}
            width={50}
        />
        </>
     );

}
 
export default loader;