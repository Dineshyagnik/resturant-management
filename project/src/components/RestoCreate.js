
import React, { Component } from 'react'

export default class RestoCreate extends Component {
constructor(props)
{
    super(props);
    this.state={
        name:null,
        address:null,
        rating:null,
        email:null

    }
} 
create=()=>{
    fetch('http://localhost:3000/Resto',{
        method:'post',
        headers:{
'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
result.json().then((res)=>{
console.log(res);
})
    })
}
  render() {
    return (
        <>
        <center>
 <h1>Resto Create Form</h1>
 <div>
    <input type="text" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
    <br/><br/>
    <input type="text" placeholder="Enter Address" onChange={(e)=>{this.setState({address:e.target.value})}}/>
    <br/><br/>
    <input type="text" placeholder="Enter rating" onChange={(e)=>{this.setState({rating:e.target.value})}}/>
    <br/><br/>
    <input type="text" placeholder="Enter email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
    <br/><br/>
    <button onClick={this.create}>Submit</button>
 </div>
 </center>
        </>
    )
  }
}
