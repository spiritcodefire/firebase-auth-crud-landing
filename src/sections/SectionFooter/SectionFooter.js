import React from 'react'
import Create from '../../components/Create/Create'
import Nav from 'react-bootstrap/Nav';

const SectionFooter = () => {
    return (
        <footer className="bg-dark" >
            <div className="container">
                <div className="row justify-content-between" style={{minHeight: "25vh"}}>
                    <div className="col-sm-12 col-md-6 text-center">
                        <h4 className="text-center text-white m-5">Menu</h4> 
                        <Nav.Link href="#DemanderUneAudite"><p className="text-success">Demander une Audite</p></Nav.Link>
                        <Nav.Link href="#QuiSommeNous"><p className="text-success">Qui sommes nous ?</p></Nav.Link>
                        <Nav.Link href="#CommentCaMarche"><p className="text-success">Comment ça marche ?</p></Nav.Link>
                        <Nav.Link href=""><p className="text-success">les marques que nous utilisons ?</p></Nav.Link>
                        <Nav.Link href="#subvention"><p className="text-success">Quels aides et pour qui ? </p></Nav.Link>
                        
                        
                        
                        
                        
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <Create />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default SectionFooter
