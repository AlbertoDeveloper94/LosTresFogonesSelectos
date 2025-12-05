class MyFooter extends HTMLElement {
connectedCallback() {
    this.innerHTML = `


    <footer>
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col">
                    <p><b>Dirección</b></p>
                    <p>Calle Real, nº12</p>
                    <p>08003 - Barcelona</p>
                    <img src="/images/icons8-incoming-call-24.png" alt=""><p>(+34) 923 526 366</p>
                </div>
                <div class="col col-logo">
                    <img class="logofooter" src="../images/logoLosTresFogonesSelectos.png" alt="Logo Los Tres Fogones Selectos">
                    <p class="Copyright">Copyright © 2025. | Todos los derechos reservados. | www.LosTresFogonesSelectos.es</p>
                </div>
                <div class="col">
                    <a href="/pdf/condicionesGeneralesVenta.pdf" target="_blank"><p>Condiciones generales de venta</p></a>
                    <a href="/pdf/politicaCookies.pdf" target="_blank"><p>Política de cookies</p></a>
                    <a href="/pdf/politicaPrivacidadDatos.pdf" target="_blank"><p>Política de privacidad</p></a>
                    <div class="icons">
                        <a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img src="/images/icons8-facebook-nuevo-16.png" alt="Facebook"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="/images/icons8-instagram-16.png" alt="Instagram"></a>
                        <a href="https://www.tiktok.com/login?lang=es-419&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank"><img src="/images/icons8-tik-tok-16.png" alt="Tiktok"></a>
                        <a href="https://x.com/?lang=es"><img src="/images/icons8-x-16.png" alt="X" target="_blank"></a>
                    </div>
                </div>
            </div>
    </footer>
    `;
    }
}
customElements.define("footer-los-tres-fogones-selectos", MyFooter);