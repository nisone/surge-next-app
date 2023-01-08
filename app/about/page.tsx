import Footer from "../../components/Footers/footer";
import Contact from "../../components/LandingPageSection/contact";
import TopFixedNavbar from "../../components/Navbars/top-fixed-navbar";

export default function About() {
    return (
        <>
        <TopFixedNavbar />
        <main>
        <section className="pb-20 relative block bg-slate-500">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full  px-0">
                <img className="w-full" src='/images/about.jpg' alt='about us' />
                {/* <h2 className="text-4xl font-semibold text-white">
                  About Surge Ryders
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-100">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p> */}
              </div>
            </div>
        </div>
        </section>
        <Contact />
      </main>
      <Footer />
        </>
    );
}