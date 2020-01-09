import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component{
   
    state={
        name:'',
        email:'',
        password:'',
        role:''
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name:decoded.name,
            email:decoded.email,
            password:decoded.password,
            role:decoded.role
        })
    }
    render(){
        return(
            <div style={{marginTop:'10px'}}>
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center mb-5">Profile</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{this.state.role}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Profile