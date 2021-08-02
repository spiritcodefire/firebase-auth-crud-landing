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

                    <div className="col-sm-12 col-md-4 my-2 "><CardTrio svg={ImgTechnicien} alt={'maison sécurisé'} text={"Nos auditeurs sont qualifié et professionnel"}/></div>
                    <div className="col-sm-12 col-md-4 my-2"><CardTrio svg={Imgmaison} alt={'maison sécurisé'} text={"Pour une maison écologique et économique"}/></div>
                    <div className="col-sm-12 col-md-4 my-2"><CardTrio svg={ImgSecure} alt={'maison sécurisé'} text={'98% de client se disent "trés content" de notre prestation'} /></div>

                </div>
            </div>
        </div>
    )
}

export default SectionTrio
