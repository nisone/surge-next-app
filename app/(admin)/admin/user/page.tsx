import {firestore} from "../../../../lib/firebase";
import UserCard from "../../../../components/Cards/UserCard"

async function getUsers() {

    const result = await firestore.collection('users').get();

    return result.docs;
}

export default async function users() {
    const users = await getUsers();

    return (
        <>
            <div>
            <h1 className="py-10 text-lg">Dashboard / Users</h1>
                {users?.map((user) => {
                    return <UserCard key={user.id} userData={user.data()} />;
                })}
            </div>
        </>
    );
}


