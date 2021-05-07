import React, { useState, useEffect } from 'react';
import '../store.css'

export default function InfoAccordion({data }) {

    const [info, setInfo] = useState([]);
    const [renderInstructions, setRenderInstructions] = useState(false)

    useEffect(() => {
        // Update the document title using the browser API
        setInfo(data.description)
    },[]);

    


    const selectionCollapseHandler = (sectionData) => {
        setInfo(sectionData)
        setRenderInstructions(false)
    }



    const instructionsHandler = (data) => {
        let renderInstructionLink = (
            <a href={data} target='blank' > Intructions.pdf </a>
        )
        setInfo([' '])
        setRenderInstructions(true)
    }

    let renderInstructionsSpot = null
    let renderInstructionsClass = 'collapse-head'
    if(renderInstructions){
        renderInstructionsSpot = (
            <div style={{paddingBottom: '40px', fontSize: '20px', paddingLeft: '20px'}}>
            <a style={{ color: 'grey'}} href={data.instructions[0]} target='blank' > Intructions.pdf </a>
            </div>
        )
        renderInstructionsClass = 'collapse-head selected'
    } else {
        renderInstructionsSpot = null
        renderInstructionsClass = 'collapse-head'
    }

    function isSelected(sectionData) {
        if (sectionData === info) {
            return 'collapse-head selected'
        } else {
            return 'collapse-head'
        }
    }


  return (
    <div className='accordion' >
        <div className='accordion-head' >
            <span onClick={() => selectionCollapseHandler(data.description)} className={isSelected(data.description)} >Description</span>
            <span onClick={() => selectionCollapseHandler(data.info)} className={isSelected(data.info)} >Info</span>
            <span onClick={() => selectionCollapseHandler(data.highlights)} className={isSelected(data.highlights)} >Highlights</span>
            <span onClick={() => instructionsHandler(data.instructions)} className={renderInstructionsClass} >Instruction</span>
        </div>
        <div className='collapse-body' style={{width: 700}} >
            {info.map(text => <p>{text}</p>)}
            {renderInstructionsSpot}
        </div>
    </div>
  );
}

