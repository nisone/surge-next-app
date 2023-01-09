import { firestore } from "../../../../lib/firebase";
import PaymentCard from "../../../../components/Cards/PaymentCard"

async function getPayments() {
    const result = await firestore.collection('transactions').get();

    return result.docs;
}

export default async function payments() {
    const payments = await getPayments();

    return (
        <>
            <div>   
            <h1 className="py-10 text-lg">Dashboard / Transactions</h1>
                {payments?.map((payment) => {
                    return <PaymentCard key={payment.id} paymentData={payment.data()} />;
                })}
            </div>
        </>
    );
}