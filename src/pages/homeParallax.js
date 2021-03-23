import React from 'react';
import Parallax from 'react-springy-parallax';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

const PineTree = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-hii7479o%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F9623%2F25766%2Fpine_tree__86681.1524091413.png%3Fc%3D2&f=1&nofb=1'
const backgoundClouds = 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const DogAndWomen = 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/targetvet-parallax/dog%26walker.png'
const Dog = 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/targetvet-parallax/dog.png'
const Barn = 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/targetvet-parallax/barn.png'
const Horse = 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/targetvet-parallax/horse.png'



export default class extends React.Component {


    render() {


        return (
            <Parallax ref={(ref) => (this.parallax = ref)} pages={3} style={{backgroundColor: '#87BCDE'}} >


                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'rgb(255, 197, 197)' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'rgb(255, 255, 180)' }} />


                <Parallax.Layer offset={1.6} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <div style={{display: 'flex'}}>
                    <img src={Dog} style={{ width: '15%', marginLeft: '68%' }} />
                    <img src={Dog} style={{ width: '5%', height: '5%', marginLeft: '-40px', marginTop: '60px' }} />
                    <img src={Dog} style={{ width: '5%', height: '5%', marginLeft: '-20px', marginTop: '60px' }} />
                    <img src={Dog} style={{ width: '5%', height: '5%', marginLeft: '-20px',  marginTop: '60px' }} />
                </div>
                </Parallax.Layer>

                <Parallax.Layer offset={0.4} speed={0.8} style={{ opacity: 0.8}}>
                <img
                    src={PineTree}
                    style={{ display: 'block', width: '15%', marginLeft: '70%'  }}
                />
                </Parallax.Layer>
                <Parallax.Layer offset={0.4} speed={0.8} style={{ opacity: 0.5 }}>
                <img
                    src={PineTree}
                    style={{ display: 'block', width: '15%', marginLeft: '80%' }}
                />
                </Parallax.Layer>
                <Parallax.Layer offset={0.4} speed={-1.05} style={{ opacity: 0.8, zIndex: 1 }}>
                <img
                    src={DogAndWomen}
                    style={{ display: 'block', width: '25%', marginLeft: '10%',  }}
                />
                </Parallax.Layer>

                <Parallax.Layer offset={0} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '20%' }} />
                </Parallax.Layer>
                <Parallax.Layer offset={0.1} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </Parallax.Layer>



                <Parallax.Layer offset={2.1} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', marginLeft: '40%' }}>
                <img src={Barn} style={{ width: '50%' }} />
                </Parallax.Layer>




                {/* Page 1 */}

                <Parallax.Layer
                offset={0}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(1)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                
                <div style={{textAlign: 'center'}} >
                    <h1>Caring for your Pets</h1>
                    <h2>with Easy Tests</h2>
                    
                </div>
                </Parallax.Layer>
                {/* ground */}
                <Parallax.Layer offset={0.9} speed={0.4} >
                    <div style={{width: '100%', height: '90px', backgroundColor: '#74e560'}} ></div>
                </Parallax.Layer>





                {/* Page 2 */}
                <Parallax.Layer
                offset={1}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(2)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <div>
                        <h1>Canine Tests</h1>
                        <h3>Advanced. Accurate. Simple.</h3>
                    </div>
                </div>
                </Parallax.Layer>

                <Parallax.Layer offset={1.7} speed={0.4} style={{display: 'flex', marginLeft: '30%'}}  >
                    <div style={{display: 'flex'}}  >
                                  {/* cup test */}
                        <div style={{width: '70px', height: '35px', backgroundColor: 'white', marginLeft: '30px', marginTop: '20px', zIndex: '-2'}} ></div>
                        <div style={{width: '15px', height: '8px', backgroundColor: '#b1d9ef', marginLeft: '-38px', marginTop: '14px', borderRadius: '100px / 50px', zIndex: '2'}} ></div>
                        <div style={{width: '35px', height: '18px', backgroundColor: '#e8eae8', marginLeft: '-28px', marginTop: '8px', borderRadius: '100px / 50px', zIndex: '1'}} ></div>
                        <div style={{width: '70px', height: '35px', backgroundColor: 'white', marginLeft: '-54px', borderRadius: '100px / 50px', border: '1px #ededed solid', zIndex: '-1'}} ></div>
                        <div style={{width: '70px', height: '35px', backgroundColor: 'white', marginLeft: '-70px', marginTop: '35px', borderRadius: '100px / 50px'}} ></div>
                    </div>
                    <div  style={{marginTop: '20px', marginLeft: '10px'}} >
                        <h6  >Target Progesterone (Visual)</h6>
                    </div>
                </Parallax.Layer>
                <Parallax.Layer offset={1.6} speed={0.4} style={{display: 'flex', marginLeft: '30%'}} >
                    <div style={{display: 'flex'}} >
                        {/* lateral flow */}
                        <div style={{width: '150px', height: '40px',marginTop: '10px', marginLeft: '30px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center'}} >
                            <div style={{width: '35px', height: '12px', backgroundColor: '#e8eae8', marginTop: '15px'}} >
                                <div style={{width: '4px', height: '12px', backgroundColor: 'red', marginLeft: '10px'}} ></div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '10px'}} >
                        <h6>Target Progesterone (Quant.)</h6>
                    </div>
                </Parallax.Layer>
                <Parallax.Layer offset={1.8} speed={0.4} style={{display: 'flex', marginLeft: '30%'}} >
                    <div style={{display: 'flex'}} >
                        {/* lateral flow */}
                        <div style={{width: '150px', height: '40px',marginTop: '10px', marginLeft: '30px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center'}} >
                            <div style={{width: '35px', height: '12px', backgroundColor: '#e8eae8', marginTop: '15px'}} >
                                <div style={{width: '4px', height: '12px', backgroundColor: 'red', marginLeft: '10px'}} ></div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '10px'}} >
                        <h6>Pregnancy Test</h6>
                    </div>
                </Parallax.Layer>
















                {/* Page 3 */}
                <Parallax.Layer offset={2.5} speed={0.6} style={{ opacity: 0.9, marginLeft: '30%', display: 'flex' }}>
                    {/* lateral flow */}
                    <div style={{width: '150px', height: '40px',marginTop: '10px', marginLeft: '30px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', border: '1px solid black'}} >
                        <div style={{width: '35px', height: '12px', backgroundColor: '#e8eae8', marginTop: '15px'}} >
                            <div style={{width: '4px', height: '12px', backgroundColor: 'red', marginLeft: '10px'}} ></div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '10px'}} ><h6>Equine Progesterone</h6></div>
                </Parallax.Layer>
                <Parallax.Layer offset={2.4} speed={0.6} style={{ opacity: 0.9, marginLeft: '30%', display: 'flex' }}>
                    {/* lateral flow */}
                    <div style={{width: '150px', height: '40px',marginTop: '10px', marginLeft: '30px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', border: '1px solid black'}} >
                        <div style={{width: '35px', height: '12px', backgroundColor: '#e8eae8', marginTop: '15px'}} >
                            <div style={{width: '4px', height: '12px', backgroundColor: 'red', marginLeft: '10px'}} ></div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '20px'}} ><h6>IgG</h6></div>
                </Parallax.Layer>
                <Parallax.Layer offset={2.6} speed={0.6} style={{ opacity: 0.9, marginLeft: '30%',  display: 'flex' }}>
                    {/* lateral flow */}
                    <div style={{width: '150px', height: '40px',marginTop: '10px', marginLeft: '30px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', border: '1px solid black'}} >
                        <div style={{width: '35px', height: '12px', backgroundColor: '#e8eae8', marginTop: '15px'}} >
                            <div style={{width: '4px', height: '12px', backgroundColor: 'red', marginLeft: '10px'}} ></div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '20px'}} ><h6>SAA</h6></div>
                </Parallax.Layer>

                <Parallax.Layer
                offset={1.9}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10%', marginTop: '%' }}
                onClick={() => this.parallax.scrollTo(0)}>
                <div>
                <h1>Equine Tests</h1>
                <h5>Advanced. Accurate. Simple.</h5>
                </div>
                </Parallax.Layer>

                <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 1, }}>
                    <img src={Horse} style={{ width: '40%', marginLeft: '40%' }} />
                </Parallax.Layer>
                {/* ground */}
                <Parallax.Layer offset={2.9} speed={0.4} style={{ opacity: 1, marginTop: '20px' }}>
                    <div style={{width: '100%', height: '90px', backgroundColor: '#74e560'}} ></div>
                </Parallax.Layer>


            </Parallax>
        );
    }
}
