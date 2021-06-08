import React, { useState } from 'react'
import "./Linkedin.css"

import { Alert } from "bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router';

export default function Linkedin() {
   
    const [country, setCountry] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    const [location, setlocation] = useState("");
    const [exclude, setexclude] = useState([]); 
    const [education, seteducation] = useState("");
    const [currentEmpoyer, setcurrentEmpoyer] = useState("");
    const [f, setf] = useState(false); 
  

  var link = "http://www.google.com/search?q=+"; 
  const generate = () => {
    var quote = "\"";
    
    if (jobTitle.length > 0) {
      var j = jobTitle.toUpperCase(); 
      var tmp = "";
      for (var i = 0; i < j.length; i++){
        if (j[i] == " ") {
          link += (quote + tmp + quote);
          link += " OR ";
          tmp = "";
          i += 3;
          continue; 
        } else {
          tmp += j[i];
          if (i == j.length - 1) {
            link += (quote + tmp + quote); 
          }
        }
      }
    }
    if (location.length > 0) {
      link += "+"; 
      var tmp = "";
      for (var i = 0; i < location.length; i++){
        if (location[i] == " ") {
          link += (quote + tmp + quote);
          link += " OR "; 
          tmp = "";
          i += 3;
          continue; 
        } else {
          tmp += location[i];
          if (i == location.length - 1) {
            link += (quote + tmp + quote); 
          }
        }
      }
    }
    
    if (exclude.length > 0) {
      link += "-" + quote; 
      var tmp = "";
      for (var i = 0; i < exclude.length; i++){
        if (exclude[i] == " ") {
          link += (tmp + "+"); 
          tmp = ""; 
        } else {
          tmp += exclude[i];
          if (i == exclude.length - 1) {
            link += tmp; 
          }
        }
      }
      link += quote;
    }
    link += (" -intitle:" + quote + "profiles" + quote + " -inurl:" + quote + "dir/+" + quote + "+site:in.linkedin.com/in/+OR+site:in.linkedin.com/pub/"); 
    if (education.length > 0) {
      var edu = education.toLowerCase(); 
      link += ("&as_oq=" + edu); 
    }
    if (currentEmpoyer.length > 0) {
      link += "+" + quote + "Current+%2A+" +  currentEmpoyer  + "%2A+" + quote; 
    }
    alert("Copy the following link in your browser: " + link); 
     
  }
   

  return (
        <div>

            {/* i'm gonna need country,job Title,Location,Keywords to exclude,education,currentemployer */}
                     
<form>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Country: </label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" id="inputEmail3" placeholder="Eg. India" onChange={(e)=>{setCountry(e.target.value)}}></input>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Job Title: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" placeholder="Eg. Accountant OR cfo" onChange={(e) => {setjobTitle(e.target.value) }}></input>
    </div>
          </div>

    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Location: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" placeholder="Eg. London OR Paris" onChange={(e) => { setlocation(e.target.value) }}></input>
    </div>
          </div>

    <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Keywords to exclude: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" placeholder="Eg. Assistant OR Secretary" onChange={(e) => { setexclude(e.target.value) }}></input>
    </div>
      </div>
      
          <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Education: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" placeholder="Eg. Masters Degree" onChange={(e) => { seteducation(e.target.value) }}></input>
    </div>
          </div>
          <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Current Employer: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" placeholder="Eg. Reliance" onChange={(e) => { setcurrentEmpoyer(e.target.value) }}></input>
    </div>
  </div>
  
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary" onClick={generate}>Find the right people on Linkedin</button>
    </div>
  </div>
        </form>
          


            
        </div>
    )
}
