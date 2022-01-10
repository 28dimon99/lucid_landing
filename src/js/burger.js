
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');
    burger.addEventListener('click', showMenu)

    function showMenu() {
        menu.style.display = 'block';
        burger.style.display = 'none';
        close.style.display = 'block'
    }

    close.addEventListener('click', hideMenu);

    function hideMenu() {
        menu.style.display = 'none';
        burger.style.display = 'block';
        close.style.display = 'none'
    }


