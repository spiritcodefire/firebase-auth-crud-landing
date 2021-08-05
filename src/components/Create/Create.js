import React from 'react'
import firebase from '../../utils/firebaseConfig'


const Create = (props) => {

    // reservoir de remplissage pour création de l'objet Quote qui sera envoyé dans la BD
    const [nom, setNom] = React.useState('') ;
    const [prenom, setPrenom] = React.useState('') ;
    const [tel, setTel] = React.useState('') ;
    const [mail, setMail] = React.useState('') ;
    const [codePostal, setCodePostal] = React.useState('') ;

    // Permet d'afficher l'endroit ou le formulaire n'a pas été complété
    const [nomVide, setNomVide] = React.useState(false) ;
    const [prenomVide, setPrenomVide] = React.useState(false) ;
    const [telVide, setTelVide] = React.useState(false) ;
    const [mailVide, setMailVide] = React.useState(false) ;
    const [codePostalVide, setCodePostalVide] = React.useState(false) ;

    const [contentForm, setContentForm] = React.useState(true) ;


    return (
        <div className="bg-success" style={{ borderRadius: "5% 95% 3% 97% / 96% 4% 96% 4%" , height: props.taille}}  >
            <div className="row justify-content-center">
                <div className="col-8 mt-5">
                    { contentForm && 
                        <div>
                            <h1 className="h2">Demandez votre audit énergétique gratuit </h1>

                            <div className="form-group col-auto my-2">
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Nom"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                />
                                {nomVide &&
                                    <p className="text-danger">*Ce champs est obligatoire</p>
                                }
                            </div>  

                            <div className="form-group col-auto my-3">
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Prenom"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                />
                                { prenomVide &&
                                    <p className="text-danger">*Ce champs est obligatoire</p>
                                }  
                            </div> 

                            <div className="form-group col-auto my-3">
                                <input 
                                    className="form-control"
                                    type="number"
                                    placeholder="votre numero de téléphone"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                                {telVide && 
                                    <p className="text-danger">*Ce champs est obligatoire</p>
                                }
                            </div> 

                            <div className="form-group col-auto my-3">
                                <input 
                                    className="form-control"
                                    type="mail"
                                    placeholder="votre mail"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                                { mailVide &&
                                    <p className="text-danger">*Ce champs est obligatoire</p>
                                }
                            </div> 

                            <div className="form-group col-auto my-3">
                                <input 
                                    className="form-control"
                                    type="number"
                                    placeholder="Code postal"
                                    value={codePostal}
                                    onChange={(e) => setCodePostal(e.target.value)}
                                />
                                { codePostalVide && 
                                    <p className="text-danger">*Ce champs est obligatoire</p>
                                }
                            </div> 

                            <button className="btn btn-info mt-1 border border-light" onClick={async() => {
                                const quotesDB = firebase.database().ref("quotesDB") ; // quotesDB est le nom de collection dans la db
                                const quote = {
                                    nom : nom,
                                    prenom : prenom, 
                                    tel: tel,
                                    mail: mail,
                                    codePostal: codePostal
                                } ;

                                if (nom === ""  ) {
                                    setNomVide(true)
                                }
                                if (prenom === ""  ) {
                                    setPrenomVide(true)
                                }
                                if ( tel === ""  ) {
                                    setTelVide(true)
                                }
                                if ( mail === "" ) {
                                    setMailVide(true)
                                }
                                if (codePostal === "" ) {
                                    setCodePostalVide(true)
                                }

                                if (nom !== "" && prenom !== "" &&  tel !== "" &&  mail !== "" && codePostal !== "" ) {
                                    console.log(quote)
                                    quotesDB.push(quote)
                                    setContentForm(false)    
                                }
                            }


                            }>Suivant</button>
                        </div>
                    }
                     { !contentForm && 
                        <h2>
                            Votre formulaire vient d'être envoyé avec succés, vous serez rappelez d'ici 24H
                        </h2>
                     }
                </div>    
            </div>
        </div>
    )
}

export default Create
