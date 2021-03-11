import React, { useState, useEffect } from 'react';


import Use from './use'

const Uses = () => {

    const [showcase, setShowcase] = useState(' wlkejss')


    let dataArray = [
        {
            title: 'Health Screening',
            body: 'Screenings are medical tests that doctors use to check for diseases and health conditions before there are any signs or symptoms. Screenings help find problems early on, when they may be easier to treat. Getting recommended screening tests is one of the most important things you can do for your health.',
            img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/diagram-1.png'
        },
        {
            title: 'Transport',
            body: 'Monitoring health status before performance or after transport. Nearly every horse owner has trailered a horse from point A to point B. Many horse owners do it on a regular basis, going to competitions, rodeos, or rides every other weekend or so. We make sure the vents in the trailer are adjusted properly to account for the outside weather. We protect our horses’ legs, hooves, heads (and sometimes other parts of their bodies) so they don’t get banged up. We drive carefully around corners, and avoid potholes and quick stops and starts. We give them a bit of hay to keep them occupied and happy, throw some straw under them to help with clean-up, and check on them when traveling several hours.',
            img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/diagram-2.png'
        },
        {
            title: 'Training',
            body: 'Training horse either for riding, racing or transportation. There can be some wear and tare on the horse while training and before racing or riding events it should be important to check for the health of the horse.',
            img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/diagram-3.png'
        },
        {
            title: 'New Foals',
            body: 'Early assessment of foal health. The new foal could take some energy or the mare or when it was giving birth it could have gotten some infection.',
            img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/diagram-4.png'
        },
        {
            title: 'Monitor Antibiotic Treatment RX',
            body: 'I am not sure what this means, but this could be a spot to add more text',
            img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/diagram-5.png'
        }
    ]



    return <div>
        <h1>Uses</h1>
        <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'column'}} >
        {
            dataArray.map(data => {
                return <Use data={data} setShowcase={setShowcase} />
            })
        }
        </div>
    </div>
}

export default Uses;