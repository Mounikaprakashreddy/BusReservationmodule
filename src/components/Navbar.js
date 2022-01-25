import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Bus Reservation</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"   aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div >
    <ul class="navbar-nav">
       <li class="nav-item active">
        <Link  class="nav-link" to="/Home">Home <span class="sr-only"></span></Link>
      </li> 
      <li class="nav-item">
        <Link class="nav-link" to="/User">user</Link>
      </li>
  
      <li class="nav-item">
        <Link class="nav-link" to="/getBuses">Bus</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/getReservation">Reservation</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/getRoute">FeedBack</Link>
      </li>
     
     {/*  <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/SingUp">SingUp</Link>
      </li> */}

     
     
    </ul>
      

  </div>
  </nav>
  </div>

  );
  }
  export default Navbar