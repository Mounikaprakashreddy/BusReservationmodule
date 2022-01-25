import React, { Component } from 'react'
import BusService from '../services/BusService'
import {Route, history}from 'react-router-dom'

class ListBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                buses: []
        }
        this.addBus = this.addBus.bind(this);
        this.editBus = this.editBus.bind(this);
        this.deleteBus = this.deleteBus.bind(this);
    }

    deleteBus(id){
        BusService.deleteBus(id).then( res => {
            this.setState({buses: this.state.buses.filter(bus => bus.id !== id) });
            
        });
    }
    viewBus(id){
        this.props.history.push(`/view-bus/${id}`);
    }
    editBus(id){
        this.props.history.push(`/add-bus/${id}`);
    }

    componentDidMount(){
        BusService.getBuses().then((res) => {
            this.setState({ buses: res.data});
        });
    }
    addBus(){
        this.props.history.push('/add-bus/_add');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Bus List</h2>
                 <div className = "row">
                    <button className="btn btn-secondary active" onClick={this.addBus}> Add Bus</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Bus Id</th>
                                    <th>Bus busName</th>
                                    <th>Bus driverName</th>
                                    <th>Bus busType</th>
                                    <th> Bus routeFrom</th>
                                    <th> Bus route</th>
                                    <th> Bus arrivalTime</th>
                                    <th> Bus departuretime</th>
                                    <th> Bus seats</th>
                                    <th> Bus availableseats</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.buses.map(
                                        bus => 
                                        <tr key = {bus.busid}>s
                                            <td> { bus.busid} </td> 
                                             <td> { bus.busName} </td>   
                                             <td> {bus.driverName}</td>
                                             <td> {bus.busType}</td>
                                             <td> {bus.routeFrom}</td>
                                             <td> {bus.route}</td>
                                             <td> {bus.arrivalTime}</td>
                                             <td> {bus.departuretime}</td>
                                             <td> {bus.seats}</td>
                                             <td> {bus.availableseats}</td>
                                             <td>
                                                 <button onClick={ () => this.editBus(bus.busid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBus(bus.busid)} className="btn btn-sucess">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBus(bus.busid)} className="btn btn-secondary">View </button>
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}

export default ListBusComponent
