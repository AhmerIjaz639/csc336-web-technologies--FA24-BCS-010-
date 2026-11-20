var searchBox = document.getElementById("search-input");
var headerSearch = document.getElementById("header-search");
var sortButton = document.getElementById("sort-btn");
var grid = document.querySelector(".product-grid");
var cards = grid ? Array.prototype.slice.call(document.querySelectorAll(".product-card")) : [];
var sortLowToHigh = true;

function getPrice(card) {
    var text = card.querySelector(".product-info strong").textContent;
    return parseFloat(text.replace("$", ""));
}

function updatePremiumBadges() {
    cards.forEach(function (card) {
        if (getPrice(card) > 1000 && !card.querySelector(".premium-badge")) {
            var badge = document.createElement("span");
            badge.textContent = "Premium";
            badge.className = "premium-badge";
            card.appendChild(badge);
        }
    });
}

function filterCards() {
    if (!searchBox || !grid) return;

    var searchText = searchBox.value.toLowerCase();
    var radio = document.querySelector('input[name="category"]:checked');
    var category = radio ? radio.id.replace("cat-", "") : "all";
    var shown = 0;

    cards.forEach(function (card) {
        var name = card.querySelector(".product-info h3").textContent.toLowerCase();
        var cardCategory = card.getAttribute("data-category");
        var categoryMatches = category === "all"
            ? true
            : category === "bags"
                ? cardCategory === "bags"
                : cardCategory === category;
        var searchMatches = name.indexOf(searchText) !== -1;
        var visible = categoryMatches && searchMatches;

        card.style.display = visible ? "" : "none";
        if (visible) shown++;
    });

    var message = document.getElementById("no-results");
    if (shown === 0) {
        if (!message) {
            message = document.createElement("p");
            message.id = "no-results";
            message.textContent = "No products found";
            message.className = "no-results";
            grid.parentElement.insertBefore(message, grid);
        }
    } else if (message) {
        message.remove();
    }
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("nike-cart")) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("nike-cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    var cartLink = document.getElementById("cart-link");
    var cart = getCart();
    var quantity = cart.reduce(function (total, item) { return total + item.quantity; }, 0);
    if (cartLink) cartLink.textContent = "Bag (" + quantity + ")";
}

function addToCart(button) {
    var quantitySelect = document.getElementById("quantity");
    var quantity = quantitySelect ? parseInt(quantitySelect.value, 10) : 1;
    var cart = getCart();
    var existing = cart.find(function (item) {
        return item.id === button.dataset.productId;
    });

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: button.dataset.productId,
            name: button.dataset.productName,
            quantity: quantity
        });
    }

    saveCart(cart);
    button.textContent = "Added";
    window.setTimeout(function () {
        button.textContent = "Add to Cart";
    }, 900);
}

if (searchBox) {
    searchBox.addEventListener("input", function () {
        if (headerSearch) headerSearch.value = searchBox.value;
        filterCards();
    });
}

if (headerSearch) {
    headerSearch.addEventListener("input", function () {
        if (searchBox) searchBox.value = headerSearch.value;
        filterCards();
    });
}

document.querySelectorAll('input[name="category"]').forEach(function (radio) {
    radio.addEventListener("change", filterCards);
});

if (sortButton) {
    sortButton.addEventListener("click", function () {
        cards.sort(function (a, b) {
            return sortLowToHigh ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
        });
        cards.forEach(function (card) { grid.appendChild(card); });
        sortLowToHigh = !sortLowToHigh;
        sortButton.textContent = sortLowToHigh ? "Sort by price ↑" : "Sort by price ↓";
    });
}

document.querySelectorAll(".add-to-cart").forEach(function (button) {
    button.addEventListener("click", function () {
        addToCart(button);
    });
});

updatePremiumBadges();
updateCartCount();

// Load product data from the Express API when the page has no server-rendered cards.
if (grid && cards.length === 0) {
    fetch("/api/products")
        .then(function (response) {
            if (!response.ok) throw new Error("Unable to load products");
            return response.json();
        })
        .then(function (products) {
            products.forEach(function (product) {
                var article = document.createElement("article");
                article.className = "product-card";
                article.setAttribute("data-category", product.category);
                article.innerHTML =
                    '<a href="/product/' + product.id + '">' +
                    '<img src="' + product.image + '" alt="' + product.alt + '">' +
                    '</a><div class="product-info"><div><h3>' + product.name +
                    '</h3><p>' + product.subtitle + '</p></div><strong>$' + product.price +
                    '</strong></div><button class="button button-dark add-to-cart" type="button" ' +
                    'data-product-id="' + product.id + '" data-product-name="' + product.name +
                    '">Add to Cart</button>';
                grid.appendChild(article);
            });
            cards = Array.prototype.slice.call(document.querySelectorAll(".product-card"));
            updatePremiumBadges();
        })
        .catch(function () {
            grid.innerHTML = "<p class=\"no-results\">Unable to load products</p>";
        });
}
