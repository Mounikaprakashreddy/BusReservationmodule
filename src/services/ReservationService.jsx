
import axios from 'axios';

const RESERVATION_API_BASE_URL = "http://localhost:8080/rpi";

class ReservationService {

    getReservations(){
        return axios.get('http://localhost:8080/rpi/getReservations');
    }

    createReservation(reservation){
        return axios.post('http://localhost:8080/rpi/addReservation', reservation);
    }

    getReservationById(id){
        return axios.get('http://localhost:8080/rpi/getReservation/'+id);
    }

    updateReservation(reservation){
        return axios.put('http://localhost:8080/rpi/updateReservation',reservation);
    }

    deleteReservation(id){
        return axios.delete('http://localhost:8080/rpi/deleteReservation/'+id);
    }
}

export default new ReservationService()