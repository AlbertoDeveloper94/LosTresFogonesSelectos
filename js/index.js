const carrousel = document.querySelector("#slidesOpinions");
const totalImages = document.querySelectorAll(".opinion");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
let currentIndex = 0;
let offset = 0;
let interval = setInterval(AutoSlide, 3000);

previousButton.addEventListener("click", function () {
  currentIndex--;
  controlSlide();
  ResetAutoSlide();
});
nextButton.addEventListener("click", function () {
  currentIndex++;
  controlSlide();
  ResetAutoSlide();
});

function controlSlide() {
  if (currentIndex < 0) {
    currentIndex = totalImages.length - 1;
    carrousel.style.transition = "none";
  } else if (currentIndex > totalImages.length - 1) {
    currentIndex = 0;
    carrousel.style.transition = "none";
  } else {
    carrousel.style.transition = "transform 1s";
  }
  offset = -currentIndex * 100;
  carrousel.style.transform = `translateX(${offset}%)`;
}

function AutoSlide() {
  currentIndex++;
  controlSlide();
}
function ResetAutoSlide() {
  clearInterval(interval);
  interval = setInterval(AutoSlide, 3000);
}

const requestURL = "json/index.json";

function createHighlightProductCard({ src, alt, title, price, button }) {
  return `
        <figure class="productNew">
              <div class="scaleProduct">
                <img
                  src=${src}
                  alt="${alt}"
                />
              </div>
              <figcaption class="productInfo">
                <h3>${title}</h3>
                <p>
                  <span>${price}€</span>
                </p>
                <a href="">${button}</a>
              </figcaption>
        </figure>
    `;
}

function createOffersProductCard({ src, alt, title, price, button }) {
   const priceReplace = price.replace(",", ".");
  const priceNormal = parseFloat(priceReplace);
  const discount = Number((priceNormal * 0.30));
  return `
        <figure class="productNew">
              <div class="discount">30%</div>
              <div class="scaleProduct">
                <img
                  src=${src}
                  alt="${alt}"
                />
              </div>
              <figcaption class="productInfo">
                <h3>${title}</h3>
                <p>
                  <span>${discount.toFixed(2).replace(".",",")}€</span>
                </p>
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
    const productCardsHighlight = productsData.highlightProducts
      .map(createHighlightProductCard)
      .join("");
    highlightContainer.innerHTML = productCardsHighlight;
    const productCardOffers = productsData.offerProducts
      .map(createOffersProductCard)
      .join("");
    offersContainer.innerHTML = productCardOffers;
  } else {
    highlightContainer.innerHTML = "<p>Contenido no encontrado</p>";
  }
}

displayProducts();
