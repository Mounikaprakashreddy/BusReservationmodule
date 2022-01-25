import React, { Component } from 'react'
import ReservationService from '../services/ReservationService';


class CreateReservationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            reservationid: this.props.match.params.id,
            reservationstatus: '',
            reservationtype: '',
            reservationdate: '',
            reservationTime:'',
            source:'',
            destination:''
          
        }
        this.changeReservationstatusHandler = this.changeReservationstatusHandler.bind(this);
        this.changeReservationtypeHandler = this.changeReservationtypeHandler.bind(this);
        this.changeReservationdateHandler=this.changeReservationdateHandler.bind(this);
        this.changeReservationtimeHandler=this.changeReservationtimeHandler.bind(this);
        this.changeSourceHandler=this.changeSourceHandler.bind(this);
        this.changeDestinationHandler=this.changeDestinationHandler.bind(this);
        this.saveOrUpdateReservation = this.saveOrUpdateReservation.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
    ReservationService.getReservationById(this.state.reservationid).then( (res) =>{
                let reservation= res.data;
                this.setState({
                    reservationstatus: reservation.reservationstatus,
                    reservationtype : reservation.reservationtype,
                    reservationdate:reservation.reservationdate,
                    reservationTime:reservation.reservationTime,
                    source:reservation.source,
                    destination:reservation.destination
                    
                });
            });
        }        
    }
    saveOrUpdateReservation = (e) => {
        e.preventDefault();
        let reservation = {reservationstatus: this.state.reservationstatus, reservationtype: this.state.reservationtype, reservationdate: this.state.reservationdate,reservationTime:this.state.reservationTime,source: this.state.source,destination: this.state.destination};
        let reservation1 = {reservationid:this.state.reservationid,reservationstatus: this.state.reservationstatus, reservationdate: this.state.reservationdate, reservationTime: this.state.reservationTime,source:this.state.source,destination:this.state.destination};
        console.log('reservation => ' + JSON.stringify(reservation1));

        // step 5
        if(this.state.reservationid === '_add'){
            ReservationService.createReservation(reservation).then(res => {
                this.props.history.push('/getReservation');
                
            });
        }else{
            ReservationService.updateReservation(reservation1).then( res => {
                this.props.history.push('/getReservation');
            });
        }
    }
    
    changeReservationstatusHandler= (event) => {
        this.setState({reservationstatus: event.target.value});
    }

    changeReservationtypeHandler= (event) => {
        this.setState({reservationtype: event.target.value});
    }

    changeReservationdateHandler= (event) => {
        this.setState({reservationdate: event.target.value});
    }

    changeReservationtimeHandler= (event) => {
        this.setState({reservationTime: event.target.value});
    }
    changeSourceHandler= (event) => {
        this.setState({source: event.target.value});
    }
    changeDestinationHandler= (event) => {
        this.setState({destination: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/getreservations');
    }

    getTitle(){
        if(this.state.reservationid === '_add'){
            return <h3 className="text-center">Add Reservation</h3>
        }else{
            return <h3 className="text-center">Update Reservation</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                
                                <div className = "card-body">
                                   <form>
                                    <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="reservationid" className="form-control" 
                                                value={this.state.reservationid} />
                                        </div>
                                        <div className = "form-group">
                                            <label> reservationstatus: </label>
                                            <input placeholder="reservationstatus" name="reservationstatus" className="form-control" 
                                                value={this.state.reservationstatus} onChange={this.changeReservationstatusHandler}/>
                                        </div>
                                        <div  className = "form-group">
                                            <label>reservationtype: </label>
                                            <input placeholder="reservationstatus" name="reservationstatus" className="form-control" 
                                                value={this.state.reservationtype} onChange={this.changeReservationtypeHandler}/>
                                        </div>
                                        <div  className = "form-group">
                                            <label> reservationdate: </label>
                                            <input placeholder="Reservationdate" name="Reservationstatus" className="form-control" 
                                                value={this.state.reservationdate} onChange={this.changeReservationdateHandler}/>
                                       </div>
                                    

                                        <div  className = "form-group">
                                            <label> reservationtime: </label>
                                            <input placeholder="reservationTime" name="reservationTime" className="form-control" 
                                                value={this.state.reservationTime} onChange={this.changeReservationtimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> source: </label>
                                            <input placeholder="source" name="source" className="form-control" 
                                                value={this.state.source} onChange={this.changeSourceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> destination: </label>
                                            <input placeholder="desination" name="destination" className="form-control" 
                                                value={this.state.destination} onChange={this.changeDestinationHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateReservation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                      
                                   </form>
                                   
                               </div>
                                </div>
                            </div>
                        </div>

                   </div>
            
        )
        
   }
}

export default CreateReservationComponent
