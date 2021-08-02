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
                            alt="logo CEE certificat d'economie d'energie"
                            titre="Certificat économies d’énergie"
                            soustitre="Une aide à disposition des particuliers et des professionnels"
                            paragraphe1="Ces Primes et subventions permettent de financer des projets de rénovation énergétique, le système de CEE n’est pas directement supporté par l’État. En effet, ce sont les fournisseurs d’énergie (vendeurs de gaz, électricité, GPL, fioul), qui sont chargés de subventionner les projets favorisant l’efficacité énergétique."
                            paragraphe2="Groupe ELS se propose de vous accompagner afin obtenir les aides auxquelles vous pouvez prétendre. Nous nous chargeons ainsi d’estimer les aides auxquelles vous avez droit, et nous effectuons pour vous les démarches administratives."
                        />
                    </div>

                    <div className="col-sm-12 col-md-5 m-3 ">
                        <CardDuo
                            img={imgPrimeRenov} 
                            alt="logo CEE certificat d'economie d'energie"
                            titre="Certificat économies d’énergie"
                            soustitre="Une aide à disposition des particuliers et des professionnels"
                            paragraphe1="Ces Primes et subventions permettent de financer des projets de rénovation énergétique, le système de CEE n’est pas directement supporté par l’État. En effet, ce sont les fournisseurs d’énergie (vendeurs de gaz, électricité, GPL, fioul), qui sont chargés de subventionner les projets favorisant l’efficacité énergétique."
                            paragraphe2="Groupe ELS se propose de vous accompagner afin obtenir les aides auxquelles vous pouvez prétendre. Nous nous chargeons ainsi d’estimer les aides auxquelles vous avez droit, et nous effectuons pour vous les démarches administratives."
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionCardTextDuo
