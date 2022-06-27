import React from 'react';


export default function Place(props) {
    // create an element for each letter for wave effect, offset animationDelay
    let sliced = props.name.split('').map((letter, i) => <span key={i} style={{animationDelay: `${i * 0.1}s`}}>{letter}</span>);

    return (
        <div className="place">
            <div className="place-image">
                <img alt="" onClick={()=>{window.open(props.maplink, '_blank')}}src={props.photo}></img>
            </div>
            <h1 id="pb">{
                sliced
            }</h1>
            
            <button onClick={props.reRender}>Randomize</button>
        </div>
        
    )
}