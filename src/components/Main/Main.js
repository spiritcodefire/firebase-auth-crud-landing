import React from 'react';
import firebase from '../../utils/firebaseConfig'
import Create from '../Create/Create';
import Read from '../Read/Read'

const Main = () => {
    return (
        <main className="container-fluid">
    
            <h1>React Crud</h1>
            <div className="row justify-content-between">

                <div className="col-6 h4">
                    Bonjour {firebase.auth().currentUser.displayName} 
                </div>
                <div className="col-6">
                    <div className="btn btn-warning" onClick={() => firebase.auth().signOut() }>Se déconnecter</div>
                </div>

            </div>
                
            <Create />
            <Read />

        </main>
    )
}

export default Main
