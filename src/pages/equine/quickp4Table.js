import React, {useState} from 'react';
import { Container, Table, Jumbotron } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faFileDownload } from '@fortawesome/free-solid-svg-icons'

import pdf from '../../assets/img/equine/Equine-QuickP4-vs-Lab-data.pdf';

import Data1 from './data1';
import Data2 from './data2';

export default function QuickP4EquineTable(products) {

    const [TableButton, setTableFull] = useState(true);

    let renderTableData = null
    let renderArrow = null

    if(TableButton){
        renderTableData = (
            <Data1/>
        )
        renderArrow = faAngleDown
    } else {
        renderTableData = (
            <Data2/>
        )
        renderArrow = faAngleUp
    }




  return (
    <div>
            <h3>Table 1. Quick P4 vs. Lab Results for Pregnant Mares</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Lateral Flow Quick P4</th>
                        <th>RIA Cornell</th>
                        <th>RIA Bet Lab</th>
                        <th>Horse ID</th>
                        <th>Days Pregnant</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                {renderTableData}
            </Table>
            <div>
                <FontAwesomeIcon onClick={() => setTableFull(!TableButton)} size="3x" icon={renderArrow}/>
            </div>
            <br></br>
            
            <h3>Table 1. Quick P4 vs. Lab Results for Pregnant Mares</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Lateral Flow Quick P4</th>
                        <th>Lab Results</th>
                        <th>Horse ID</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1.1</td>
                    <td>0.6</td>
                    <td>866</td>
                    <td>Not Pregnant</td>
                    </tr>
                    <tr>
                    <td>5.6</td>
                    <td>11.3</td>
                    <td>Y46</td>
                    <td>Not Pregnant</td>
                    </tr>
                    <tr>
                    <td>2.5</td>
                    <td>0.2</td>
                    <td>Vodlka</td>
                    <td>Not Pregnant</td>
                    </tr>
                    <tr>
                    <td>0.2</td>
                    <td>0.5</td>
                    <td>32</td>
                    <td>Foaled 3 days ago</td>
                    </tr>
                </tbody>
            </Table>


            <br></br>
            <br></br>

            <div style={{textAlign: 'left', paddingLeft: '50px' }}>
                <ul>
                    <li>Lateral Flow test has 2 specific Monoclonal antibodies to bind P4 in a sandwich assay.</li>
                    <li>RIA Lab tests use a single polyclonal antibody to bind P4 - in competitive assay - this results in less specific binding</li>
                    <li>RIA lab results may give higher progesterone values which include both progesterone and progesterone metabolites.</li>
                </ul>
            </div>

            <div style={{textAlign: 'right', paddingRight: '10%',paddingBottom: '20px'}} >
                <a  href={pdf} download='data' style={{color: 'red'}} >
                    <FontAwesomeIcon size="2x" icon={faFileDownload} />
                </a>
            </div>


    </div>

  );
}

