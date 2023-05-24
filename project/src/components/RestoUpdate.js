
import React, { Component } from 'react'
import withRouter from './withrouter'
 class RestoUpdate extends Component {
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
componentDidMount(){
  fetch('http://localhost:3000/Resto/'+this.props.params.id).then((response)=>{
    response.json().then((result)=>{
      // console.log(result);
      this.setState({name:result.name,
        address:result.address,
        rating:result.rating,
        email:result.email})
    })
  })
}
update(){
  fetch('http://localhost:3000/Resto/'+this.props.params.id,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((res)=>{
res.json().then((result)=>{
alert('data update');
})
  })
}

  render() {
    console.log(this.state);
    // console.log('Props:', this.props.params.id)
    return (
      <>
     <div>
     <center>
 <h1>Resto Create Form</h1>
 <div>
    <input type="text" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/>
    <br/><br/>
    <input type="text" placeholder="Enter Address" onChange={(e)=>{this.setState({address:e.target.value})}} value={this.state.address}/>
    <br/><br/>
    <input type="text" placeholder="Enter rating" onChange={(e)=>{this.setState({rating:e.target.value})}} value={this.state.rating}/>
    <br/><br/>
    <input type="text" placeholder="Enter email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email}/>
    <br/><br/>
    <button onClick={()=>this.update()}>update</button>
 </div>
 </center>
     </div>
      </>
    )
  }
}
export default withRouter(RestoUpdate);