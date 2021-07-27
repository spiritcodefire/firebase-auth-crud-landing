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
        <div className="create">
            <h4>Déposer une citation</h4>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea 
                    placeholder="Citation"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={createQuote}>Create</button>
            </div>
        </div>
    )
}

export default Create
