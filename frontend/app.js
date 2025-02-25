function searchCake() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cakes = document.querySelectorAll("#cakeList li");
    let found = false;

    cakes.forEach(cake => {
        let cakeName = cake.textContent.toLowerCase();
        if (cakeName.includes(input)) {
            cake.style.display = "block";
            found = true;
        } else {
            cake.style.display = "none";
        }
    });

    let noResults = document.getElementById("noResults");
    if (!found) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}
