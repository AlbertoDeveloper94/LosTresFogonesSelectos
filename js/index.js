const requestURL = "json/index.json";

function createHighlightProductCard({ src, alt, title, price, button }) {
  return `
        <figure class="productNew" data-type="vinos">
              <div class="scaleProduct">
                <img
                  src=${src}
                  alt="${alt}"
                />
              </div>
              <figcaption class="productInfo">
                <h3>${title}</h3>
                <p>${price}</p>
                <a href="">${button}</a>
              </figcaption>
        </figure>
    `;
}


async function fetchHousesJson() {
  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error(`Error de la solicitud: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el archivo JSON:", error);
    return null;
  }
}

async function displayProducts() {
  const highlightContainer = document.getElementById("highlightContainer");
  const offersContainer = document.getElementById("offersContainer");
  const productsData = await fetchHousesJson();
  if (productsData) {
    const productCardsHighlight = productsData.highlightProducts.map(createHighlightProductCard).join("");
   highlightContainer.innerHTML = productCardsHighlight;
   const productCardOffers = productsData.offerProducts.map(createHighlightProductCard).join("");
   offersContainer.innerHTML = productCardOffers;
   
  } 
  else{
    highlightContainer.innerHTML="<p>Contenido no encontrado</p>"
  }
}

displayProducts();
