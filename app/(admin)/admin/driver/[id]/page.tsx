async function getDriver(driverId: String) {
    return driverId;
}

export default async function driver({params} : any) {
    const driver = await getDriver(params.id);

    return (
        <>
            <h1>Driver {driver}</h1>
        </>
    );
}