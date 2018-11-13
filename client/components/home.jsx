import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import Menu from './menu.jsx';
import '../styles/style.css';

export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Grid>

        <Grid.Row>
          <Menu/>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"2px",fontFamily:"Open Sans"}} ><h1>Welcome to the home page</h1></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

    </Grid>
    );
  }
}
