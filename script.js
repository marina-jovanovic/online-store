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

    const artikli = [
        new Artikal(1, "Monitor", 165, "High-performance monitor"),
        new Artikal(2, "TV", 650, "Latest model TV"),
        new Artikal(3, "Miš", 20, "Wireless mouse"),
    ];

    const tbody = document.querySelector("#artiklitbody");

    function prikaziArtikle() {
        tbody.innerHTML = "";
        artikli.forEach((artikal) => {
            const red = document.createElement("tr");
            red.innerHTML = `
            <td>${artikal.broj}</td>
            <td>${artikal.naziv}</td>
            <td>${artikal.cijena}</td>
        `;
            tbody.appendChild(red);
        })
    }

    prikaziArtikle();
});
