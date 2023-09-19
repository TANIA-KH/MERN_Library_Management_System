const AddBook = () =>{
    return(
        <div className="addbook">
            <form>
            <label>Book ID: </label><input type="text" className="book_id_textbox"></input>
            <label>Title: </label><input type="text" className="book_title_textbox"></input>
            <label>Count: </label><input type="text" className="book_count_textbox"></input>
            </form>
        </div>
    )
}
export default AddBook;