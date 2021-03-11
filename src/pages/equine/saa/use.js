import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'
import {Spring} from 'react-spring/renderprops'

import './use.css'


const Use = ({data, }) => {











    return <div style={{display: 'flex', justifyContent: 'left', paddingLeft: '30px'}}  >

        <div>
            <img src={data.img} style={{width: '100px', height: '70px'}}  />
        </div>
        <div>
            <h5 style={{textAlign: 'left', paddingLeft: '30px', fontWeight: 600}}>{data.title}</h5>
            <p>{data.body}</p>
        </div>
            
            



    </div>
}

export default Use;