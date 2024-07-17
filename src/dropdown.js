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

    let lastScrollTop = 0;
            const navbar = document.getElementById('navbar');

            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    navbar.classList.add('hidden-nav');
                    navbar.classList.remove('shown-nav');
                } else {
                    navbar.classList.add('shown-nav');
                    navbar.classList.remove('hidden-nav');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            });