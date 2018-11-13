import React, {Component} from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Menu from './menu.jsx';
import '../styles/style.css';

const locationDetails = [
  {
    header: 'Bangalore - Head Quarters',
    description: 'Plot No 1, Pateel complex, Rajiv Gandhi Nagar, Bangalore - 560068',
    meta: 'blore@hybrid.com',
  },
  {
    header: 'Chennai - Branch',
    description: 'No 62, Durga Apartments, Maha Avenue, Kanthanchavadi, Old Mahabalipuram Road, Chennai - 600011',
    meta: 'chennai@hybrid.com',
  },
  {
    header: 'Tuticorin - Branch',
    description: 'No 17, DSF Plaza, VE Road, Tuticorin - 628002',
    meta: 'tuty@hybrid.com',
  },
]

export default class Contact extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Grid>

      <Grid.Row only='mobile'>
        <Menu/>
      </Grid.Row>

      <Grid.Row style={{marginTop:"10%"}} only='mobile'>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"1px",fontFamily:"Open Sans"}} >
        <h1 style={{letterSpacing:"2px"}}>Contact us</h1>
        <Card.Group items={locationDetails} />
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>

    </Grid>
    );
  }
}
