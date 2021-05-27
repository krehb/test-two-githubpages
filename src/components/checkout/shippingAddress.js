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
              console.log(currentUserData)
              if(currentUserData.address === ''){
                setEdit(true)
              } else {
                setRenderedAddress(currentUserData.address)
                setStreet(currentUserData.street)
                setCity(currentUserData.city)
                setState(currentUserData.state)
                setZip(currentUserData.zip)
                setCountry(currentUserData.country)
              }
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
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country
    })

    setEdit(false)

  }


  let renderAddressForm = null

  if (edit) {
    renderAddressForm = (
      <div  >

          <div>
            <div className='shipping-edit-group'  >
              <div className='shipping-edit-title' >
              Street:
              </div>
              <div>
              <input className='shipping-edit-input' value={street}  onChange={(e) => setStreet(e.target.value)} placeholder='123 Main St.' />
              </div>
            </div>

            <div className='shipping-edit-group'  >
              <div className='shipping-edit-title' >
              City:
              </div>
              <div>
              <input className='shipping-edit-input'  value={city}  onChange={(e) => setCity(e.target.value)} placeholder='Springfield'  />
              </div>
            </div>

            <div className='shipping-edit-group'  >
              <div className='shipping-edit-title' >
              State:
              </div>
              <div>
              <input className='shipping-edit-input' value={state}   onChange={(e) => setState(e.target.value)} placeholder='New Jersey'  />
              </div>
            </div>

            <div className='shipping-edit-group'  >
              <div className='shipping-edit-title' >
              Zip:
              </div>
              <div>
              <input className='shipping-edit-input'  value={zip}  onChange={(e) => setZip(e.target.value)} placeholder='61215'  />
              </div>
            </div>

            <div className='shipping-edit-group'  >
              <div className='shipping-edit-title' >
              Country:
              </div>
              <div>
              <input className='shipping-edit-input' value={country}  onChange={(e) => setCountry(e.target.value)} placeholder='United States'  />
              </div>
            </div>
          </div>


          <button className='change-address-shipping' onClick={() => setEdit(false)}  >Back</button>
          <button className='change-address-shipping' onClick={saveEditingHandler}  >Save</button>
      </div>
    )
  } else {
    renderAddressForm = (
      <div>
        {renderedAddress}
        <Button onClick={() => setEdit(true)} style={{marginLeft: '10px', padding: '5px', backgroundColor: '#317C97', fontSize: '10px'}} >edit</Button>
      </div>
    )
  }



  return (
    <div className='shipping' >
        <h3>Shipping</h3>
        {renderAddressForm}
    </div>
  );
}

export default Shipping;