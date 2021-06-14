import React from "react" ;
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" ;
import Header from "./Header"
import Home from "./Home"
import Linkedin from "./Linkedin"
import Footer from "./Footer"

// we will use react-router for the routing part.
function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/Linkedin"> 
            <Header></Header>
            <Linkedin></Linkedin>
          </Route>
          
          <Route path="/github">
          </Route>
          
          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
      
          <Route path="/:random">
               <h1>wrong address</h1>
          </Route>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App;
