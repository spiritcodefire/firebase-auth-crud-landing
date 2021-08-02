import React from 'react' ;
import { Link } from 'react-router-dom' ;

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-sm-6 col-md-4">
                    <Link to='/Authentification'>
                        <div className="m-5 py-5 bg-danger text-white rounded shadow h4 text-center">Auth</div>
                    </Link>
                </div>

                <div className="col-sm-6 col-md-4">
                    <Link to='/LandingPage'>
                        <div className="m-5 py-5 bg-warning text-white rounded shadow h4 text-center">Landing Page</div>
                    </Link>
                </div>

                <div className="col-sm-6 col-md-4">
                    <Link to='/InsertImage'>
                        <div className="m-5 py-5 bg-primary text-white rounded shadow h4 text-center">Insert Image</div>
                    </Link>
                </div>

                <div className="col-sm-6 col-md-4">
                    <Link to='/Test'>
                        <div className="m-5 py-5 bg-secondary text-white rounded shadow h4 text-center">Test</div>
                    </Link>
                </div>

            </div>
            
        </div>
    )
}

export default Home
