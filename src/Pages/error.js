import React from "react";
import { Link } from "react-router-dom";
import './error.css'

function Error(){
    return(
        <div className="errorDiv">
            <h1>:(</h1>
            <h1>404</h1>
            <h2>you are not authorised. Navigate to <Link className="errorLink" to="/">Home</Link> </h2>
        </div>
        
    );
}

export default Error;