import { useState } from "react";
function BookEdit({ book, onEdit, setShowEdit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("new title is ", title);
    onEdit(book.id, title);
    setShowEdit(false);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button onSubmit={handleSubmit} className="button is-primary">
        save
      </button>
    </form>
  );
}

export default BookEdit;
