import React from 'react'
import CardTrio from '../../components/CardTrio/CardTrio'
import ImgSecure from '../../assets/content.svg'
import Imgmaison from '../../assets/home.svg'
import ImgTechnicien from '../../assets/technicien.svg'

const SectionTrio = () => {
    return (
        <div className="bg-light my-5" id="QuiSommeNous" >
            <div className="container">
                <div className="row justify-content-center" style={{minHeight: "60vh"}}>

                    <div className="col-sm-12 col-md-4 my-2 "><CardTrio svg={ImgTechnicien} alt={'artisans faisant une audite energetique'} text={<><h6> Un audit énergétique de qualité.</h6> <p> Des artisans de votre région certifiés RGE se déplacent pour auditer votre besoin en énergie afin que nous puissions vous conseiller les meilleurs <strong> travaux de rénovation énergétique</strong></p></>}/></div>
                    <div className="col-sm-12 col-md-4 my-2"><CardTrio svg={Imgmaison} alt={'maison isolation interieur'} text={<> <h6>Un éventail de travaux via le BAR TH 164</h6> <p> <strong>Isolation extérieure</strong>, isolation intérieure, pompe à chaleur, <strong> Ballon thermodynamique </strong>, <strong> ballon solaire </strong>, chaudière à condensation, panneaux solaires photovoltaïques, VMC, douches seniors</p></>} /></div>
                    <div className="col-sm-12 col-md-4 my-2"><CardTrio svg={ImgSecure} alt={"prime d'état pour l'économie d'énergie"} text={<><h6>Des travaux financés par MaPrimRenov.</h6>  <p>Bénéficiez de vos primes d’État grâce à <strong> MaPrimRenov’ </strong> . Nous avons pour mission de faire valoir vos droits et ainsi vous permettre d’améliorer votre confort intérieur tout en effectuant des <strong>économies d’énergie </strong> </p></>} /></div>

                </div>
            </div>
        </div>
    )
}

export default SectionTrio
