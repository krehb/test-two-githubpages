import React, {useState} from 'react'
import { Jumbotron, Button, Container, Spinner, Alert } from 'react-bootstrap';
import app from '../../config/base';

export default function ForgetPassword() {

    const [userEmail, setEmail] = useState('')
    const [sending, setSending] = useState(false)
    const [renderAlert, setRenderAlert] = useState(false)

    const handlePasswordReset = () => {
        console.log('sending.... to ' + userEmail )
        setSending(true)

        app.auth().sendPasswordResetEmail(userEmail).then(function(){
            console.log('email was sent')
            setRenderAlert(true)
            setSending(false)
            
            setTimeout(function(){ setRenderAlert(false); setEmail('') }, 5000);
        })
        .catch(function(){
            console.log('error')
        })

    }

    let renderButton = null
    if(!sending){
        renderButton = <Button onClick={handlePasswordReset}  >send recovery email</Button>
    } else {
        renderButton = <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    }


    return (
        <div>
            <Container>
            <br></br>
            {renderAlert &&
                <Alert  variant="success" >
                    An email was sent to: {userEmail}
                </Alert>
            }
            <Jumbotron style={{textAlign: 'center'}} >
                <h1>Forget Password</h1>
                <p>
                    An email will be sent to reset your password. Enter your email below.
                </p>
                <input value={userEmail} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <p style={{marginTop: '10px'}} >
                   {renderButton}
                </p>
            </Jumbotron>
            </Container>
        </div>
    )
}
