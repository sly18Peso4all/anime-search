import React from "react";

function Sidebar({ topAnime }) {
  return (
    <aside>
      <nav>
        <h3>TopAnime</h3>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            rel="non-referrer"
            key={anime.mal_id}
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
