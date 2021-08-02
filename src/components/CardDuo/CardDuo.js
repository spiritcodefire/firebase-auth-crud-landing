import React from 'react'

const CardDuo = (props) => {
    console.log(props);
    return (
        <div className="card shadow rounded-lg border border-success" >

            <img src={props.img} className="card-img-top p-5" alt={props.alt} />


            <div className="card-body mb-4">
                <p className="card-text h6 text-center">{props.titre}</p>
                <p className="card-text">{props.soustitre}</p>
                <p className="card-text">{props.paragraphe1}</p>
                <p className="card-text">{props.paragraphe2}</p>
                <button className='btn btn-primary border border-success'>En savoir plus</button>
            </div>

        </div>
    )
}

export default CardDuo
