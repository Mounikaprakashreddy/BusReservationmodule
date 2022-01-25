import React, { Component } from 'react'
import ReservationService from '../services/ReservationService'
import {Route, history}from 'react-router-dom'
import CreateReservationComponent from './CreateReservationComponent';

class ListReservationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                reservations: []
        }
        this.addReservation = this.addReservation.bind(this);
        this.editReservation = this.editReservation.bind(this);
        this.deleteReservation = this.deleteReservation.bind(this);
    }

    deleteReservation(id){
        ReservationService.deleteReservation(id).then( res => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.id !== id) });
            
        });
    }
    viewReservation(id){
        this.props.history.push(`/ViewReservationComponent/${id}`);
    }
    editReservation(id){
        this.props.history.push(`/CreateReservationComponent/${id}`);
    }

    componentDidMount(){
        ReservationService.getReservations().then((res) => {
            this.setState({ reservations: res.data});
        });
    }
    addReservation(){
        this.props.history.push('/CreateReservationComponent/_add');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Reservation List</h2>
                 <div className = "row">
                    <button className="btn btn-secondary" onClick={this.addReservation}> Add Reservation</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>reservation Id</th>
                                    <th>Reservation reservationstatus</th>
                                    <th>Reservation reservationtype</th>
                                    <th>Reservation reservationdate</th>
                                    <th>Reservation reservationtime</th>
                                    <th>Reservation source</th>
                                    <th>Reservation destination</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key = {reservation.reservationid}>
                                            <td>{reservation.reservationid}</td>
                                            <td> {reservation.reservationstatus} </td> 
                                             <td> {reservation.reservationtype} </td>   
                                             <td> {reservation.reservationdate}</td>
                                             <td> {reservation.reservationTime}</td>
                                             <td> {reservation.source}</td>
                                             <td> {reservation.destination}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editReservation(reservation.reservationid)} className="btn btn-sucess">Update </button>
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.deleteReservation(reservation.reservationid)} className="btn btn-secondary">Delete </button>
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.viewReservation(reservation.reservationid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}

export default ListReservationComponent