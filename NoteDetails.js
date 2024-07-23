import { useParams, useNavigate } from "react-router-dom";

export default function NoteDetails({ notes, deleteNote }) {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return <div>Note not found</div>;
  }

  const handleDelete = () => {
    deleteNote(noteId);
    navigate("/");
  };

  return (
    <div className="note-details">
      <article>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <div>{note.date}</div>
        <button onClick={handleDelete}>Delete Note</button>
      </article>
    </div>
  );
}
