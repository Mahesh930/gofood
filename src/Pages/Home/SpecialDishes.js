import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../Components/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", cursor: "pointer" }}
            onClick={onClick}>
            Next
        </div >
    );

}


const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", cursor: "pointer" }}
            onClick={onClick}>
            Back
        </div >
    );

}

const SpecialDishes = () => {


    const [recopies, setRecopies] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json").then((res) => res.json()).then((data) => {
            const special = data.filter((item) => item.category === "popular")
            // console.log(special);
            setRecopies(special);
        })
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
    };
    return (
        <div className='section-container my-20 relative'>
            <div className='text-left'>
                <p className='subtitle'>Special Dishes </p>
                <h2 className='title md:w-[520px] text-gray-800'>Enjoy delicious meals like never before</h2>
            </div>
            <div className='md:absolute right-3 top-16 mb-10 md:mr-25'>
                <button onClick={() => slider?.current?.slickPrev()} className='btn bg-blue rounded-full ml-5'>
                    <FaAngleLeft className='w-8 h-8 p-1 ' />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className='btn bg-blue rounded-full ml-5'>
                    <FaAngleRight className='w-8 h-8 p-1 ' />
                </button>
            </div>
            <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-7'>
                {
                    recopies.map((item, index) => (
                        <Cards key={index} item={item} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default SpecialDishes
