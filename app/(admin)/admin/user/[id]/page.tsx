import { firestore } from "../../../../../lib/firebase";
import TripCard from "../../../../../components/Cards/TripCard";
import PaymentCard from "../../../../../components/Cards/PaymentCard";

async function getUser(userId: string) {
    const result = await firestore.collection('users').doc(userId).get();
    const trips = await firestore.collection('requests').where('userId', '==', userId).get();
    const transactions = await firestore.collection('transactions').where('user_id', '==', userId).get();
    const tripsCount = await firestore.collection('requests').where('userId', '==', userId).count().get();
    const transactionsCount = await firestore.collection('transactions').where('user_id', '==', userId).count().get();

    return {result, trips, transactions, tripsCount, transactionsCount};
}

export default async function user({ params }: any) {
    const {result, trips, transactions, tripsCount, transactionsCount} = await getUser(params.id);
    const userData = result.data()!;
    return (
        <>
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
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
                </section>
                <section className="relative py-16 bg-slate-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    {/* <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src="/img/team-2-800x800.jpg"
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div> */}
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-slate-700 active:bg-slate-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Disable
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                                                    {tripsCount.data().count}
                                                </span>
                                                <span className="text-sm text-slate-400">
                                                    Trips
                                                </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                                                 {transactionsCount.data().count}
                                                </span>
                                                <span className="text-sm text-slate-400">
                                                    Payments
                                                </span>
                                            </div>
                                            {/* <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-slate-400">
                                                    Comments
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700">
                                        {userData.name}
                                    </h3>
                                    {/* <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                                        <i className="fas fa-envelope-open mr-2 text-lg text-slate-400"></i>{" "}
                                        {userData.email}
                                    </div> */}
                                    <div className="mb-2 text-slate-600 mt-10">
                                        <i className="fas fa-mobile mr-2 text-lg text-slate-400"></i>
                                        {userData.phone}
                                    </div>
                                    <div className="mb-2 text-slate-600">
                                        <i className="fas fa-envelope-open mr-2 text-lg text-slate-400"></i>
                                        {userData.email}
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-slate-200 text-left">
                                    <div className="flex flex-wrap justify-center">
                                        <h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Trips</h1>
                                        <div className="w-full lg:w-9/12 px-4">
                                            {trips.docs.map((doc) => <TripCard key={doc.id} tripData={doc.data()} />)}                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-slate-200 text-left">
                                    <div className="flex flex-wrap justify-center">
                                        <h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Payments</h1>
                                        <div className="w-full lg:w-9/12 px-4">
                                            {transactions.docs.map((doc) => <PaymentCard key={doc.id} paymentData={doc.data()} />)}    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}