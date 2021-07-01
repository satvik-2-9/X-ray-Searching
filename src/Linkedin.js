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
      const job = j.split(" ");
      for (var i = 0; i < job.length; i++){
        if (job[i].localeCompare("AND") === 0 || job[i].localeCompare("OR") === 0) { link += (job[i] + " ");} else {  
          link += (quote + job[i] + quote + " "); 
        }
      }   
    }
    
    if (location.length > 0) {
      if (jobTitle.length > 0) { link += '+'; }
      var loc = location.toUpperCase();
      const l = loc.split(" "); 
      for (var i2 = 0; i2 < l.length; i2++){
        if (l[i2].localeCompare("AND") === 0 || l[i2].localeCompare("OR") === 0) {
          link += (l[i2] + " "); 
        } else {
          link += (quote + l[i2] + quote + " "); 
        }
      }
    }
    if (exclude.length > 0) {
      link += "-" + quote;
      var tmp = exclude.toUpperCase();
      var ex = tmp.split(" ");
      for (var i3 = 0; i3 < ex.length; i3++){
        link += (ex[i3] + " "); 
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
   /*  link = " \"" + link + "\""; */
    window.open(link, 'blank'); 
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
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Assistant AND Secretary" onChange={(e) => { setexclude(e.target.value) }}></input>
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
