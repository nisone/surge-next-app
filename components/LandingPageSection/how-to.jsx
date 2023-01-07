'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HowTo() {
    const [index, setIndex] = useState(0)
    const decrease = (i) => {
        if(i > -1){
            setIndex(i)
        }
    }
    const increase = (i) => {
        if(i < 8){
            setIndex(i)
        }
    }

    return (
        <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    onClick={() => setIndex(0)}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    onClick={() => setIndex(1)}
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    onClick={() => setIndex(2)}
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    onClick={() => setIndex(3)}
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    onClick={() => setIndex(4)}
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="5"
                    onClick={() => setIndex(5)}
                    aria-label="Slide 6"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="6"
                    onClick={() => setIndex(6)}
                    aria-label="Slide 7"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="7"
                    onClick={() => setIndex(7)}
                    aria-label="Slide 8"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className={"carousel-item float-left w-full object-contain overflow-hidden " + (index == 0 ? "active" : "") }>
                    <img
                        src={"/images/step1.jpg"}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div className={"carousel-item float-left w-full object-contain overflow-hidden " + (index == 1 ? "active" : "") }>
                    <img
                        src={"/images/step2.jpg"}
                        className="block w-full"
                        alt="Camera"
                    />
                </div>
                <div className={"carousel-item float-left w-full object-contain overflow-hidden " + (index == 2 ? "active" : "") }>
                    <img
                        src={"/images/step3.jpg"}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className={"carousel-item w-full object-contain overflow-hidden " + (index == 3 ? "active" : "") }>
                    <img
                        src={"/images/step4.jpg"}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div className={"carousel-item w-full object-contain overflow-hidden " + (index == 4 ? "active" : "") }>
                    <img
                        src={"/images/step5-0.jpg"}
                        className="block w-full"
                        alt="Camera"
                    />
                </div>
                <div className={"carousel-item w-full object-contain overflow-hidden " + (index == 5 ? "active" : "") }>
                    <img
                        src={"/images/step5-1.jpg"}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className={"carousel-item w-full object-contain overflow-hidden " + (index == 6 ? "active" : "") }>
                    <img
                        src={"/images/step6.jpg"}
                        className="block w-full"
                        alt="Camera"
                    />
                </div>
                <div className={"carousel-item w-full object-contain overflow-hidden " + (index == 7 ? "active" : "") }>
                    <img
                        src={"/images/step7.jpg"}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                onClick={() => decrease(index - 1)}
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                onClick={() => increase(index + 1)}
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}