import React from 'react'
import firebase from '../../utils/firebaseConfig'


const Create = () => {

   

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
        <div className="bg-light">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h4>Déposer votre candidature et recevez des Chantiers par Milliers</h4>
                    <div className="form-group col-auto mb-1">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Nom de votre entreprise"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>  
                    <div className="form-group col-auto mb-1">  
                        <textarea 
                            className="form-control"
                            placeholder="Expliquez nous votre étique"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button className="btn btn-warning mt-1" onClick={createQuote}>Create</button>






                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Create
