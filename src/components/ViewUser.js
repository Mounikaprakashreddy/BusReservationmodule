import React, {useEffect,useState} from "react";
import axios from "axios";
export function ViewUser() {

    const [userloginid,setUserId] = useState('')
    const [userloginIdFromBtn,setUserIdFromBtn] = useState('')
    const [user,setUser]= useState({})
    const [error,setError]=useState(false)

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/Api/getUser/{id}/${userloginid}`)
        .then(response=>
            {
                console.log(response.data)
                console.log(response.status)
                setUser(response.data)
                setError(false)
            })
            .catch(error=>
                {
                    console.log("error.msg")
                    setError(true)
                })
    },[userloginIdFromBtn]
    
    )

   return (
       <div className="container" class="view-bg">
           <h3 class="Dark-Line text-center">Search User</h3>
           <hr/>
           <div className="form-group mt-3">
            <input type="search"value={userloginid} onChange={(event)=>setUserId(event.target.value)} className="form-control" required/> 
            <button onClick={()=>setUserIdFromBtn(userloginid)}
    className="btn btn-primary mt-3">Search</button>
            </div>
            <br />
         
           {
               error?

               <h5 className="Dark-Line text-center">User Id not Avaliable</h5>
            : 
            <div>
                <h3>User UserId : {userloginid}</h3>
                <ul className="list-group">
                    <li>User Id : {user.userloginid} </li>
                    <li>User Name : {user.user_name} </li>
                    <li>User Password : {user.password}</li>
                    <li>User Firstname : {user.first_name}</li>
                    <li>User Lastname : {user.last_name}</li>
                    <li>User Contact : {user.contact}</li>
                    <li>User Email : {user.email_id}</li>
                   
                  
                   
                </ul>
            </div>
           
           }
       </div>
   )
}
 
export default ViewUser