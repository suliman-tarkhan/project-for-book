import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} />
      <div>
        {showEdit ? <BookEdit setShowEdit={setShowEdit} onEdit={onEdit} book={book} /> : book.title}
      </div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
