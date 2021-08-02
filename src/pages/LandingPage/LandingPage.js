import React from 'react' ;
import NavBar from '../../components/NavBarTop/NavBarTop'
import SectionFormPhoto from '../../sections/SectionFormPhoto/SectionFormPhoto'
import SectionTrio from '../../sections/SectionTrio/SectionTrio'
import SectionMarque from '../../sections/SectionMarque/SectionMarque'
import SectionCardTextDuo from '../../sections/SectionCardTextDuo/SectionCardTextDuo'
import SectionCommentCaMarche from '../../sections/SectionCommentCaMarche/SectionCommentCaMarche';
import SectionFooter from '../../sections/SectionFooter/SectionFooter';


const LandingPage = () => {
    return (
        <>
            <NavBar />

            <SectionFormPhoto />

            <SectionTrio />

            <SectionCommentCaMarche />

            <SectionMarque />
            
            <SectionCardTextDuo />

            <SectionFooter />
        </>
    )
}

export default LandingPage
