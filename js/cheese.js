const requestURL = '../json/cheese.json';

function createCheeseCard({image, cheese, price, denomination, description }) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Imagen del vino">
            <div class="card-body">
                <h5 class="card-title">${cheese} - ${price}€</h5>
                <p class="card-text">${denomination} — ${description}</p>
            </div>
        </div>
    `;
}

async function fetchCheeseJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Error al cargar JSON');
        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function displayCheese() {
    const cheeseSection = document.getElementById('cheese');
    const cheeseData = await fetchCheeseJson();

    if (cheeseData && cheeseData.cheese) {
        cheeseSection.innerHTML = cheeseData.cheese.map(createCheeseCard).join('');
    } else {
        cheeseSection.innerHTML = '<p>No se pudieron cargar los quesos.</p>';
    }
}

displayCheese();
