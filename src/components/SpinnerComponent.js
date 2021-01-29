import React from "react";

const Spinner = () =>{
    return(
        <div className="row justify-content-center" style={{marginTop: '20%'}}>
            <i className="fas fa-circle-notch fa-spin fa-xl" style={{fontSize: '60px'}}/>
        </div>
    );
}
export {Spinner};