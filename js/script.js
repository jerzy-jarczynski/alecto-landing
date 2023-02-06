document.getElementById('nav-icon').addEventListener('click', function() {
    let menuDropdown = document.getElementById('menu');
    menuDropdown.classList.toggle('open');

    this.classList.toggle('open');
});

document.getElementById('search-button').addEventListener('click', function() {
    // this.classList.toggle('open');

    let searchBar = document.getElementById('site-search');
    // searchBar.classList.toggle('open');

    if (!this.classList.contains('open')) {
        this.classList.add('open');
        searchBar.classList.remove('closed');
        searchBar.classList.add('open');
    } else {
        this.classList.remove('open');
        searchBar.classList.remove('open');
        searchBar.classList.add('closed');
    }

});