'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HowTo() {
    const [width, setWidth]   = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
    useEffect(() => { 
        const use = async () => {
            (await import('tw-elements')).default;
        }
        use();
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    
        window.addEventListener('resize', handleResize)
    
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step1.jpg"}
                        className="block"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item float-left w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step2.jpg"}
                        className="block"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item float-left w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step3.jpg"}
                        className="block"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className="carousel-item active w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step4.jpg"}
                        className="block"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step5-0.jpg"}
                        className="block"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step5-1.jpg"}
                        className="block"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className="carousel-item w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step6.jpg"}
                        className="block"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item w-full object-contain overflow-hidden">
                    <Image
                        width={width}
                        height={height}
                        src={"/images/step7.jpg"}
                        className="block"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}