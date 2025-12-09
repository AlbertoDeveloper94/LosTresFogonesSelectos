const requestURL = '../json/winePage.json';

function createWineCard({ id, image, wine, price, denomination, description }) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Imagen del vino">
            <div class="card-body">
                <h5 class="card-title">${id}. ${wine} - ${price}€</h5>
                <p class="card-text">${denomination} — ${description}</p>
            </div>
        </div>
    `;
}

async function fetchWineJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Error al cargar JSON');
        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function displayWine() {
    const wineSection = document.getElementById('wineSection');
    const wineData = await fetchWineJson();

    if (wineData && wineData.wine) {
        wineSection.innerHTML = wineData.wine.map(createWineCard).join('');
    } else {
        wineSection.innerHTML = '<p>No se pudieron cargar los vinos.</p>';
    }
}

displayWine();
