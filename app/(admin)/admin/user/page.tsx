async function getUsers() {
    return [] as any[];
}

export default async function users() {
    const users = await getUsers();

    return (
        <>
            <div>
                {users?.map((user) => {
                    return <h1 key={user.id}>driver.id</h1>;
                })}
            </div>
        </>
    );
}