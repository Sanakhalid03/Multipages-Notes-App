import { Link } from "react-router-dom";
import type { notes } from "./Types";

type propnote = {
  note: notes;
};
function NoteItem({ note }: propnote) {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h1 className="note__name">Note</h1>
      <div className="note__box">
      <h4 className="note__title">
        {note.title.length > 40 ? note.title.slice(0, 40) + "..." : note.title}
      </h4>
      <p className="note__date">{note.date}</p>
        </div>
    </Link>
  );
}

export default NoteItem;
