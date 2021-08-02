import React from 'react'
import './SectionFormPhoto.css'
import Create from '../../components/Create/Create'


const SectionFormPhoto = () => {
    return (
        <div className="container" style={{minHeight: "60vh"}} id="DemanderUneAudite">
            <div className="row" style={{minHeight: "50vh"}}  >

                <div className="col-sm-12 col-md-6  rounded-lg img-fluid imgBackground 	d-none d-sm-block" style={{ borderRadius: "96% 4% 96% 4% /  5% 95% 3% 97% " , height: "600px"}} />

                <div className="col-sm-12 col-md-6">
                    <Create taille="600px" />
                </div>
            </div>
        </div>
    )
}

export default SectionFormPhoto
