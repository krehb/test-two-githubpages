import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

export default function Note({note, setNote}) {


    const [save, setSavedNote] = useState(true)



    return (
        <div className='shipping' style={{display: 'flex', justifyContent: 'space-around'}} >
            <h3>Note:</h3>
            {save
                ? <input value={note} onChange={(e) => setNote(e.target.value)} />
                : <div style={{maxWidth: '200px'}} >{note}</div>
            }
            <Button onClick={() => setSavedNote(!save)} style={{marginLeft: '10px', padding: '5px', backgroundColor: '#317C97', fontSize: '10px', height: '30px', marginTop: '5px'}} >{save ? 'save' : 'edit'}</Button>
        </div>
    )
}
