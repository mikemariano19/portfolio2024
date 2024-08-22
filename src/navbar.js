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
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar.classList.add('hidden-nav');
                navbar.classList.remove('shown-nav');
                menu.classList.add('hidden-nav');
                menu.classList.remove('shown-nav');
                menu.classList.add('hidden');
            } else {
                navbar.classList.add('shown-nav');
                navbar.classList.remove('hidden-nav');
                menu.classList.add('shown-nav');
                menu.classList.remove('hidden-nav');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
   

    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Perform the form submission to Formspree
        fetch(event.target.action, {
            method: event.target.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                alert('Thank you for your message!');
                event.target.reset(); // Reset the form fields
            } else {
                alert('There was an error submitting your message. Please try again.');
            }
        }).catch((error) => {
            alert('There was an error submitting your message. Please try again.');
        });
    });