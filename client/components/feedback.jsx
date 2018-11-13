import React, {Component} from 'react';
import { Grid, Input , Button, TextArea} from 'semantic-ui-react';
import Menu from './menu.jsx';
import '../styles/style.css';

export default class Feedback extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Grid>

        <Grid.Row only='mobile'>
          <Menu/>
        </Grid.Row>

        <Grid.Row style={{marginTop:"20%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"2px",fontFamily:"Open Sans"}} ><h1>Feedback</h1></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"0%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}><Input fluid placeholder='Your Name*' required /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"0%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}><Input fluid placeholder='Your Email Address*' required /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"0%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Input fluid list='Feedback Category' placeholder='Category*' required/>
              <datalist id='Feedback Category'>
                <option value='website not working' />
                <option value='support needed' />
                <option value='product related ' />
              </datalist>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"0%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}><Input fluid  placeholder='Tell about your feedback*' required /></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop:"2%"}} only='mobile'>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={6}> <center><Button fluid  style={{borderRadius:"5px", boxShadow: "5px 10px 18px #eee", letterSpacing:"2px", fontWeight:"bold", textTransform:"uppercase", fontSize:"100%"}}>Submit</Button></center></Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid.Row>

     </Grid>
    );
  }
}
