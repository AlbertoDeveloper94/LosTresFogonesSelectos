class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>



    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary backgroundHeader">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="#">
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

          />
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Menú -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">QUESOS</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">VINOS</a></li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONSERVAS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SOBRE NOSOTROS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACTO</a>
              </li>


    </header>
    `;

  }
}
customElements.define("header-los-tres-fogones-selectos", MyHeader);
