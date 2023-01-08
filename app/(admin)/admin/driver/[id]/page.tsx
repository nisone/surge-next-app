import { firestore } from "../../../../../lib/firebase";

async function getDriver(driverId: string) {
    const result = await firestore.collection('drivers').doc(driverId).get();

    return result;
}

export default async function driver({params} : any) {
    const driver = await getDriver(params.id);

    return (
        <>
            <h1>Driver {driver.data()?.name}</h1>
        </>
    );
}