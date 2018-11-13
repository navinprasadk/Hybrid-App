import React, {Component} from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default class MenuComponent extends Component{
  constructor(props){
    super(props);

  }
  render(){

    return(
      <Menu inverted fluid widths={4} style={{textAlign:"center",height:"64px",fontFamily:"Open Sans", color:"grey"}} >

        <Menu.Item name='Home' style={{fontSize:"18px"}}><Link to="/home">Home</Link> </Menu.Item>
        <Menu.Item name='feedback' style={{fontSize:"18px"}}><Link to="/feedback">Feedback</Link></Menu.Item>
        <Menu.Item name='Contact' style={{fontSize:"18px"}}><Link to="/contact">Contact</Link></Menu.Item>
        <Menu.Item name='sign-in' style={{fontSize:"18px"}}><Link to="/signin">Sign In </Link></Menu.Item>

      </Menu>

    );
  }
}
