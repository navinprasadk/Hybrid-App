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
      <Grid className="signin">
        <Grid.Row style={{marginTop:"30%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", textTransform:"capitalize", letterSpacing:"2px",fontFamily:"Open Sans"}} ><h1>Log into your account</h1></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"10%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}><Input fluid icon='user' iconPosition='left' placeholder='Email Address' /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"5%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}><Input fluid icon='lock' iconcolor="blue" iconPosition='left' type="password" placeholder='Password' /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"-2%"}} only='mobile'>
          <Grid.Column width={7}></Grid.Column>
          <Grid.Column width={7}>  <Checkbox  label={<label style={{letterSpacing:"1px"}}>Remember me</label>} /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"2%"}} only='mobile'>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={6}> <center><Button fluid  style={{borderRadius:"5px", boxShadow: "7px 16px 24px #eee", letterSpacing:"2px", fontWeight:"bold", textTransform:"uppercase", fontSize:"100%"}}>SIGN IN</Button></center></Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid.Row>


        <Grid.Row style={{margiTop:"-2%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"1px",fontFamily:"Open Sans"}} >Don't have an account? <Link to="/signup"> REGISTER</Link></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}
