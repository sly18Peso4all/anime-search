import React from "react";
import Anime from "./AnimeCard";

function MainContent({ HandleSearch, search, setSearch, animeList }) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={HandleSearch}>
          <input
            type="search"
            placeholder="Search for an anime.."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {animeList.map((anime) => (
          <Anime anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
