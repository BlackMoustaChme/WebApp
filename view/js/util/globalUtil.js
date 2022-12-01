export function check_valid(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        if (data[keys[i]] == "") return false;
    }
    return true;
}

export function create_table(data, columns) {
    // console.log(columns);
    let table = document.createElement("table");
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns.length; j++) {
            // console.log(columns[j]);
            let cell = document.createElement("td");
            if (columns[j] == "id") {
                cell.hidden = true;
            }
            cell.className = columns[j];
            cell.textContent = data[i][columns[j]];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}