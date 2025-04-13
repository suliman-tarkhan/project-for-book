import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ book, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderBook = book.map((book) => {
    return (
      <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}> Click</button>
      {renderBook}
    </div>
  );
}
export default BookList;
