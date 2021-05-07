import React, {useState} from 'react'
import axios from 'axios'


export default function EmailTest() {

    const [sent, setSent] = useState(false)
    const [text, setText] = useState('')


    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send_mail", {
                text
            })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '200px'}} >
            {!sent ? (
            <form onSubmit={handleSend}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit' >Send Email</button>
            </form>
            ): (
                <h1>Email Sent</h1>
            )}
        </div>
    )
}
