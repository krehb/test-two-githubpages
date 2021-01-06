import React, { useState, useEffect } from 'react';
import '../store.css'

export default function InfoAccordion({data }) {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        setInfo(data.description)
    },[]);



    const selectionCollapseHandler = (sectionData) => {
        setInfo(sectionData)
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
            <span onClick={() => selectionCollapseHandler(data.instructions)} className={isSelected(data.instructions)} >Instruction</span>
        </div>
        <div className='collapse-body'>
            {info.map(text => <p>{text}</p>)}
        </div>
    </div>
  );
}

