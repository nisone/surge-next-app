

async function getDrivers() {
    
    return [] as any[];
}

export default async function drivers() {
    const drivers = await getDrivers();

    return (
        <>
            <div>   
                {drivers?.map((driver) => {
                    return <h1 key={driver.id}>driver.id</h1>;
                })}
            </div>
        </>
    );
}