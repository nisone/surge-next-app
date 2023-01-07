async function getPayments() {
    return [] as any[];
}

export default async function payments() {
    const payments = await getPayments();

    return (
        <>
            <div>   
                {payments?.map((payment) => {
                    return <h1 key={payment.id}>driver.id</h1>;
                })}
            </div>
        </>
    );
}