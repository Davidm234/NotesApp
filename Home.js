import NoteList from "./NoteList";

export default function Home({ notes }) {
  return (
    <div className="home">
      <h1>All Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
}
