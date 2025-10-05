'use strict';

document.addEventListener("DOMContentLoaded", () => {
    class Artikal {
        constructor(broj, naziv, cijena, opis) {
            this.broj = broj;
            this.naziv = naziv;
            this.cijena = cijena;
            this.opis = opis;
        }
    }

    const artikli = JSON.parse(localStorage.getItem("artikli")) || [];


    const tbody = document.querySelector("#artiklitbody");
    const detaljDiv = document.querySelector(".detalji");
    const forma = document.querySelector("#dodajArtiklForm");

    function prikaziArtikle() {
        tbody.innerHTML = "";
        artikli.forEach((artikal) => {
            const red = document.createElement("tr");
            red.innerHTML = `
            <td>${artikal.broj}</td>
            <td>${artikal.naziv}</td>
            <td>${artikal.cijena}</td>
        `;
            red.addEventListener("click", () => {
                detaljDiv.innerHTML = `
                <p>Naziv: ${artikal.naziv}</p>
                <p>Cijena: ${artikal.cijena}</p>
                <p>Opis: ${artikal.opis}</p>
            `;
            });

            tbody.appendChild(red);
        })
    }

    prikaziArtikle();

    forma.addEventListener("submit", (e) => {
        e.preventDefault();

        const naziv = document.querySelector("#naziv").value.trim();
        const cijena = parseFloat(document.querySelector("#cijena").value);
        const opis = document.querySelector("#opis").value.trim();

        if (naziv && !isNaN(cijena) && opis) {
            const broj = artikli.length ? artikli[artikli.length - 1].broj + 1 : 1;
            const noviArtikal = new Artikal(broj, naziv, cijena, opis);

            artikli.push(noviArtikal);

            localStorage.setItem("artikli", JSON.stringify(artikli));

            prikaziArtikle();

            forma.reset();

        } else {
            alert("Molimo unesite ispravne podatke za artikl.");
        }
    });
});