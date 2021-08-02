import React from 'react'
import firebase from '../../utils/firebaseConfig'


const Create = (props) => {

   

    const [author, setAuthor] = React.useState('') ;
    const [text, setText] = React.useState('') ;

    const createQuote = () => {
        const quotesDB = firebase.database().ref("quotesDB") ; // quotesDB est le nom de collection dans la db
        const quote = {
          
            author : author,
            text : text 
            
        } ;
        quotesDB.push(quote) ; 
        setAuthor('') ;
        setText('') ; 
    }

    return (
        <div className="bg-success" style={{ borderRadius: "5% 95% 3% 97% / 96% 4% 96% 4%" , height: props.taille}}  >
            <div className="row justify-content-center">
                <div className="col-8 mt-5">
                    <h4>Demander une audite personnalisé Gratuite</h4>
                    <div className="form-group col-auto my-2">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Nom"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>  
                    {/* <div className="form-group col-auto mb-1">  
                        <textarea 
                            className="form-control"
                            placeholder="Expliquez nous votre étique"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        
                    </div> */}
                    <div className="form-group col-auto my-3">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Prenom"
                        />
                    </div> 
                    <div className="form-group col-auto my-3">
                        <input 
                            className="form-control"
                            type="number"
                            placeholder="votre numero de téléphone"
                        />
                    </div> 
                    <div className="form-group col-auto my-3">
                        <input 
                            className="form-control"
                            type="mail"
                            placeholder="votre mail"
                        />
                    </div> 
                    <div className="form-group col-auto my-3">
                        <input 
                            className="form-control"
                            type="number"
                            placeholder="Code postal"
                        />
                    </div> 
                    <button className="btn btn-info mt-1 border border-light" onClick={createQuote}>Suivant</button>
                </div>    
            </div>
        </div>
    )
}

export default Create
