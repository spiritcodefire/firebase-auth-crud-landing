import React, {useState} from 'react';
import firebase from '../../utils/firebaseConfig';

//  item est envoyé dans le component Read dans les props
const UpdateDelete = ({ item }) => {


    // ce state servira lorsqu'on sera en train de faire une mise à jour, donc de base, il est false car on n'en fait pas 
    const [update, setUpdate] = useState(false) ;
    const [authorUpdate, setAuthorUpdate] =  useState(null); 
    const [textUpdate, setTextUpdate] =  useState(null); 

    const updateItem = () => {
        // quote representera une citation dans la bd, qui aura matché avec le item.id
        let quote = firebase.database().ref('quotesDB').child(item.id)

        // on checkera toujours si il n'y a pas d'éléments null
        if (authorUpdate !== null) {
            quote.update({
                author : authorUpdate
            });
        }

        if (textUpdate !== null) {
            quote.update({
                text : textUpdate
            });
        }
        setUpdate(false)
    }

    const deleteItem = () => {
        let quote = firebase.database().ref('quotesDB').child(item.id) ;
        quote.remove() ;
    }
 
    return (
        <div>
            {
                update === false && (
                    <div className="bg-secondary m-1">
                        <div className="item-container">
                            <p>{item.text}</p>
                            <h6>{item.author}</h6>

                        {/* Si jamais la fonction authorUpdate renvoi TRUE alors affiche les boutons */}
                       
                            <div className="buttons-container">
                                <button className="btn btn-light m-1" onClick={()=> setUpdate(!update)}>Update</button>
                                <button className="btn btn-danger m-1"  onClick={deleteItem}>Delete</button>
                            </div> 
                       
                        </div>
                    </div>
                )
            }
            {update &&
                <div className="item-container-update bg-secondary">

                    <textarea
                        defaultValue={item.text}
                        class="form-control"
                        onChange={(e) => setTextUpdate(e.target.value)}
                    />

                    <input 
                        type="text"
                        defaultValue={item.author}
                        onChange={(e) => setAuthorUpdate(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={updateItem}>validateUpdate</button>

                </div>
            }
        </div>
    )
}

export default UpdateDelete
