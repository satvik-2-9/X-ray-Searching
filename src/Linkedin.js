import React, { useState} from 'react'
import "./Linkedin.css"
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Linkedin() {
   

    const [jobTitle, setjobTitle] = useState("");
    const [location, setlocation] = useState("");
    const [exclude, setexclude] = useState(""); 
    const [education, seteducation] = useState("");
    const [currentEmpoyer, setcurrentEmpoyer] = useState("");
    var link = "https://www.google.com/search?q=+";
  
  const generate = () => {
    var quote = "\"";
    
    if (jobTitle.length > 0) {
      var j = jobTitle.toUpperCase();
      var tmp = "";
      for (var i = 0; i < j.length; i++){
        if (j[i] === " ") {
          tmp += '+'; 
        }else{
          tmp += j[i];
          if (i === j.length - 1) {
            link += (quote + tmp + quote); 
          }
        }
      }
    }
    
    if (location.length > 0) {
      link += "+"; 
      var tmp2 = "";
      for (var i2 = 0; i2 < location.length; i2++){
        if (location[i2] === " ") {
          link += (quote + tmp2 + quote);
          link += " OR "; 
          tmp2 = "";
          i2 += 3;
          continue; 
        } else {
          tmp2 += location[i2];
          if (i2 === location.length - 1) {
            link += (quote + tmp2 + quote); 
          }
        }
      }
    }
    
    if (exclude.length > 0) {
      link += "-" + quote; 
      var tmp3 = "";
      for (var i3 = 0; i3 < exclude.length; i3++){
        if (exclude[i3] === " ") {
          link += (tmp3 + "+"); 
          tmp3 = ""; 
        } else {
          tmp3 += exclude[i3];
          if (i3 === exclude.length - 1) {
            link += tmp3; 
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
      link += ("+" + quote + "Current+%2A+" + currentEmpoyer + "%2A+" + quote); 
    }
    /* link = " \'" + link + "\'"; */ 

    window.location.assign(link); 
    alert("redirecting");
    
  }



  return (
        <div className="ok">

            {/* i'm gonna need country,job Title,Location,Keywords to exclude,education,currentemployer */}
                     
<form >
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Country: </label>
    <div className="col-sm-10">
      <input type="text"  className="form-control text-center" id="inputEmail3" placeholder="Eg. India"></input>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Job Title: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Accountant OR cfo" onChange={(e) => {setjobTitle(e.target.value) }}></input>
    </div>
          </div>

    <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Location: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. London OR Paris" onChange={(e) => { setlocation(e.target.value) }}></input>
    </div>
          </div>

    <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Keywords to exclude: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Assistant OR Secretary" onChange={(e) => { setexclude(e.target.value) }}></input>
    </div>
      </div>
      
          <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Education: </label>
    <div className="col-sm-10 ">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Masters Degree" onChange={(e) => { seteducation(e.target.value) }}></input>
    </div>
          </div>
          <div className="form-group row ">
    <label  className="col-sm-2 col-form-label text-center">Current Employer: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Reliance" onChange={(e) => { setcurrentEmpoyer(e.target.value) }}></input>
    </div>
  </div>
  
  
  <div className="form-group row ed">
    <div className="col-sm-10 text-center">
      <button type="submit" className="btn btn-primary bt" onClick={generate}>Find the right people on Linkedin</button>
      
    </div>
  </div>
      </form>
   </div>
    )
}
