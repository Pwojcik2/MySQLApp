document.addEventListener('DOMContentLoaded', function () {
    loadTable([]);
});

function loadTable(data) {
    const table = document.querySelector('table tbody')
    let tableData = ''

    if(data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}