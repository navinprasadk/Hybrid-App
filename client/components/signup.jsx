import React, {Component} from 'react';
import { Grid, Input, Checkbox, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default class Signin extends Component{
  constructor(props){
    super(props);
  }

render(){
  return(

    <Grid>

    <Grid.Row style={{marginTop:"20%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", textTransform:"capitalize", letterSpacing:"2px",fontFamily:"Open Sans"}} ><h1>Create Your Account</h1></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{marginTop:"0%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}><Input fluid icon='user' iconPosition='left' placeholder='Name*' required /></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{marginTop:"0%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}><Input fluid icon='mail' iconPosition='left' placeholder='Email Address*' required /></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{marginTop:"0%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}><Input fluid icon='mobile' iconPosition='left' placeholder='Mobile Number*' required /></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{marginTop:"0%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}><Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password*' type="password" required/></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{marginTop:"2%"}} only='mobile'>
      <Grid.Column width={5}></Grid.Column>
      <Grid.Column width={6}> <center><Button fluid style={{borderRadius:"25px", letterSpacing:"2px", fontWeight:"bold", textTransform:"uppercase", fontSize:"100%"}}>SIGN UP</Button></center></Grid.Column>
      <Grid.Column width={5}></Grid.Column>
    </Grid.Row>

    <Grid.Row style={{margiTop:"-2%"}} only='mobile'>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"1px",fontFamily:"Open Sans"}} >Already have an account? <Link to="/signin"> SIGNIN</Link></Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid.Row>

  </Grid>


  );
}


}
