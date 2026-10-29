import { useState } from "react";
import MovieList from "./components/MovieList";
import Filtre from "./components/Filtre";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      titre: "Inception",
      description: "Un voleur entre dans les rêves pour voler des secrets.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      note: 8.8,
    },
    {
      id: 2,
      titre: "Interstellar",
      description: "Une équipe voyage dans l'espace pour sauver l'humanité.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      note: 8.7,
    },
    {
      id: 3,
      titre: "Titanic",
      description: "Une histoire d'amour à bord d'un célèbre paquebot.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      note: 7.9,
    },
  ]);

  const [titre, setTitre] = useState("");
  const [noteMin, setNoteMin] = useState(0);

  const [newMovie, setNewMovie] = useState({
    titre: "",
    description: "",
    posterURL: "",
    note: "",
  });

  function handleChange(e) {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      ...newMovie,
      id: Date.now(),
      note: Number(newMovie.note),
    };

    setMovies([...movies, movie]);

    setNewMovie({
      titre: "",
      description: "",
      posterURL: "",
      note: "",
    });
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.titre
      .toLowerCase()
      .includes(titre.toLowerCase());

    const matchesRating = movie.note >= noteMin;

    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 MovieZone</h1>
        <p>Discover your next favorite movie</p>
      </header>

      <main>
        <section className="add-section">
          <h2>Add a movie</h2>

          <form onSubmit={handleSubmit} className="movie-form">
            <input
              name="titre"
              placeholder="Movie title"
              value={newMovie.titre}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Movie description"
              value={newMovie.description}
              onChange={handleChange}
              required
            />

            <input
              name="posterURL"
              type="url"
              placeholder="Poster image URL"
              value={newMovie.posterURL}
              onChange={handleChange}
              required
            />

            <input
              name="note"
              type="number"
              placeholder="Rating (0-10)"
              min="0"
              max="10"
              step="0.1"
              value={newMovie.note}
              onChange={handleChange}
              required
            />

            <button type="submit">+ Add Movie</button>
          </form>
        </section>

        <section className="movies-section">
          <h2>Explore Movies</h2>

          <Filtre
            titre={titre}
            setTitre={setTitre}
            noteMin={noteMin}
            setNoteMin={setNoteMin}
          />

          <p className="results">{filteredMovies.length} movie(s) found</p>

          <MovieList movies={filteredMovies} />
        </section>
      </main>
    </div>
  );
}

export default App;
