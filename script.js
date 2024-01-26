async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/series?apikey=915a54fb-95ac-49fa-bad8-49eb60dfb44a&offset=0");
        const data = await response.json();

        if (data.status !== "success") return;

        const matchesList = data.data;
        if (!matchesList) return [];

        const relevantData = matchesList.map(match => `${match.name},${match.status}`);
        console.log({ relevantData });
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    } catch (error) {
        console.error("Error fetching match data:", error);
    }
}

getMatchData();
