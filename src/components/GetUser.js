import { Component } from "react";
import axios from 'axios'

export class GetUser extends Component{
constructor(props){
    super(props)

    this.state={
             users : [],
             errorMsg : ""
    }
}

componentDidMount(){
    axios.get('http://localhost:8080/Api/getUsers')
    .then(response=>{
        console.log(response)
        this.setState({
            users  : response.data
        })
    }).catch(error=>{
        console.log(console.error)
        this.setState({
            errorMsg : "Error in retreiving data"
        })
    })
}


deleteUser=(userloginid)=>{
    // DeletePizzaService.deletepizza(pizzaid)
    axios.delete('http://localhost:8080/Api/'+userloginid,this.state)
    .then((response) =>{
        if(response.data!=null){
            alert("User deleted Successfully");
            this.setState({
                users:this.state.users.filter(users=>users.userloginid!==userloginid)

                });
            }
        });
    }
    getUsers(userloginid){

    }
     

    render(){
        return (
        <div class="list-bg">
        <div className="container" >
        <h2 className="text-primary text-center">User List</h2>
        <hr/>

        <table className ="table table-bordered border-primary">
            <thead>
                <tr>
                    <th>User id</th>
                    <th>User Name </th>
                    <th>Password</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Contact</th>
                    <th>Email_id</th>
                   
                   
                </tr>
            </thead>

            <tbody>
                {
                    this.state.users.map(
                        user =>
                        <tr key = {user.userloginid}>
                            <td>{user.userloginid}</td>
                            <td>{user.user_name}</td>
                            <td>{user.password}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.contact}</td>
                            <td>{user.email_id}</td>
                            <td><button className="btn btn-warning" onClick={() => this.deleteUser(user.userloginid)}>Delete</button></td>
                        </tr>
                    )
                    }
            </tbody>
        </table>
        </div>
        </div>
        )
    }
    }