import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBarTop = () => {


    return (
        <header className="">
          
            <a href="https://api.whatsapp.com/send?phone=33182831535&text=Merci%20de%20me%20rappeler,%20c'est%20%C3%A0%20propos%20d'un%20devis" target="_blank" rel="noopener noreferrer">
                <div id="btnWhatsapp" className="d-block d-sm-none bg-success rounded-circle position-absolut fixed-bottom" style={{width: "100px", marginLeft: "271px", height: "100px"}}>
                    <i aria-hidden="true" style={{fontSize: "453%", marginLeft: "18px", marginTop: "13px"}} className="fab fa-whatsapp text-white"></i>	
                </div>
            </a>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="primary" style={{border: "0px solid blue"}}>
                <Container>
                    <Navbar.Brand href="#home" className="h3">LogoLanding<span className="text-success">.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " className="svgBurger " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="me-auto">

                        </Nav>

                        <Nav className="me-auto">
                            <Nav.Link href="#DemanderUneAudite" className="h6 mx-3">Demander une audite<span className="text-success">.</span></Nav.Link>
                            <Nav.Link href="#QuiSommeNous" className="h6 mx-3">Qui Somme Nous<span className="text-success">?</span></Nav.Link>
                            <Nav.Link href="#CommentCaMarche" className="h6 mx-3">Comment ça marche<span className="text-success">?</span></Nav.Link>
                            <Nav.Link href="#subvention" className="h6 mx-3">Quelle Subvention<span className="text-success">?</span></Nav.Link>
                        </Nav>

                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </header>
    )
}

export default NavBarTop
