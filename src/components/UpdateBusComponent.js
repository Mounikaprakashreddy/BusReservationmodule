import React, { Component } from 'react'
import BusService from '../services/BusService';

class UpdateBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            busid: this.props.match.params.id,
            ArrivalTime: '',
            Availableseats: '',
            BusName: '',
            BusType:'',
            Departuretime:'',
            DriverName:'',
            Route:'',
            RouteFrom:'',
            Seats:''
        }
        this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
        this.changeAvailableseatsHandler = this.changeAvailableseatsHandler.bind(this);
        this.changeBusNameHandler=this.changeBusNameHandler.bind(this);
        this.changeBusTypeHandler=this.changeBusTypeHandler.bind(this);
        this.changeDeparturetimeHandler=this.changeDeparturetimeHandler.bind(this);
        this.changeDriverNameHandler=this.changeDriverNameHandler.bind(this);
        this.changeRouteHandler=this.changeRouteHandler.bind(this);
        //
        this.changeSeatsHandler=this.changeSeatsHandler.bind(this);
        this.saveOrUpdateBus = this.saveOrUpdateBus.bind(this);
    }

    
    componentDidMount(){
            BusService.getBusById(this.state.busid).then( (res) =>{
                let bus = res.data;
                this.setState({ArrivalTime: bus.ArrivalTime,
                    Availableseats: bus.Availableseats,
                    BusName : bus.BusName,
                    BusType:bus.BusType,
                    Departuretime:bus.Departuretime,
                    DriverName:bus.DriverName,
                    Route:bus.Route,
                    RouteFrom:bus.RouteFrom,
                    Seats:bus.Seats
                });
            });
        }        
    
    UpdateBus = (e) => {
        e.preventDefault();
        let bus = {ArrivalTime: this.state.ArrivalTime, Availableseats: this.state.Availableseats, BusName: this.state.BusName,BusType:this.state.BusType,Departuretime: this.state.Departuretime,DriverName: this.state.DriverName,Route: this.state.Route,RouteFrom: this.state.RouteFrom,Seats: this.state.Seats};
        let bus1 = {busid:this.state.busid,ArrivalTime: this.state.ArrivalTime, Availableseats: this.state.Availableseats, BusName: this.state.BusName,BusType:this.state.BusType,Departuretime: this.state.Departuretime,DriverName: this.state.DriverName,Route: this.state.Route,RouteFrom: this.state.RouteFrom,Seats: this.state.Seats};
        console.log('bus => ' + JSON.stringify(bus));
        console.log('id => ' + JSON.stringify(this.state.eid));
        BusService.updateBus(bus).then( res => {
            this.bus=res.data;
            this.props.history.push('/getBuses');
        });
    }
    
    
    changeArrivalTimeHandler= (event) => {
        this.setState({ArrivalTime: event.target.value});
    }

    changeAvailableseatsHandler= (event) => {
        this.setState({Availableseats: event.target.value});
    }

    changeBusNameHandler= (event) => {
        this.setState({BusName: event.target.value});
    }

    changeBusTypeHandler= (event) => {
        this.setState({BusType: event.target.value});
    }
    changeDeparturetimeHandler= (event) => {
        this.setState({Departuretime: event.target.value});
    }
    changeDriverNameHandler= (event) => {
        this.setState({DriverName: event.target.value});
    }
    changeRouteHandler= (event) => {
        this.setState({Route: event.target.value});
    }
    changeRouteFromeHandler= (event) => {
        this.setState({RouteFrom: event.target.value});
    }
    changeSeatsHandler= (event) => {
        this.setState({Seats: event.target.value});
    }
    cancel(){
        this.props.history.push('/getBuses');
    }

    getTitle(){
        if(this.state.busid === '_add'){
            return <h3 className="text-center">Add Bus</h3>
        }else{
            return <h3 className="text-center">Update Bus</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Bus</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Id: </label>
                                            <input  name="eid" className="form-control" 
                                                value={this.state.id} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Arrival Time: </label>
                                            <input placeholder="Arrival Time" name="ArrivalTime" className="form-control" 
                                                value={this.state.ArrivalTime} onChange={this.changeArrivalTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Availableseats: </label>
                                            <input placeholder="Available seats" name="Availableseats" className="form-control" 
                                                value={this.state.Availableseats} onChange={this.changeAvailableseatsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> BusName: </label>
                                            <input placeholder="Bus Name" name="BusName" className="form-control" 
                                                value={this.state.BusName} onChange={this.changeBusNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> BusType: </label>
                                            <input placeholder="Bus Type" name="BusType" className="form-control" 
                                                value={this.state.BusType} onChange={this.changeBusTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Departuretime: </label>
                                            <input placeholder="Departuretime" name="Departuretime" className="form-control" 
                                                value={this.state.Departuretime} onChange={this.changeDeparturetimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DriverName: </label>
                                            <input placeholder="DriverName" name="DriverName" className="form-control" 
                                                value={this.state.DriverName} onChange={this.changeDriverNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Route: </label>
                                            <input placeholder="Route" name="Route" className="form-control" 
                                                value={this.state.Route} onChange={this.changeRouteHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> RouteFrom: </label>
                                            <input placeholder="Route From" name="RouteFrom" className="form-control" 
                                                value={this.state.RouteFrom} onChange={this.changeRouteFromeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Seats: </label>
                                            <input placeholder="Seats" name="Seats" className="form-control" 
                                                value={this.state.Seats} onChange={this.changeSeatsHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateBus}>Update</button>
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

export default UpdateBusComponent
