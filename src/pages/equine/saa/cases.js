import React, { useState, useEffect } from 'react';
import { Accordion, Card, Table} from 'react-bootstrap';
import Logo from '../../../assets/img/equine/logo-small.png'
import test from '../../../assets/img/equine/case-test.png'
import cube from '../../../assets/img/equine/cube-on.png'

const Cases = ({data, }) => {




    const headerStyle = {
        fontWeight: 600,
        color: '#474747'
    }






    return <div style={{textAlign: 'left', marginBottom: '30px'}} >
                <h3 style={{paddingLeft:'20px'}} >Case Studies</h3>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle style={headerStyle} as={Card.Header} eventKey="0">
                    Case Study - Monitoring Antibiotic Treatment in Founder Hoof Abscess
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>A horse appeared to be sick in late summer. Upon inspecting the horse carefully, the Farm manager noticed an abscess in one of the horse’s hoofs. The abscess was drained, and an antibiotic treatment was administered immediately.</p>
                        <p>Blood tests, <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> test, and fibrinogen were done.</p>
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Day</th>
                            <th><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span><img style={{width: '27px', height: '20px', marginLeft: '5px'}} src={Logo} /></th>
                            <th><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >Visual EquiCheck™ SAA</span><img style={{width: '27px', height: '20px', marginLeft: '5px'}} src={Logo} /></th>
                            <th>CBC Panel Incl. WBC</th>
                            <th>Antibiotic</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 1</td>
                            <td>72.8 ug/ml</td>
                            <td>2 to 3 faint lines</td>
                            <td>Normal</td>
                            <td>Antibiotic A</td>
                            </tr>
                            <tr>
                            <td>Day 2</td>
                            <td>109.3 ug/ml</td>
                            <td>2 faint lines</td>
                            <td>Normal</td>
                            <td>Antibiotic A</td>
                            </tr>
                            <tr>
                            <td>Day 3</td>
                            <td >----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>Antibiotic B</td>
                            </tr>
                            <tr>
                            <td>Day 4</td>
                            <td >20.4 ug/ml</td>
                            <td>4 lines</td>
                            <td></td>
                            <td>Antibiotic B</td>
                            </tr>
                        </tbody>
                        </Table>
                        <div style={{display: 'flex', flexWrap: 'wrap',}} >
                            <div>
                                <p><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™</span> numeric levels were determined by Cube Reader. </p>
                            </div>
                            <div>
                                <img src={cube} width='100px' />
                            </div>
                        </div>
                        <h5 style={{fontWeight: 600}} >Conclusion:</h5>
                        <p>On Day 2, after Antibiotic A treatment, <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> levels were still rising. It was concluded that Antibiotic A was not effective.</p>
                        <p>When switching to Antibiotic B on day 3, <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> levels dropped to normal 20.4 ug/ml (4 lines) indicating that Antibiotic B was effective in treating this Founder Hoof abscess condition.</p>
                        <p style={{fontWeight: 600}} ><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> was helpful in Monitoring Efficacy of Antibiotic Treatment</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle style={headerStyle} as={Card.Header} eventKey="1">
                    Case Study - Immunodeficient Foal with Infection leading to Pneumonia
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>A newborn foal born early in the season was tested with <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >Immuno-Chek G</span> and found to be immunodeficient (&lt; 400 mg/dl).</p>
                        <p>Colostrum was given but the foal was still lethargic with a nasal drip. The <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> test showed one line indicating serious infection. Therefore antibiotic was started immediately.</p>
                        <p>In addition to <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >Immuno-Chek G</span> and <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> diagnostic tests, complete blood panel analysis was run.</p>
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Day</th>
                            <th><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >ImmunoChek IgG</span><img style={{width: '27px', height: '20px', marginLeft: '5px'}} src={Logo} /></th>
                            <th><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span><img style={{width: '27px', height: '20px', marginLeft: '5px'}} src={Logo} /></th>
                            <th>CBC/WBC</th>
                            <th>Fibrinogen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 1</td>
                            <td>&lt;400</td>
                            <td>1 line</td>
                            <td>Normal</td>
                            <td>176</td>
                            </tr>
                            <tr>
                            <td>Day 2</td>
                            <td>~800</td>
                            <td>1 line</td>
                            <td>Normal</td>
                            <td>231</td>
                            </tr>
                            <tr>
                            <td>Day 3</td>
                            <td >&gt;800</td>
                            <td>1 line</td>
                            <td>Normal</td>
                            <td>289</td>
                            </tr>
                            <tr>
                            <td>Day 4</td>
                            <td >----</td>
                            <td>1 line</td>
                            <td>Abnormal</td>
                            <td>367</td>
                            </tr>
                            <tr>
                            <td>Day 24</td>
                            <td >----</td>
                            <td>4 line</td>
                            <td>Normal</td>
                            <td>138</td>
                            </tr>
                        </tbody>
                        </Table>
                        <h5 style={{fontWeight: 600}} >Conclusion:</h5>
                        <p>Only 1 drop of blood can be used to get important results on the health of a newborn foal using the <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >Immuno-Chek G</span> and <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> tests.</p>
                        <p><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> test is very important to do on every Immuno-deficient foal. <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> confirmed serious infection - at least 3 days prior to abnormal signs in the Blood panel (including WBC (white blood cell count)).</p>
                        <p>Antibiotic was administered immediately and the Foal's blood work was monitored. Inspite of this treatment the infection turned into pneumonia and multiple antibiotic treatments were used.</p>
                        <p><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> was used to monitor effectiveness of antibiotic treatments.</p>
                        <p>The foal finally regained health after this serious illness and extended treatments.</p>
                        <p>The <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> tests were very helpful to confirm the initial infection and to monitor the illness during the antibiotic treatments. Early diagnosis and intervention prevented more serious consequences and saved the life of the foal.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle style={headerStyle} as={Card.Header} eventKey="2">
                    Case Study- Tick Fever - Early diagnosis with EquiCheck™ SAA
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>A pregnant mare appeared to be not feeling well on a summer day in early June. Swelling in the legs & lethargy were noticed, and there was no fever. Because there was no nasal drip, it did not seem to be pneumonia. It was summer with the normal presence of insects in the fields.</p>
                    <p>A Blood Analysis and <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> tests were run.</p>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Day</th>
                            <th><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span><img style={{width: '27px', height: '20px', marginLeft: '5px'}} src={Logo} /></th>
                            <th>CBC Panel Incl. WBC</th>
                            <th>Fibrinogen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 1</td>
                            <td>1 line</td>
                            <td>Normal</td>
                            <td>Elevated at 846</td>
                            </tr>
                            <tr>
                            <td>Day 3</td>
                            <td ></td>
                            <td>WBC Very Low</td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                        </Table>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <div>
                                <p>The <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> test confirmed infection and ruled out heat exhaustion and dehydration.</p>
                                <p>The initial WBC count / panel was normal, and only fibrinogen (846) was elevated.</p>
                            </div>
                            <div>
                                <img src={test} width='200px' />
                            </div>
                        </div>
                        <p>Treatment with an Antibiotic IV was started immediately on day 1. Then switched to an oral antibiotic beginning day 3 to 6. One week later the pregnant mare and foal were healthy again because of the early intervention as a result of the early diagnosis with EquiChek SAA.</p>
                        <h5 style={{fontWeight: 600}} >Conclusion:</h5>
                        <p><span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> recognized infection 3 days before the WBC panel. The immediate early treatment with antibiotics prevented serious emergency treatment.</p>
                        <p>If diagnosis waited until White Blood cell count (WBC) indicator was low, the mare would have become very sick, gotten fever, and possibly may have lost the unborn foal.</p>
                        <p>Other horses in the same field were tested by <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> to determine presence of any Tick Fever infection. Horses with Tick Fever were identified and isolated from healthy horses. Horses with Tick Fever were treated with antibiotic and monitored with <span style={{fontSize: '16px', color: '#317C97', fontWeight: 600}} >EquiCheck™ SAA</span> to ensure the treatment was working.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
    </div>
}

export default Cases;