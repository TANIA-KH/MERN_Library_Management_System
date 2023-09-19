import {useEffect, useState} from "react";
import Books from './books';
import AddBook from "./addBook";
import { Link } from "react-router-dom";

const BooksPage = () => {
    const [ book,setBook ] = useState([]);
    console.log(book);
    return(
        
        <div className="booksPage">
            <header>
            <div className="bookList"><h1>BOOKS</h1></div>
            <nav>
                <Link className="book" to="/books">Books</Link>
                <Link className='user' to="/users">Users</Link>
            </nav> 
            </header>
            <AddBook/>
            <Books/>
            {
                book.map ((b) => {
                    return <Books key={b.book_id} id={b.book_id} title={b.book_title} count={b.book_count}/>
                })
            }
        </div>
        
    )
}
export default BooksPage;