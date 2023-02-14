import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}

export default App;

