import { firestore } from "../../../../lib/firebase";
import DriverCard from "../../../../components/Cards/DriverCard"


async function getDrivers() {
    const result = await firestore.collection('drivers').get();

    return result.docs;
}

export default async function drivers() {
    const drivers = await getDrivers();

    return (
        <>
            <div>   
                <h1 className="py-10 text-lg">Dashboard / Drivers</h1>
                {drivers?.map((driver) => {
                    return <DriverCard key={driver.id} driverData={driver.data()} />;
                })}
            </div>
        </>
    );
}