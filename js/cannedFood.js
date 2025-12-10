const requestURL = '../json/cannedFood.json';

function createCannedFoodCard({image, cannedFood, price, denomination, description }) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Imagen de la conserva">
            <div class="card-body">
                <h5 class="card-title">${cannedFood} - ${price}€</h5>
                <p class="card-text">${denomination} — ${description}</p>
            </div>
        </div>
    `;
}

async function fetchCannedFoodJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Error al cargar JSON');
        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function displayCannedFood() {
    const cannedFoodSection = document.getElementById('cannedFoodSection');
    const cannedFoodData = await fetchCannedFoodJson();

    if (cannedFoodData && cannedFoodData.cannedFood) {
        cannedFoodSection.innerHTML = cannedFoodData.cannedFood.map(createCannedFoodCard).join('');
    } else {
        cannedFoodSection.innerHTML = '<p>No se pudieron cargar los vinos.</p>';
    }
}

displayCannedFood();
