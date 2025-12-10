import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { notes } from "../Components/Types";
import useCreatedate from "./useCreatedate";
type notestype = {
  notes: notes[];
  setNotes: Dispatch<SetStateAction<notes[]>>;
};
function EditNotes({ notes, setNotes }: notestype) {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note?.title || "");
  const [details, setDetails] = useState(note?.details || "");
  const date = useCreatedate();
  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, id: id as string, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }

    navigate("/");
  };
  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id != id);
    setNotes(newNotes);
    navigate("/");
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="back-btn">
          <IoIosArrowBack />
        </Link>
        <div className="btns">
        <button className="save-btn" onClick={handleSubmit}>
          save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
        </div>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          className="form-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={28}
          placeholder="Note details..."
          value={details}
          className="form-details"
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
}

export default EditNotes;
