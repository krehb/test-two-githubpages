import React, {useState, useEffect}  from 'react';
import firebase from 'firebase';
import app from '../../config/base';
import { Button } from 'react-bootstrap';


const Shipping = () => {

  const db = firebase.firestore();
    
  const [userData, setUserData] = useState('');
  const [userId, setUserId] = useState('');
  const [edit, setEdit] = useState(false);
  const [renderedAddress, setRenderedAddress] = useState('')

  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')



  useEffect(() => {
      app.auth().onAuthStateChanged((user) => {
          setUserId(user.uid)
          db.collection('users').doc(user.uid).get().then( doc => {
              let currentUserData = doc.data()
              setUserData(currentUserData)
              setRenderedAddress(currentUserData.address)
          })
      })
  }, [])


  const saveEditingHandler = () => {
    console.log('clicked, saving...')

    let savedText = `${street}, ${city}, ${state}, ${zip}, ${country}`

    setRenderedAddress(savedText)

    db.collection('users').doc(userId).set({
        orderCount: userData.orderCount,
        name: userData.name,
        address: savedText,
    })

    setEdit(false)

  }


  let renderAddressForm = null

  if (edit) {
    renderAddressForm = (
      <div>
          <div className='edit-address' >
              <div className='edit-label' >
                  <div className='label' >Street</div>
                  <div className='label'>City</div>
                  <div className='label'>State/Province</div>
                  <div className='label'>Zip</div>
                  <div className='label'>Country</div>
              </div>
              <div className='edit-input'>
                  <input className='input' onChange={(e) => setStreet(e.target.value)} placeholder='123 Main St.' />
                  <input className='input' onChange={(e) => setCity(e.target.value)} placeholder='Springfield' />
                  <input className='input' onChange={(e) => setState(e.target.value)} placeholder='New Jersey' />
                  <input className='input' onChange={(e) => setZip(e.target.value)} placeholder='61215' />
                  <input className='input' onChange={(e) => setCountry(e.target.value)} placeholder='United States' />
              </div>
          </div>
          <span className='change-address' onClick={() => setEdit(false)}  >back</span>
          <span className='change-address' onClick={saveEditingHandler}  >Save</span>
      </div>
    )
  } else {
    renderAddressForm = (
      <div>
        {renderedAddress}
        <Button onClick={() => setEdit(true)} >edit</Button>
      </div>
    )
  }



  return (
    <div>
        <h3>Shipping</h3>
        {renderAddressForm}
    </div>
  );
}

export default Shipping;