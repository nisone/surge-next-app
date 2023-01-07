async function getPayment(paymentId: String) {
    return paymentId;
}

export default async function payment({params} : any) {
    const payment = await getPayment(params.id);

    return (
        <>
            <h1>Payment {payment}</h1>
        </>
    );
}