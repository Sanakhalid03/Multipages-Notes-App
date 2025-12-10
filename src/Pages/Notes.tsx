import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import NoteItem from "../Components/NoteItem";
import { BsPlusLg } from "react-icons/bs";
import type { notes } from "../Components/Types";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

type thisnote = {
  notes: notes[];
};
function Notes({ notes }: thisnote) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filterednotes, setFilteredNotes] = useState(notes);
  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);
  return (
    <section >
      <header className="notes__header">
        {!showSearch && <h2 className="notes__heading">My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            placeholder="Keyword..."
            className="notes__input"
            onChange={(e) => {
              setText(e.target.value);
              handleSearch;
            }}
          />
        )}
        <button className="btn" onClick={() => setShowSearch((prev) => !prev)}>
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filterednotes.length == 0 && (
          <p className="empty__notes">Notes Not Found</p>
        )}
        {filterednotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
        <Link to="/create-note" className="add__btn">
          <BsPlusLg />
        </Link>
      </div>
    </section>
  );
}

export default Notes;
