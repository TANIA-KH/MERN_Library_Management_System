const Books = (props) => {
    return(
        <div className="books">
            <label>Book ID: </label><p className="bookid">{props.id}</p><br></br>
            <label>Title: </label><p className="book_title">{props.title}</p><br></br>
            <label>Count: </label><p className="book_count">{props.count}</p>
            <button className="del_book" >Delete</button>
        </div>
    );
}
export default Books;