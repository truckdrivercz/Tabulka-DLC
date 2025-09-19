document.addEventListener("DOMContentLoaded", () => {
    fetch("./res/data/data.json")
        .then(response => response.json())
        .then(data => {
            const tabulka = document.getElementById("tabulka");

            let header = `<tr class="nadpisy"><th>Jméno</th>`;
            data.dlc.forEach(dlc => {
                header += `<th class="nadpisy">${dlc}</th>`;
            });
            header += "</tr>";
            tabulka.innerHTML += header;

            data.players.forEach(player => {
                let row = `<tr class="nick"><th>${player.name}</th>`;
                player.dlc.forEach(stav => {
                    row += `<td class="stav">${stav}</td>`;
                });
                row += "</tr>";
                tabulka.innerHTML += row;
            });

            let policka = document.querySelectorAll(".stav");
            policka.forEach(pole => {
                let obsah = pole.innerText.trim();
                if (obsah === "Ano") {
                    pole.style.backgroundColor = "lightgreen";
                }
                if (obsah === "Ne") {
                    pole.style.backgroundColor = "lightcoral";
                }
            });
        });
});