import React,{Component} from "react";
import SignUpService from "../Service/SignUpService";
export default class Signup extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            route1Id:'',
            distance:'',
            route1from:'',
            route1to:'',
            
        }
    }

    handleroute1Id=(event)=>
    {
        this.setState(
            {
                routeId:event.target.value
            }
        )
    }

    handledistance=(event)=>
    {
        this.setState(
            {
                distance:event.target.value
            }
        )
    }

    handleroute1from=(event)=>
    {
        this.setState(
            {
                route1from:event.target.value
            }
        )
    }

    handleroute1to=(event)=>
    {
        this.setState(
            {
                route1to:event.target.value
            }
        )
    }

    

    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.saveRoute1(this.state)
    }

    saveRoute1(route1)
    {
        SignUpService.saveRoute1(route1).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div className="container">
            <form className="form-wrapper" onSubmit={this.handleForSubmission}>
                <div className="name">
                <h2 className="title">SignUp</h2>
                <hr/>
                    <label>Route1 Id</label>
                    <input onChange={this.handlerouteId} value={this.state.routeId} className="form-control"/>
                </div>

                <div className="name">
                    <label>Distance</label>
                    <input onChange={this.handledistance} value={this.state.distance} className="form-control"/>
                </div>

                <div className="name">
                    <label>Route1 From</label>
                    <input onChange={this.handleroute1from} value={this.state.route1from} className="form-control"/>
                </div>

                <div className="name">
                    <label>Route1To</label>
                    <input onChange={this.handleroute1to} value={this.state.route1to} className="form-control"/>
                </div>

                
                <button className="submit">Sign Up</button>
            </form>
            </div>
            
        )
    }
}