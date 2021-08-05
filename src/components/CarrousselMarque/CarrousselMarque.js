import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgDaikin from '../../assets/DAIKIN_logo.svg.png' ;
import ToshibaLogo from '../../assets/Toshiba-Logo.png' ;
import auer from '../../assets/logoauer_accueuil.png' ;
import Mitsubishi from '../../assets/Mitsubishi_Electric_logo.svg.png' ;
import Panasonic from '../../assets/Panasonic_logo_(Blue).svg.png' ;


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const CarrousselMarque = (props) => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div><img src={imgDaikin} height="35px" alt="pompe-à-chaleur-Daikin" /></div>
            <div><img src={ToshibaLogo} height="35px" alt="pac-pompe-a-chaleur-Toshiba" /></div>
            <div><img src={auer} height="35px" alt="ballon thermodynamique-auer"/></div>
            <div><img src={Mitsubishi} height="35px" alt="Mitsubishi bar-th-164" /></div>
            <div><img src={Panasonic} height="35px" alt="Panasonic " /></div>

        </Carousel>
    )
}

export default CarrousselMarque
