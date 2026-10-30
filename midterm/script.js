var searchBox = document.getElementById("search-input");
var headerSearch = document.getElementById("header-search");
var sortButton = document.getElementById("sort-btn");
var grid = document.querySelector(".product-grid");
var cards = document.querySelectorAll(".product-card");
var sortLowToHigh = true;

function getPrice(card) {
    var text = card.querySelector(".product-info strong").textContent;
    return parseFloat(text.replace("$", ""));
}

for (var i = 0; i < cards.length; i++) {
    var price = getPrice(cards[i]);
    if (price > 1000) {
        var badge = document.createElement("span");
        badge.textContent = "Premium";
        badge.className = "premium-badge";
        cards[i].appendChild(badge);
    }
}

function filterCards() {
    var searchText = searchBox.value.toLowerCase();
    var radio = document.querySelector('input[name="category"]:checked');
    var category = radio.id.replace("cat-", "");

    var shown = 0;

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var name = card.querySelector(".product-info h3").textContent.toLowerCase();
        var cardCat = card.getAttribute("data-category");

        var catOK = true;
        if (category !== "all") {
            if (category === "bags") {
                catOK = (cardCat === "bag");
            } else {
                catOK = (cardCat === category);
            }
        }

        var searchOK = name.indexOf(searchText) !== -1;

        if (catOK && searchOK) {
            card.style.display = "";
            shown++;
        } else {
            card.style.display = "none";
        }
    }

    var msg = document.getElementById("no-results");
    if (shown === 0) {
        if (!msg) {
            msg = document.createElement("p");
            msg.id = "no-results";
            msg.textContent = "No products found";
            msg.className = "no-results";
            grid.parentElement.insertBefore(msg, grid);
        }
    } else {
        if (msg) {
            msg.remove();
        }
    }
}

searchBox.addEventListener("input", function () {
    if (headerSearch) {
        headerSearch.value = searchBox.value;
    }
    filterCards();
});

if (headerSearch) {
    headerSearch.addEventListener("input", function () {
        searchBox.value = headerSearch.value;
        filterCards();
    });
}

var radios = document.querySelectorAll('input[name="category"]');
for (var r = 0; r < radios.length; r++) {
    radios[r].addEventListener("change", filterCards);
}

sortButton.addEventListener("click", function () {
    var arr = [];
    for (var i = 0; i < cards.length; i++) {
        arr.push(cards[i]);
    }

    arr.sort(function (a, b) {
        if (sortLowToHigh) {
            return getPrice(a) - getPrice(b);
        } else {
            return getPrice(b) - getPrice(a);
        }
    });

    for (var j = 0; j < arr.length; j++) {
        grid.appendChild(arr[j]);
    }

    sortLowToHigh = !sortLowToHigh;
    sortButton.textContent = sortLowToHigh ? "Sort by price ↑" : "Sort by price ↓";
});