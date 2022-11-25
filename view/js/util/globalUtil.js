export function check_valid(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        if (data[keys[i]] == "") return false;
    }
    return true;
}

export function create_table(data, columns) {
    let table = document.createElement("table");
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns.length; j++) {
            let cell = document.createElement("td");
            cell.textContent = data[i][columns[j]];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}