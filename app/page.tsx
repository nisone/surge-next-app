import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import TopFixedNavbar from "../components/Navbars/top-fixed-navbar";
import Footer from "../components/Footers/footer";
import Feature from "../components/LandingPageSection/features";
import Contact from "../components/LandingPageSection/contact";
import HowTo from "../components/LandingPageSection/how-to";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TopFixedNavbar />
      <main>
        
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/images/graphic_7.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold md:text-5xl">
                  A stitch in time saves nine.
                    A ride with surge saves time.
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        
        <section className="pb-20 bg-slate-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Safe and convenient</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Moving with Surge is easy, convenient and fast.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fas fa-smile"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Happy drivers, happy ryders</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Surge drivers earn more thanks to lower commission rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Always there for you</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Get fast support, whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Get a ride in minutes!
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  Pick your destination, request a ride, meet your driver, enjoy the journey.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <div className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Ready to ride?
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Download the Surge ryders app, sign up to start driving.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Feature />
        
        <section className="pb-20 relative block bg-slate-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Get extra cash driving
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400">
                  Be your own boss, schedule your own time.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-car text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Get a ride
                </h6>
                <p className="mt-2 mb-4 text-slate-400">
                  Surge offers you a ride in minutes
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  The best prices
                </h5>
                <p className="mt-2 mb-4 text-slate-400">
                  We offer the best affordable prices. See for yourself!
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-simplybuilt text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Easy to use
                </h5>
                <p className="mt-2 mb-4 text-slate-400">
                  Get wherever you need to go fast as poissible
                </p>
              </div>
            </div>
          </div>
        </section>
        <HowTo />
        
        <Contact />
      </main>
      <Footer />
    </>
  )
}
