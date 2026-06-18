const processSalesCoffee = async () => {

    const xmlText = await getSalesCoffee();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const rows = xmlDoc.getElementsByTagName("row");

    const tbody = document.querySelector("#example tbody");

    tbody.innerHTML = "";

    [...rows].forEach(row => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="border px-4 py-2">${row.getElementsByTagName("coffee_name")[0].textContent}</td>
            <td class="border px-4 py-2">${row.getElementsByTagName("cash_type")[0].textContent}</td>
            <td class="border px-4 py-2">${row.getElementsByTagName("money")[0].textContent}</td>
            <td class="border px-4 py-2">${row.getElementsByTagName("hour_of_day")[0].textContent}</td>
            <td class="border px-4 py-2">${row.getElementsByTagName("Date")[0].textContent}</td>
            <td class="border px-4 py-2">${row.getElementsByTagName("Time")[0].textContent}</td>
        `;

        tbody.appendChild(tr);
    });

    $('#example').DataTable();
};

window.addEventListener("load", processSalesCoffee);