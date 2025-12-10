import { Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import EditNotes from "./Pages/EditNotes";
import CreateNote from "./Pages/CreateNote";
import { useEffect, useState } from "react";
import type { notes } from "./Components/Types";

function App() {
  const [notes, setNotes] = useState<notes[]>(
    JSON.parse(localStorage.getItem("notes") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNotes notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      
    </>
  );
}

export default App;
