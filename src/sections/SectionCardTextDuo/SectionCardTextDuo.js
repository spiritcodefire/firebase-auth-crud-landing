import React from 'react'
import CardDuo from '../../components/CardDuo/CardDuo'
import imgCEE from '../../assets/CEE.png'
import imgPrimeRenov from '../../assets/PRIME-RENOV.jpg'


const SectionCardTextDuo = () => {
    return (
        <section className="container-fluid bg-light" id="subvention">
            <div className="container">
                <div className="row justify-content-center my-5" style={{minHeight: "80vh"}}>

                    <div className="col-sm-12 col-md-5 m-3 ">
                        <CardDuo 
                            img={imgCEE} 
                            alt="prime energie"
                            titre=""
                            soustitre=  {<p>Les cee, Certificats d’Economie d’Energie, sont un dispositif mis en place par les pouvoirs publics qui obligent les grands pollueurs à installer des systèmes d’<strong>économies d’énergie</strong> . C’est pourquoi les pollueurs sont grandement incités à entreprendre des démarches d'économie d'énergie dans chaque ménage en France. Ce dispositif s’inscrit dans une politique d’environnement durable afin de permettre à chaque citoyen français de franchir le cap vers la transition écologique. </p>}
                            paragraphe1={<p>  Ainsi, grâce à la <strong>prime cee</strong>, il devient accessible à une grande partie des habitants français d’entreprendre des <strong> travaux de rénovation énergétique </strong>.</p>}
                            paragraphe2={<p> Nous avons pour mission de faire valoir votre <strong>  prime énergie </strong> pour vous faire gagner en confort et réduire votre consommation énergétique. C’est bon, pour vous et pour la planète ! </p> }
                        />
                    </div>

                    <div className="col-sm-12 col-md-5 m-3 ">
                        <CardDuo
                            img={imgPrimeRenov} 
                            alt="maprimerénov"
                            titre="MaPrimRenov’, une aide pour vos travaux de rénovation énergétique"
                            soustitre=""
                            paragraphe1={<p><strong>MaPrimRenov’</strong> , est une aide financière à la charge de l’ANAH, l’agence nationale de l’habitat. Elle est octroyée aux ménages français en fonction de certains critères d'éligibilité. Son objectif est triple :Améliorer le confort des citoyens français tout en réduisant leur consommation énergétique.Améliorer la performance énergétique des habitations françaises pour leur donner une réelle plus-value. Donner un nouveau souffle à la planète grâce à l’installation de systèmes durables et respectueux de l’environnement.</p>}
                            paragraphe2={<p>Notre entreprise s’occupe d’estimer vos <strong>primes énergie</strong> et nous nous chargeons de vos démarches administratives dans le cadre de MaprimRenov’.</p>}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionCardTextDuo
