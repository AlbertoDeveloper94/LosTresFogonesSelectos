class header extends HTMLElement {
connectedCallback() {
    this.innerHTML = `


    <header>
        <header class="mainHeader" id="mainHeader">
    
        <div class="headerContent">
           
            <div class="logoContainer">
                <div class="logo">
                    <img src="/Images/logoLosTresFogonesSelectos.png" alt="logoLosTresFogonesSelectos" class="logoImage">
                    <div class="logoText">
                        <h1>Los Tres Fogones Selectos</h1>
                        <p>Vinos · Fiambres · Conservas</p>
                    </div>
                </div>
            </div>

         
            <nav class="mainNav" id="mainNav">
                <ul class="navList">
                    <li><a href="#" class="navLink active">Inicio</a></li>
                    <li class="dropdown">
                        <a href="#" class="navLink">Vinos <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdownMenu">
                            <li><a href="#">Tintos</a></li>
                            <li><a href="#">Blancos</a></li>
                            <li><a href="#">Rosados</a></li>
                            <li><a href="#">Espumosos</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="navLink">Fiambres</a></li>
                    <li><a href="#" class="navLink">Conservas</a></li>
                    <li><a href="#" class="navLink">Cestas de Regalo</a></li>
                     <li><a href="#" class="navLink">Sobre Nosotros</a></li>
                    <li><a href="#" class="navLink">Contacto</a></li>
                </ul>
            </nav>

          
            <div class="headerActions">
                <div class="searchBar">
                    <i class="fas fa-search"></i>
                    <input type="text" id="searchInput" placeholder="Buscar productos...">
                    <div class="searchResults" id="searchResults"></div>
                </div>
                
                <div class="headerIcons">
                    <div class="iconContainer" id="userIcon">
                        <i class="fas fa-user"></i>
                        <div class="userDropdown" id="userDropdown">
                            <a href="#"><i class="fas fa-heart"></i> Favoritos</a>
                            <a href="#"><i class="fas fa-history"></i> Historial</a>
                            <a href="#"><i class="fas fa-cog"></i> Configuración</a>
                        </div>
                    </div>
                    <div class="iconContainer" id="cartIcon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cartCount" id="cartCount">2</span>
                        <div class="cartDropdown" id="cartDropdown">
                            <h3>Tu Cesta</h3>
                            <div class="cartItems">
                                <div class="cartItem">
                                    <div class="itemInfo">
                                        <h4>Rioja Reserva 2018</h4>
                                        <p>1 x 32,50€</p>
                                    </div>
                                    <button class="removeItem"><i class="fas fa-times"></i></button>
                                </div>
                                <div class="cartItem">
                                    <div class="itemInfo">
                                        <h4>Jamón Ibérico</h4>
                                        <p>1 x 45,00€</p>
                                    </div>
                                    <button class="removeItem"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="cartTotal">
                                <p>Total: <span>77,50€</span></p>
                            </div>
                            <div class="cartButtons">
                                <a href="#" class="btnViewCart">Ver Cesta</a>
                                <a href="#" class="btnCheckout">Pagar</a>
                            </div>
                        </div>
                    </div>
                    <div class="iconContainer" id="menuToggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;
    }
}
customElements.define("header-los-tres-fogones-selectos", header);