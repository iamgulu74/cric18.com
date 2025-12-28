
fetch("https://api.cricapi.com/v1/cricScore?apikey=8efc5250-4744-4286-a7bf-e1362cb40925")
  .then(response => response.json())
  .then(result => {
    const liveDiv = document.getElementById("live");
    liveDiv.innerHTML = "";

    if (!result.data || result.data.length === 0) {
      liveDiv.innerHTML = "No matches available right now";
      return;
    }

    result.data.forEach(match => {
      const div = document.createElement("div");
      div.className = "match-card";
      div.innerHTML = `
        <h3>${match.t1} vs ${match.t2}</h3>
        <p><strong>Score:</strong> ${match.t1s || "N/A"} / ${match.t2s || "N/A"}</p>
        <p><strong>Status:</strong> ${match.status}</p>
        <p><strong>Series:</strong> ${match.series || "N/A"}</p>
      `;
      liveDiv.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById("live").innerHTML = "Error loading matches";
    console.error(error);
  });
