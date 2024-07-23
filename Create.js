import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Create({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      date,
      id: uuidv4(),
    };
    addNote(newNote);
    setTitle("");
    setContent("");
    setDate("");
  };

  return (
    <div className="create">
      <h1>Add a New Note</h1>
      <form onSubmit={handleSubmit} className="note-form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">Details:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
