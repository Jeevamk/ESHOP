import React from 'react'
import Slider from "react-slick";

const CarousalData =
    [
        {
          "id": 1,
          "category": "Headphones",
          "name": "Sony WH-1000XM4",
          "description": "Industry-leading noise canceling with Dual Noise Sensor technology",
          "price": 349.99,
          "image": "https://example.com/headphones/sony-wh-1000xm4.jpg"
        },
        {
          "id": 2,
          "category": "Laptops",
          "name": "Apple MacBook Pro 13-inch",
          "description": "Powerful Apple M1 chip with stunning Retina display",
          "price": 1299.99,
          "image": "https://example.com/laptops/apple-macbook-pro-13-inch.jpg"
        },
        {
          "id": 3,
          "subtitle": "Keyboards",
          "title": "Logitech MX Keys",
          "title2": "Advanced wireless illuminated keyboard with easy-switching technology",
          "price": 99.99,
          "image": "https://example.com/keyboards/logitech-mx-keys.jpg"
        },
        {
          "id": 4,
          "category": "Mice",
          "name": "Razer DeathAdder V2",
          "description": "Ergonomic gaming mouse with Razer Optical Mouse Switches",
          "price": 69.99,
          "image": "https://example.com/mice/razer-deathadder-v2.jpg"
        },
        {
          "id": 5,
          "category": "Headphones",
          "name": "Bose QuietComfort 35 II",
          "description": "World-class noise cancellation with built-in Google Assistant",
          "price": 299.99,
          "image": "https://example.com/headphones/bose-quietcomfort-35-ii.jpg"
        }
      ]
      


const Carousal = () => {
    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 1,
    slidesToScroll: 1

    }
    return (
        <div>
            <div className='w-full'>
                <Slider {...settings}>
              {CarousalData.map((data)=>{
                  <div key={data.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div>
                            <h1>{data.subtitle}</h1>                          
                            <h1>{data.title}</h1>
                            <h1>{data.title2}</h1>
                            <div>
                                <button>Shop Now</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={data.image}  className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105
                                lg:scale-110 object-contain mx-auto drop-shadow-md' />
                            </div>
                        </div>

                    </div>

                  </div>
              })}

                </Slider>
            </div>
        </div>
    )
}

export default Carousal