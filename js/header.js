class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary backgroundHeader">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="../index.html">
            <img
                src="../Images/logoLosTresFogonesSelectos.png"
                alt="logo"
                class="classlogo"

            />
            Los tres fogones selectos
            </a>

          <!-- Botón menú móvil -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú -->
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link" href="../pages/cheese.html">QUESOS</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="../pages/winePage.html">VINOS</a></li>
                <li class="nav-item">
                <a class="nav-link" href="../pages/cannedFood.html">CONSERVAS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="../pages/aboutUs.html">SOBRE NOSOTROS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="../pages/contacts.html">CONTACTO</a>
            </li>
            </ul>

        </div>
        </div>
    </nav>
    </header>
    `;
  }
}
customElements.define("header-los-tres-fogones-selectos", MyHeader);
