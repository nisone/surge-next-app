async function getTrips() {
    return [] as any[];
}

export default async function drivers() {
    const trips = await getTrips();

    return (
        <>
            <div>   
                {trips?.map((trip) => {
                    return <h1 key={trip.id}>trip.id</h1>;
                })}
            </div>
        </>
    );
}