import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

function Carousel() {
    const carousel_Data = [
        {
            "alt": "image2",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721925658/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/July/26072024/Revised/Desktop/HP_Rotating_Monitors_26July2024_pycfh7.jpg"
        },
        {
            "alt": "image1",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721925658/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/July/26072024/Revised/Desktop/HP_Rotating_CromaTVs_26July2024_n9sbtz.jpg"
        },

        {
            "alt": "image3",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721925660/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/July/26072024/Revised/Desktop/HP_Rotating_RealmeTWS_26July2024_edelil.jpg"
        },
        {
            "alt": "image4",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721973563/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/July/26072024/HP_Rotating_nothing_26July2024_jblndf.jpg"
        },
        {
            "alt": "image5",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721973564/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/July/26072024/HP_Rotating_redmi_26July2024_uso8vk.jpg"
        },
        {
            "alt": "image6",
            "url": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720699331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BTC/HP%20Rotating/revised%2007112024/HP_BTC_11July2024_qygq1a.jpg"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />
    };

    return (
        <Wrapper>
            <div className="carousel-container">
                <Slider {...settings}>
                    {carousel_Data.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <img src={item.url} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .carousel-item img {
    width: 100%;
    height: 100%;
  }
  .slick-next {
    right: 25px;
    z-index:999;
  }
    .slick-prev:before, .slick-next:before{font-size:30px;}
  .slick-prev {
    left: 20px;
    z-index:99;
  }
    .carousel-item {
    height: 100% !important;
    width: 100% !important;
    display: block !important;
}
    .slick-dots {
    position: absolute;
    bottom: 10px !important;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
`;

// Custom arrow components
// const CustomPrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <button
//             className={`${className} custom-previous custom-arrow-btn slick-arrow`}
//             type="button"
//             aria-label="Previous"
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             <svg className="flickity-button-icon" viewBox="0 0 100 100">
//                 <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow"></path>
//             </svg>
//         </button>
//     );
// };

// const CustomNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <button
//             className={`${className} custom-next custom-arrow-btn slick-arrow`}
//             type="button"
//             aria-label="Next"
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             <svg className="flickity-button-icon" viewBox="0 0 100 100">
//                 <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) "></path>
//             </svg>
//         </button>
//     );
// };

export default Carousel;
