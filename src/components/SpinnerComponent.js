import React from "react";

const Spinner = ({marginTop, fontSize}) =>{
    let mTop = marginTop ? marginTop : '20%';
    let fSize = fontSize ? fontSize : '60px';
    return(
        <div className="row justify-content-center" style={{marginTop: mTop}}>
            <i className="fas fa-circle-notch fa-spin fa-xl" style={{fontSize: fSize}}/>
        </div>
    );
}
export {Spinner};