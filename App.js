import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NoteDetails from "./NoteDetails";
import NotFound from "./NotFound";
import Footer from "./Footer";

export default function App() {
  const [notes, setNotes] = useState([
    {
      title: "Car Mechanic Appointment",
      content: "Take the car to get maintaince done.",
      date: "2024-05-04",
      id: "0",
    },
    {
      title: "Grocery Shopping",
      content: "2lbs of tomatoes, 4 chicken breasts, apple juice, dish soap.",
      date: "2024-05-06",
      id: "1",
    },
  ]);

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home notes={notes} />} />
            <Route path="/create" element={<Create addNote={addNote} />} />
            <Route
              path="/notes/:noteId"
              element={<NoteDetails notes={notes} deleteNote={deleteNote} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
