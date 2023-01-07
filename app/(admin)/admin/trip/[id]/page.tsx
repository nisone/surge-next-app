async function getTrip(tripId: String) {
    return tripId;
}

export default async function trip({params} : any) {
    const trip = await getTrip(params.id);

    return (
        <>
            <h1>Trip {trip}</h1>
        </>
    );
}