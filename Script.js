const games = Array.from({ length: 50 }, (_, i) => ({
  title: `Game ${i + 1}`,
  description: `Fun and challenging gameplay.`,
}));

function displayGames(filter = "") {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p>`;
    gameList.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  displayGames(e.target.value);
});

window.onload = () => displayGames();
