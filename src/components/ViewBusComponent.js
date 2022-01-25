import React, { Component } from 'react'
import BusService from '../services/BusService'
class ViewBusComponent extends Component {
    constructor(props) {
       super(props)

      this.state = {
            id: this.props.match.params.id,            
            bus: {}      
   }
}

   componentDidMount(){
      BusService.getBusById(this.state.id).then( res => {
           this.setState({bus: res.data});
          
       })
       
   }

  render() {     
  return ( 
      <div>            
     <br></br>
               <div className = "card col-md-6 offset-md-3">
                   <h3 className = "text-center"> View Bus Details</h3>
                   <div className = "card-body">
                       <div className = "row">
                            <label> Bus busName: </label>
                           <div> {this.state.bus.busName}</div>
                       </div>
                        <div className = "row">
                            <label> Bus driverName: </label>
                            <div> {this.state.bus.driverName}</div> 
                                                    </div>
                       <div className = "row">
                           <label> Bus busType: </label>
                            <div> {this.state.bus.busType}</div>   
                                               </div>  
                        <div className = "row">
                           <label> Bus routeFrom: </label>
                          <div>{this.state.bus.routeFrom}</div>
                      </div>
                     <div className = "row">
                         <label> Bus route: </label>
                          <div>{this.state.bus.route}</div>
                      </div>
                      <div className = "row">
                          <label> Bus arrivalTime: </label>
                           <div>{this.state.bus.arrivalTime}</div>                        
                            </div>
                       <div className = "row">
                           <label> Bus departuretime: </label>
                           <div>{this.state.bus.departuretime}</div>
                       </div>                     
          <div className = "row"> <label> Bus seats: </label>
                          <div>{this.state.bus.seats}</div>
                     </div>
                     <div className = "row">
                         <label> Bus availableseats: </label>
                         <div>{this.state.bus.availableseats}</div>
                      </div>
                   </div>                
                    </div>
           </div>
       )
   }
}
export default ViewBusComponent
