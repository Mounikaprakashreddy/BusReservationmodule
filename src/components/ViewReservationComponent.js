import React, { Component } from 'react'
import ReservationService from '../services/ReservationService'

class ViewReservationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            reservation: {}
        }
    }

    componentDidMount(){
        ReservationService.getReservationById(this.state.id).then( res => {
            this.setState({reservation: res.data});
           
        })
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Reservation Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  reservationstatus: </label>
                            <div> {this.state.reservation.reservationstatus}</div>
                        </div>
                        <div className = "row">
                            <label>  reservationtype: </label>
                            <div> {this.state.reservation.reservationtype}</div>
                        </div>
                        <div className = "row">
                            <label>  reservationdate: </label>
                            <div> {this.state.reservation.reservationdate}</div>
                        </div>
                        <div className = "row">
                            <label>  reservationtime: </label>
                            <div>{this.state.reservation.reservationTime}</div>
                        </div>
                        <div className = "row">
                            <label> Source: </label>
                            <div>{this.state.reservation.source}</div>
                        </div>
                        <div className = "row">
                            <label> Destination: </label>
                            <div>{this.state.reservation.destination}</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewReservationComponent