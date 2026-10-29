function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.titre} className="movie-poster" />

      <div className="movie-info">
        <h3>{movie.titre}</h3>
        <p>{movie.description}</p>
        <span className="rating">⭐ {movie.note}/10</span>
      </div>
    </div>
  );
}

export default MovieCard;
