import React from 'react';
import { Link } from 'react-router-dom';
import "./content.css";
function Content() {
  return (
    <div className="content1">
      <div className="ssection_1">
     <img className="back_img" src="/images/007403_ec21d97ca6a74accbd70368060d9b7f3~mv2.webp"/>
      <div className="container">    
      <div className="cont2">
      <h1>
     
     Empower Your Legal Journey
      </h1>  
      <p>
        with Mohami DZ you will always find your suitable lawyer
      </p>
      <Link to="/login">
      <button>
        Get started
      </button></Link>
      </div>
      </div>
      </div>
    
    </div>
  );
}


export default Content;
