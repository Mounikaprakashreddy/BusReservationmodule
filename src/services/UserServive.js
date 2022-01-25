import axios from "axios";

class UserService
{
   
   
    updateUser(user,userloginid)
    {
        return axios.put( `http://localhost:8080/Api/updateUser/${userloginid}`,user)
    }
}

export default new UserService()
