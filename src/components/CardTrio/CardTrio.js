import React from 'react'

const CardTrio = (props) => {
    return (
    <div className="card border border-success mx-auto shadow" style={{width: "90%", height: "500px"}}>
        <img src={props.svg} height="400px" className="card-img-top" alt={props.alt}/>
        <div className="card-body">
          <h3 className="card-text h6">{props.text}</h3>
        </div>
    </div>
    )
}

export default CardTrio
