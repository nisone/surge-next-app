import { firestore } from "../../../../../lib/firebase";

async function getUser(userId: string) {
    const result = await firestore.collection('users').doc(userId).get();

    return result;
}

export default async function user({params} : any) {
    const user = await getUser(params.id);

    return (
        <>
            <h1>User {user.data()?.name}</h1>
        </>
    );
}