import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreatedate from "./useCreatedate";
import type { notes } from "../Components/Types";
type setNotesType = {
  setNotes: Dispatch<SetStateAction<notes[]>>;
};
function CreateNote({ setNotes }: setNotesType) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreatedate();
  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      setNotes((prev) => [note, ...prev]);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="back-btn">
          <IoIosArrowBack />
        </Link>
        <button className="save-btn" onClick={handleSubmit}>
          save
        </button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          placeholder="Add a Title"
          className="form-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={28}
          placeholder="Note details..."
           className="form-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
}

export default CreateNote;
