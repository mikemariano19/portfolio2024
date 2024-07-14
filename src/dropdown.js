

    const menu = document.getElementById('menu');
    const dropdown = document.getElementById('dropdown');
    
    dropdown.addEventListener('click', () => {
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    })
    
    menu.addEventListener('click', () => {
        menu.classList.add('hidden')
    })