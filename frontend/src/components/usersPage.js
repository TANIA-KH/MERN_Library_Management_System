import {useEffect, useState} from "react";
import Users from './users';
import AddUser from "./addUser";
import { Link } from "react-router-dom";

const UsersPage = () => {
    const [ user,setUser ] = useState([]);
    console.log(user);
    return(
        
        <div className="usersPage">
            <header>
            <div className="userList"><h1>USERS</h1></div>
            <nav>
                <Link className="book" to="/books">Books</Link>
                <Link className='user' to="/users">Users</Link>
            </nav> 
            </header>
            <AddUser/>
            <Users/>
            {
                user.map ((u) => {
                    return <Users/>
                })
            }
        </div>
        
    )
}
export default BooksPage;