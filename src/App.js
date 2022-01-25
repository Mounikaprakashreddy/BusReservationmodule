
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import Footer from './components/FooterComponent';
import ViewReservationComponent from './components/ViewReservationComponent';
import ListReservationComponent from './components/ListReservationComponent';
import CreateReservationComponent from './components/CreateReservationComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBusComponent from './components/CreateBusComponent';
import ViewBusComponent from './components/ViewBusComponent';
import ListBusComponent from './components/ListBusComponent';
import Login from './components/Login';
import { GetUser } from './components/GetUser';
import ViewUser from './components/ViewUser';
import UserUpdate from './components/UpdateUser';
import { User } from './components/User';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
     <Navbar/>
     
  
      
     
        <div className='container'>
      <Switch>
        
       <Route  path="/CreateReservationComponent/:id" component={CreateReservationComponent}/> 
       <Route  path="/ViewReservationComponent/:id" component={ViewReservationComponent}/>
       <Route  path="/Home" exact  component={Home}/>
       <Route  path="/getReservation"   component={ListReservationComponent}/>



       <Route path = "/" exact component={ListBusComponent}></Route> 
       <Route path = "/getBuses" component={ListBusComponent}></Route>
       <Route path = "/add-bus/:id" component={CreateBusComponent}></Route>
       <Route path = "/view-bus/:id" component={ViewBusComponent} ></Route>


       <Route path = "/" exact component={User}></Route> 
       <Route path = "/GetUser" component={GetUser}></Route>
       <Route path = "/ViewUser/:id" component={ViewUser}></Route>
       <Route path = "/User/:id" component={User} ></Route>

       <Route path="/Login" components={Login}></Route>


      



     
       </Switch>
       </div>
  
    
     <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
