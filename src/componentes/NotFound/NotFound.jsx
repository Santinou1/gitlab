import React from 'react';
import Error404 from "../../Media/Img/Error404.png"
import "./NotFounf.scss"

const NotFound = () => {
    return (
        <>
        <div className='Error'>
            <img alt="404" src={Error404}/>
        </div>
        </>
    );
}

export default NotFound;
