var $rows = [...document.querySelectorAll('tr')];
var $cells = $rows.map(row => [...row.cells]);
var allFounds = $cells.map(cells => cells.map(cell => cell.innerText));

allFounds.map(found => found.join(';').replace(/\n/gi, '')).join('\n');
