const menu = document.getElementById('menu');
const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('click', function(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        console.log("clicked")
    } else {
        menu.classList.add('hidden')
        console.log("unclicked")
    }
})