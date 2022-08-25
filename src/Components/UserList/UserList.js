import "../UserList/UserList.css"
export default function UserList(){
const userArr=[
    {
    firstName:"yosef",
    lastName:"cohen",
    age:22,
    status:"ravak",
    city:"beytar",
    height:1.75,
    healthCondition:"good",
    look:"pretty"
    },
    {
        firstName:"inon",
        lastName:"cohen",
        age:22,
        status:"ravak",
        city:"givat shaul",
        height:1.73,
        healthCondition:"good",
        look:"pretty and nice"
    },
    {
        firstName:"aharon",
        lastName:"avargel",
        age:23,
        status:"ravak",
        city:"bney-brak",
        height:1.80,
        healthCondition:"good",
        look:"sweet so beautiful!!!"
    }
]

    return(<>
    <h1>UserList!!!</h1>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>

    {userArr.map(u=><p key={u}>{u.firstName} | {u.lastName} | {u.age} | {u.status} | {u.city} | {u.height}
    | {u.healthCondition} | {u.look}</p>)}
    </>)
}