import React, {useRef, useEffect} from 'react'

export default function Paypal() {
    
    const paypal = useRef()

    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: "Cool and accurate kit",
                            amount: {
                                currency_code: 'USD',
                                value: 200.00 
                            }  
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    
    return (
        <div>
            <div ref={paypal} ></div>
        </div>
    )
}
