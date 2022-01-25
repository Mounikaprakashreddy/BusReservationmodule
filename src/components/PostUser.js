import React, {Component } from "react";
import axios from "axios";

export class PostUser extends Component{
constructor(props){
    super(props)
    
    this.state={
         userloginid : '',
         user_name: '',
         password: '',
         first_name : '',
         last_name : '',
         contact : '',
         email_id : '',
         
    }
}

userloginidHandler=(e)=>{
    this.setState({
    userloginid:e.target.value
    })
}

user_nameHandler=(e)=>{
    this.setState({
        user_name:e.target.value
})
}
passwordHandler=(e)=>{
    this.setState({
        password:e.target.value
})
}

first_nameHandler=(e)=>{
    this.setState({
        first_name:e.target.value
})
}
last_nameHandler=(e)=>{
    this.setState({
        last_name:e.target.value
})
}

contactHandler=(e)=>{
    this.setState({
        contact:e.target.value
})
}

email_idHandler=(e)=>{
    this.setState({
        email_id:e.target.value
})
}
submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/api/addUser',this.state)
    .then(response => {
        console.log(response)
        alert('User added sucessfully')
        this.state({
            userloginid : '',
            user_name: '',
            password: '',
            first_name : '',
            last_name : '',
            contact : '',
            email_id : '',
        })
    })
    .catch(error=>{
        console.log(error)
        this.setState({
            msg : "Enter Valid Details"
        })
        
    })
}
render()
{
    const { userloginid ,user_name ,password ,first_name ,last_name ,contact ,email_id } = this.state
    return(

        <div class="post-bg">
           <form onSubmit={this.submitHandler} class="align-items-center">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                
                        <div class="form-group">
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>User Id</b></label>
                                <input type="number" class="form-control" id="inputRoomId" value = {userloginid}  onChange={this.userloginidHandler} required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-LIne"><b>user name</b></label>
                                <input type="text" class="form-control" id="inputHotelId" value = {user_name}  onChange={this.user_nameHandler} required/>
                            
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Password</b></label>
                                <input type="text" class="form-control" id="inputRoom_number"  value = {password}  onChange={this.passwordHandler} required/>
                        
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>First_name</b></label>
                                <input type="text" class="form-control" id="inputRoom_type" value = {first_name}  onChange={this.first_nameHandler} required/>
                        
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>last_name</b></label>
                                <input type="text" class="form-control" id="inputRate_per_day" value = {last_name}  onChange={this.last_nameHandler} required/>

                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>contact</b></label>
                                <input type="number" class="form-control" id="inputRate_per_day" value = {contact}  onChange={this.contactHandler} required/>
                            </div>
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>email_id</b></label>
                                <input type="text" class="form-control" id="inputisavailable"value = {email_id}  onChange={this.email_idHandler} required/>
                            </div>
                            <br/>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" class="btn btn-primary" >Submit</button>
                            </div>
                        </div> 
                    </div>
                </div>      
            </form>
        
        </div>
    )
}

}