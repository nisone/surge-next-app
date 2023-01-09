import { firestore } from "../../../../lib/firebase";
import TripCard from "../../../../components/Cards/TripCard"

async function getTrips() {
    const result = await firestore.collection('requests').get();

    return result.docs;
}
export default async function drivers() {
    const trips = await getTrips();

    return (
        <>
            <div>   
            <h1 className="py-10 text-lg">Dashboard / Trips</h1>
                {trips?.map((trip) => {
                    return <TripCard key={trip.id} tripData={trip.data()} />;
                })}
            </div>
        </>
    );
}