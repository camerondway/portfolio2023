// Replace 'YOUR_API_KEY' with your actual MLB API key
const apiKey = "33d2811efda748f3bbddf6a094189602";
const currentYear = "2023";
// https://api.sportsdata.io/v3/mlb/scores/json/Standings/2023?key=33d2811efda748f3bbddf6a094189602
const apiUrl = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/${currentYear}?key=${apiKey}`;

const teamColors = {
  Giants: "#F2552C",
  Dodgers: "#1E90FF",
  Padres: "#2F241D",
  Diamondbacks: "#A71930",
  Rockies: "#333366",
};

// Function to fetch the standings data from the MLB API
async function fetchStandingsData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Function to calculate the games back for each team from the first place
function calculateGamesBack(teams) {
  // Sort the teams by wins in descending order
  teams.sort((a, b) => b.Wins - a.Wins);

  // Get the number of wins and losses of the first place team
  const firstPlaceWins = teams[0].Wins;
  const firstPlaceLosses = teams[0].Losses;

  // Calculate games back for each team based on MLB games back formula
  teams.forEach((team) => {
    if (team.Wins !== firstPlaceWins || team.Losses !== firstPlaceLosses) {
      const gamesBack =
        (firstPlaceWins - team.Wins + (team.Losses - firstPlaceLosses)) / 2;
      team.GamesBack = gamesBack.toFixed(1);
    } else {
      team.GamesBack = "-";
    }
  });
}

// Function to render the standings data in an HTML table
export async function renderStandings() {
  const standingsBody = document.getElementById("standings-body");
  standingsBody.innerHTML = "";

  const standingsData = await fetchStandingsData();
  if (standingsData) {
    const nlWestTeams = standingsData.filter(
      (team) => team.League === "NL" && team.Division === "West"
    );
    calculateGamesBack(nlWestTeams);

    nlWestTeams.forEach((team) => {
      const row = standingsBody.insertRow();
      row.innerHTML = `
                <td style="color: ${teamColors[team.Name] || "black"};">${
        team.City
      } ${team.Name}${team.Name === "Giants" ? " &#128169; " : ""}</td>
                <td>${team.Wins}</td>
                <td>${team.Losses}</td>
                <td>${team.GamesBack}</td>
            `;
    });
  } else {
    // Display an error message if data retrieval fails
    const errorMessage = standingsBody.insertRow();
    errorMessage.innerHTML =
      '<td colspan="4">Check back later for standings and Go Dodgers!</td>';
  }
}
