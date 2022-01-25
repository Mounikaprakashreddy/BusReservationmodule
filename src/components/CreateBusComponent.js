import React, { Component } from 'react'
import BusService from '../services/BusService';

class CreateBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            busid: this.props.match.params.id,
            busName: '',
            driverName:'',
            busType: '',
            routeFrom: '',
            route:'',
            arrivalTime:'',
            departuretime:'',
            seats:'',
            availableseats:''
        }
        this.changebusNameHandler = this.changebusNameHandler.bind(this);
        this.changedriverNameHandler = this.changedriverNameHandler.bind(this);
        this.changebusTypeHandler=this.changebusTypeHandler.bind(this);
        this.changerouteFromHandler=this.changerouteFromHandler.bind(this);
        this.changerouteHandler=this.changerouteHandler.bind(this);
        this.changearrivalTimeHandler=this.changearrivalTimeHandler.bind(this);
        this.changedeparturetimeHandler=this.changedeparturetimeHandler.bind(this);
        this.changeseatsHandler=this.changeseatsHandler.bind(this);
        
        this.changeavailableseatsHandler=this.changeavailableseatsHandler.bind(this);
        this.saveOrUpdateBus = this.saveOrUpdateBus.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BusService.getBusById(this.state.busid).then( (res) =>{
                let bus = res.data;
                this.setState({busName: bus.busName,
                    driverName: bus.driverName,
                    busType : bus.busType,
                    routeFrom:bus.routeFrom,
                    route:bus.route,
                    arrivalTime:bus.arrivalTime,
                    departuretime:bus.departuretime,
                    seats:bus.seats,
                    availableseats:bus.availableseats
                });
            });
        }        
    }
    saveOrUpdateBus = (e) => {
        e.preventDefault();
        let bus = {busName: this.state.busName, driverName: this.state.driverName, busType: this.state.busType,routeFrom:this.state.routeFrom,route: this.state.route,arrivalTime: this.state.arrivalTime,departuretime: this.state.departuretime,seats: this.state.seats,availableseats: this.state.availableseats};
        let bus1 = {busid:this.state.busid,busName: this.state.busName, driverName: this.state.driverName, busType: this.state.busType,routeFrom:this.state.routeFrom,route: this.state.route,arrivalTime: this.state.arrivalTime,departuretime: this.state.departuretime,seats: this.state.seats,availableseats: this.state.availableseats};
        console.log('bus => ' + JSON.stringify(bus1));

        // step 5
        if(this.state.busid === '_add'){
            BusService.createBus(bus).then(res => {
                this.props.history.push('/getBuses');
            });
        }else{
            BusService.updateBus(bus1).then( res => {
                this.props.history.push('/getBuses');
            });
        }
    }
    
    changebusNameHandler= (event) => {
        this.setState({busName: event.target.value});
    }

    changedriverNameHandler= (event) => {
        this.setState({driverName: event.target.value});
    }

    changebusTypeHandler= (event) => {
        this.setState({busType: event.target.value});
    }

    changerouteFromHandler= (event) => {
        this.setState({routeFrom: event.target.value});
    }
    
    changerouteHandler= (event) => {
        this.setState({route: event.target.value});
    }
    changearrivalTimeHandler= (event) => {
        this.setState({arrivalTime: event.target.value});
    }
    changedeparturetimeHandler= (event) => {
        this.setState({departuretime: event.target.value});
    }
    changeseatsHandler= (event) => {
        this.setState({seats: event.target.value});
    }
    changeavailableseatsHandler= (event) => {
        this.setState({availableseats: event.target.value});
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
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="busid" className="form-control" 
                                               value={this.state.busid} /> 
                                        </div>
                                        <div className = "form-group">
                                            <label>  busName: </label>
                                            <input placeholder="bus Name" name="busname" className="form-control" 
                                                value={this.state.busName} onChange={this.changebusNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>driverName: </label>
                                            <input placeholder="driver Name" name="drivername" className="form-control" 
                                                value={this.state.driverName} onChange={this.changedriverNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> busType: </label>
                                            <input placeholder="bus Type" name="bustype" className="form-control" 
                                                value={this.state.busType} onChange={this.changebusTypeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> routeFrom: </label>
                                            <input placeholder="route From" name="routefrom" className="form-control" 
                                                value={this.state.routeFrom} onChange={this.changerouteFromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> route: </label>
                                            <input placeholder="route" name="route" className="form-control" 
                                                value={this.state.route} onChange={this.changerouteHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> arrivalTime: </label>
                                            <input placeholder="arrival Time" name="arrivaltime" className="form-control" 
                                                value={this.state.arrivalTime} onChange={this.changearrivalTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> departuretime: </label>
                                            <input placeholder="departuretime" name="departuretime" className="form-control" 
                                                value={this.state.departuretime} onChange={this.changedeparturetimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> seats: </label>
                                            <input placeholder="seats" name="seats" className="form-control" 
                                                value={this.state.seats} onChange={this.changeseatsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> availableseats: </label>
                                            <input placeholder="availableseats" name="Seats" className="form-control" 
                                                value={this.state.availableseats} onChange={this.changeavailableseatsHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateBus}>Save</button>
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

export default CreateBusComponent
