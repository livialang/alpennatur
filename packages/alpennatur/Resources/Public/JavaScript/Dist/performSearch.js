document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById('searchBox');
    const searchableItems = document.querySelectorAll('.searchableItem');

    searchBox.addEventListener('keyup', function(e) {
        const searchText = e.target.value.toLowerCase();
        searchableItems.forEach(function(item) {
            item.style.display = item.textContent.toLowerCase().includes(searchText) ? '' : 'none';
        });
    });
});

