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
                {users?.map((user) => {
                    return <UserCard key={user.id} userData={user.data()} />;
                })}
            </div>
        </>
    );
}


