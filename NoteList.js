import { Link } from "react-router-dom";

export default function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-preview" key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <h2>{note.title}</h2>
            <p>{note.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
