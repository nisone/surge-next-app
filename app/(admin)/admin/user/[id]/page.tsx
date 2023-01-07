async function getUser(userId: String) {
    return userId;
}

export default async function user({params} : any) {
    const user = await getUser(params.id);

    return (
        <>
            <h1>User {user}</h1>
        </>
    );
}