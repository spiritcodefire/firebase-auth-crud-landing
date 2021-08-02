import React from 'react'

const CardTrio = (props) => {
    return (
    <div className="card border border-success mx-auto shadow" style={{width: "90%", height: "500px"}}>
        <img src={props.svg} height="400px" className="card-img-top" alt={props.alt}/>
        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
    </div>
    )
}

export default CardTrio
