const insert = document.getElementById("insert")

window.addEventListener("keydown", function (e) {
    insert.innerHTML = `
    <div class = "color">
    <table>
        <tr>
            <th>Key Pressed</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
})