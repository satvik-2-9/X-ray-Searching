import React, { useState} from 'react'
import "./Linkedin.css"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Linkedin() {
   

    const [jobTitle, setjobTitle] = useState("");
    const [location, setlocation] = useState("");
    const [exclude, setexclude] = useState(""); 
    const [education, seteducation] = useState("Bachelors");
    const [currentEmpoyer, setcurrentEmpoyer] = useState("");
    const [check, setcheck] = useState(false); 
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
        if (l[i2].localeCompare("AND") === 0 || l[i2].localeCompare("OR") === 0) { link += (l[i2] + " "); }
        else {  link += (quote + l[i2] + quote + " ");  }
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
      if (education != "All Candidates") {
        link += ("&as_oq=");
        if (education === "Masters Degree") {
          link += "masters+mba+master+diplome+msc+magister+magisteres+maitrise";
        } else if (education === "Doctoral Degree") {
          link += "dr+Ph.D.+PhD+D.Phil+DPhil+doctor+Doctorado+Doktor+Doctorat+Doutorado+DrSc+Tohtori+Doctorate+Doctora+Duktorah+Dottorato+Daktaras+Doutoramento+Doktorgrad";
        } else if (education === "Bachelors Degree") {
          link += "bachelor+degree+licence"; 
        } else if (education === "High School") {
          link += "Graduate"; 
        }

      }
    }

    if (currentEmpoyer.length > 0) {
      link += ("+" + quote + "Current+%2A+" + currentEmpoyer + "%2A+" + quote);
    }
    /*  link = " \"" + link + "\""; */
    
    
    if (check) {
      var d = link;
      link = d.substr(0, 32);
      link += '~';
      link += d.substr(32, d.length - 32); 
    }
     
  
    window.open(link, 'blank'); 
    
    /* with related ticked on -> http://www.google.com/search?q=~+"cfo"+"LONDON" -intitle:"profiles" -inurl:"dir/+"+site:hu.linkedin.com/in/+OR+site:hu.linkedin.com/pub/ */
    /* with related ticked off-> http://www.google.com/search?q=+"cfo"+"LONDON" -intitle:"profiles" -inurl:"dir/+"+site:hu.linkedin.com/in/+OR+site:hu.linkedin.com/pub/  */

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
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. SALES OR MARKETING" onChange={(e) => {setjobTitle(e.target.value) }}></input>
    </div>
        </div>


        <div className="form-group row check">
             
          {/* basically i can tap into the properties of the HTML element that were affected in the event. */}
          <div className="bx">  
            <input type="checkbox"  onChange={(e) => { setcheck(e.target.checked) }} ></input>
            <label className="x" >Show similar jobs?</label>
            </div>
        </div>

    <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Location: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. DELHI AND MUMBAI" onChange={(e) => { setlocation(e.target.value) }}></input>
    </div>
          </div>

      
        
          <div className="form-group row">
    <label  className="col-sm-2 col-form-label text-center">Education: </label>
          <div className="col-sm-10 ">
            
            {/* <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Bachelor's Degree" onChange={(e) => { seteducation(e.target.value) }}></input> */}
            <select className="dropdown" onChange={(e)=>{seteducation(e.target.value)}}>
              <option value="High School">High School</option>
              <option selected value="Bachelors">Bachelors Degree</option>
              <option value="Masters">Masters Degree</option>
              <option value="Doctoral">Doctoral Degree</option>
              <option value="All Candidates">All Candidates</option>
              </select>
          </div>
     </div>
          <div className="form-group row ">
    <label  className="col-sm-2 col-form-label text-center">Current Employer: </label>
    <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Airtel" onChange={(e) => { setcurrentEmpoyer(e.target.value) }}></input>
    </div>
        </div>
        <div className="form-group row">
       <label  className="col-sm-2 col-form-label text-center">Keywords to exclude: </label>
        <div className="col-sm-10">
            <input type="text" className="form-control text-center" id="inputPassword3" placeholder="Eg. Assistant AND Secretary" onChange={(e) => { setexclude(e.target.value) }}></input>
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
