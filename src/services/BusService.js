import axios from 'axios';

const BUS_API_BASE_URL = "http://localhost:8080/api";

class BusService {

    getBuses(){
        return axios.get('http://localhost:8080/api/getBuses');
    }

    createBus(bus){
        return axios.post('http://localhost:8080/api/addBuses', bus);
    }

    getBusById(busid){
        return axios.get('http://localhost:8080/api/getBus/'+busid);
    }

    updateBus(bus){
        return axios.put('http://localhost:8080/api/updateBus',bus);
    }

    deleteBus(busid){
        return axios.delete('http://localhost:8080/api/deleteBusId/'+ busid);
    }
}

export default new BusService()