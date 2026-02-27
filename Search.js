// Optional JS for search filter 

const searchInput = document.getElementById('awardSearch');
const table = document.getElementById('awardTable').getElementsByTagName('tbody')[0];

searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    Array.from(table.getElementsByTagName('tr')).forEach(row => {
        const name = row.getElementsByTagName('td')[0].textContent.toLowerCase();
        row.style.display = name.includes(filter) ? '' : 'none';
    });
});