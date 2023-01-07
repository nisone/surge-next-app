import Image from "next/image";

export default function Feature() {
    return (
        <div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800 text-center lg:text-left">
    

    <div className="md:px-6 py-12 md:px-12">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className="relative block rounded-lg shadow-lg px-6 pt-12 pb-6 md:px-12 lg:-mr-14 bg-slate-800" style={{zIndex: 1}}>
              {/* <h2 className="text-3xl font-bold mb-6 text-white">Why is it so great?</h2>
              <p className="text-gray-100 mb-6">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                diam.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Support 24/7
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Analytics
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Components
                  </p>
                </div>
                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Updates
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Reports
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Mobile
                  </p>
                </div>
                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Modules
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Blocks
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-2 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Templates
                  </p>
                </div> 
              </div> */}
              <img src="/images/graphic_1.jpg" alt="graphic"/>
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img src="/images/graphic_2.jpg"
              className="w-full rounded-lg shadow-lg rotate-lg-6" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    );
}