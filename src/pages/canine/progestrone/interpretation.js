import React, {useRef, useState, useEffect} from 'react';
import { Container, Table, Jumbotron, Navbar, Card } from 'react-bootstrap';

import pic1 from '../../../assets/img/canine/progesterone-pic-1.png'
import pic2 from '../../../assets/img/canine/progesterone-pic-2.png'
import pic3 from '../../../assets/img/canine/progesterone-pic-3.png'
import pic4 from '../../../assets/img/canine/progesterone-pic-4.png'


export default function interpretation() {

    

  return (
<div>
    <h3>Target Canine Kit Interpretation</h3>
    <Table striped bordered hover style={{backgroundColor: 'white'}}>
    <thead>
        <tr>
        <th></th>
        <th>Color</th>
        <th>Progesterone ng/ml</th>
        <th>Recommendation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><img src={pic1} /></td>
        <td style={{backgroundColor: '#96D9DF'}} >Bright Blue C1</td>
        <td>0-1</td>
        <td>Retest every two days until a C1 light blue (C2) is obtained.</td>
        </tr>
        <tr>
        <td><img src={pic2} /></td>
        <td style={{backgroundColor: '#C4E2E2'}}>Light Blue C2</td>
        <td>1 - 2.5</td>
        <td>
           <p> Retest every day until a C2 faint blue (C3) is obtained.</p>
           <p>Plan to inseminate in 3-6 days.</p>
        </td>
        </tr>
        <tr>
        <td><img src={pic3} /></td>
        <td style={{backgroundColor: '#F9FBFA'}} >Faint Blue C3</td>
        <td>2.5 - 8</td>
        <td>
            <p>Repeat test daily.</p>
            <p>Breed or inseminate in approximately 1-3 days.</p>
        </td>
        </tr>
        <tr>
        <td><img src={pic4} /></td>
        <td style={{backgroundColor: '#FEFEFE'}}>White</td>
        <td>&gt; 8</td>
        <td>
            <p>Mate or inseminate immediately.</p>
        </td>
        </tr>
    </tbody>
    </Table>
  </div>
  );
}


