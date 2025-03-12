export default function Array(props: any) {
    // const names = ["Shaojun", "Dean", "Jose", "Kim"];
    // const users = [
    //     { name: "Shaojun Bao", age: 28 },
    //     { name: "Tom Black", age: "30" },
    //     { name: "Anna Bell", age: "1000" }
    // ]
    
    const {users} = props;
    return (
        <div>
            {users.map((user, key) => {
                return <h1 key={key}> Name: {user.name} Age: {user.age}</h1>
            })}
        </div>
    )

}