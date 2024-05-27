const satelliteContainer = document.getElementsByClassName("satelite")[0];

async function fetchSatelliteDetails() {
  const url = "https://isro.vercel.app/api/customer_satellites";

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.customer_satellites.forEach((element) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "width: 18rem;");
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${element.country}</h5>
          <h6 class="card-subtitle">${element.launch_date}</h6><br>
          <p class="card-text">ID: ${element.id}</p>
          <p class="card-text">Mass: ${element.mass} Kilograms</p>
          <p class="card-text">Launcher: ${element.launcher}</p>
        </div>`;
      satelliteContainer.append(card);
    });
  } catch (error) {
    console.error("Error fetching satellite details:", error);
  }
}

fetchSatelliteDetails();
