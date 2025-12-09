document.addEventListener('DOMContentLoaded', function () {

    const header = document.getElementById('mainHeader');
    const cartCount = document.getElementById('cartCount');
    const cartIcon = document.getElementById('cartIcon');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');


    let cartItems = 2;


    const searchData = [
        { id: 1, name: "Rioja Reserva 2018", category: "Vino Tinto", price: "32,50€" },
        { id: 2, name: "Chardonnay 2021", category: "Vino Blanco", price: "18,90€" },
        { id: 3, name: "Jamón Ibérico Bellota", category: "Fiambre", price: "45,00€" },
        { id: 4, name: "Salchichón de Vic", category: "Fiambre", price: "12,50€" },
        { id: 5, name: "Anchoas del Cantábrico", category: "Conserva", price: "8,90€" }
    ];

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        }
    });


    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        mainNav.classList.toggle('active');


        if (mainNav.classList.contains('active')) {
            closeAllDropdowns();
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        }
    });


    document.querySelectorAll('.navLink').forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {

                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    parent.classList.toggle('active');


                    document.querySelectorAll('.dropdown').forEach(d => {
                        if (d !== parent) {
                            d.classList.remove('active');
                        }
                    });
                } else {

                    mainNav.classList.remove('active');
                    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
                }
            }
        });
    });


    document.querySelectorAll('.dropdown > .navLink').forEach(dropdown => {
        if (!isTouchDevice) {

            dropdown.addEventListener('mouseenter', function () {
                if (window.innerWidth > 768) {
                    this.parentElement.classList.add('active');
                }
            });

            dropdown.parentElement.addEventListener('mouseleave', function () {
                if (window.innerWidth > 768) {
                    this.classList.remove('active');
                }
            });
        }


    });


    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();

        if (searchTerm.length === 0) {
            searchResults.style.display = 'none';
            return;
        }


        const filteredResults = searchData.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );


        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(item => `
                <div class="searchResultItem" data-id="${item.id}">
                    <h4>${item.name}</h4>
                    <p>${item.price} - ${item.category}</p>
                </div>
            `).join('');

            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="searchResultItem">No se encontraron productos</div>';
            searchResults.style.display = 'block';
        }


        document.querySelectorAll('.searchResultItem').forEach(item => {
            item.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                if (id) {
                    alert(`Redirigiendo a producto con ID: ${id}`);
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                }
            });
        });
    });


    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });


    if (isTouchDevice) {

        cartIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            const cartDropdown = document.getElementById('cartDropdown');
            const isActive = cartDropdown.style.opacity === '1';

            closeAllDropdowns();
            document.querySelectorAll('.iconContainer').forEach(icon => icon.classList.remove('active'));

            if (!isActive) {
                this.classList.add('active');
                cartDropdown.style.opacity = '1';
                cartDropdown.style.visibility = 'visible';
                cartDropdown.style.transform = 'translateY(0)';
            }
        });


        const userIcon = document.getElementById('userIcon');
        userIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            const userDropdown = document.getElementById('userDropdown');
            const isActive = userDropdown.style.opacity === '1';

            closeAllDropdowns();
            document.querySelectorAll('.iconContainer').forEach(icon => icon.classList.remove('active'));

            if (!isActive) {
                this.classList.add('active');
                userDropdown.style.opacity = '1';
                userDropdown.style.visibility = 'visible';
                userDropdown.style.transform = 'translateY(0)';
            }
        });
    } else {

        cartIcon.addEventListener('mouseenter', function () {
            if (window.innerWidth > 768) {
                closeAllDropdowns();
                document.getElementById('cartDropdown').style.opacity = '1';
                document.getElementById('cartDropdown').style.visibility = 'visible';
                document.getElementById('cartDropdown').style.transform = 'translateY(0)';
            }
        });

        cartIcon.addEventListener('mouseleave', function () {
            if (window.innerWidth > 768) {
                setTimeout(() => {
                    document.getElementById('cartDropdown').style.opacity = '0';
                    document.getElementById('cartDropdown').style.visibility = 'hidden';
                    document.getElementById('cartDropdown').style.transform = 'translateY(10px)';
                }, 300);
            }
        });
    }


    document.querySelectorAll('.removeItem').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.cartItem');

            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                item.remove();
                cartItems--;
                cartCount.textContent = cartItems;

                updateCartTotal();

                if (cartItems === 0) {
                    document.querySelector('.cartItems').innerHTML = '<p style="text-align:center; padding:20px; color:#666">Tu cesta está vacía</p>';
                    document.querySelector('.cartButtons').style.display = 'none';
                    document.querySelector('.cartTotal').style.display = 'none';
                }
            }, 300);
        });
    });


    function updateCartTotal() {
        const total = cartItems > 0 ? (77.50 - (2 - cartItems) * 32.50).toFixed(2) : '0,00';
        document.querySelector('.cartTotal span').textContent = `${total}€`;
    }


    function closeAllDropdowns() {

        mainNav.classList.remove('active');


        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));


        document.querySelectorAll('.iconContainer').forEach(icon => icon.classList.remove('active'));

        const cartDropdown = document.getElementById('cartDropdown');
        const userDropdown = document.getElementById('userDropdown');

        cartDropdown.style.opacity = '0';
        cartDropdown.style.visibility = 'hidden';
        cartDropdown.style.transform = 'translateY(10px)';

        userDropdown.style.opacity = '0';
        userDropdown.style.visibility = 'hidden';
        userDropdown.style.transform = 'translateY(10px)';


        searchResults.style.display = 'none';
    }


    document.addEventListener('click', function (e) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeAllDropdowns();
        }
    });


    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > 768) {

                mainNav.style.display = '';
                mainNav.classList.remove('active');
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
            } else {

                mainNav.style.display = 'none';
                mainNav.classList.remove('active');
            }


            const cartDropdown = document.getElementById('cartDropdown');
            const userDropdown = document.getElementById('userDropdown');

            cartDropdown.style.opacity = '';
            cartDropdown.style.visibility = '';
            cartDropdown.style.transform = '';

            userDropdown.style.opacity = '';
            userDropdown.style.visibility = '';
            userDropdown.style.transform = '';

            document.querySelectorAll('.iconContainer').forEach(icon => icon.classList.remove('active'));
        }, 250);
    });


    console.log('Header de Vinoteca Gourmet cargado correctamente');
    console.log('Dispositivo táctil:', isTouchDevice);
});