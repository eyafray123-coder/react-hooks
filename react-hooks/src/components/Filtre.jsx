function Filtre({ titre, setTitre, noteMin, setNoteMin }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <select
        value={noteMin}
        onChange={(e) => setNoteMin(Number(e.target.value))}
      >
        <option value={0}>Toutes les notes</option>
        <option value={5}>5/10 et plus</option>
        <option value={6}>6/10 et plus</option>
        <option value={7}>7/10 et plus</option>
        <option value={8}>8/10 et plus</option>
        <option value={9}>9/10 et plus</option>
      </select>
    </div>
  );
}

export default Filtre;
