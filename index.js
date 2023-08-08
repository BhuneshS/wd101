



const recieve_entrie = () => {
    let entries = localStorage.getItem("user-enteries");
    if (entries) {
        entries = JSON.parse(entries);
    }
    else {
        entries = [];
    }
    return entries;
}

let userEnterie = recieve_entrie();

const display_enteries = () => {
    const enteries = recieve_entrie();

    let table_enteries = enteries.map((entry) => {
        const n_cell = `<td class="px-4">${entry.name}</td>`;
        const e_cell = `<td class="px-4">${entry.email}</td>`;
        const p_cell = `<td class="px-4">${entry.password}</td>`;
        const d_obcell = `<td class="px-4">${entry.dob}</td>`;
        const t_accell = `<td class="px-4">${entry.tac}</td>`;

        const row = `<tr>${n_cell} ${e_cell} ${p_cell} ${d_obcell} ${t_accell}</tr>`;
        return row;
    }).join("");  
    const table = `<table class="table-fixed"><tr>
        <th class="px-3">Name</th>
        <th class="px-3">Email</th>
        <th class="px-3">Password</th>
        <th class="px-3">Dob</th>
        <th class="px-3">Accepted terms?</th>
    </tr>${table_enteries} </table>`;

    let detail = document.getElementById("user-enteries");
    console.table(table_enteries);
    detail.innerHTML = table;
}

const saveForm = (event) => {
    // event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const tac = document.getElementById("tac").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        tac
    };

    userEnterie.push(entry);
    localStorage.setItem("user-enteries", JSON.stringify(userEnterie));
}
display_enteries();


