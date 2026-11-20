const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  {
    id: "air-max-90",
    name: "Air Max 90",
    subtitle: "Men's Shoes",
    category: "shoes",
    price: 1200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    alt: "Red Nike Air Max running shoe"
  },
  {
    id: "air-force-1",
    name: "Air Force 1 '07",
    subtitle: "Men's Shoes",
    category: "shoes",
    price: 115,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=80",
    alt: "White and black Nike sneaker"
  },
  {
    id: "bridgeway-run",
    name: "Bridgeway Run",
    subtitle: "Running Shoes",
    category: "shoes",
    price: 105,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80",
    alt: "Black Nike sports shoe"
  },
  {
    id: "court-vision-low",
    name: "Court Vision Low",
    subtitle: "Women's Shoes",
    category: "shoes",
    price: 90,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    alt: "White Nike sneaker with colorful details"
  },
  {
    id: "bridgeway-hoodie",
    name: "Bridgeway Hoodie",
    subtitle: "Women's Clothing",
    category: "hoddies",
    price: 75,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    alt: "Athlete wearing black sportswear"
  },
  {
    id: "everyday-t-shirt",
    name: "Everyday T-Shirt",
    subtitle: "Men's Clothing",
    category: "clothes",
    price: 35,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",
    alt: "Folded black sports t-shirt"
  },
  {
    id: "elemental-backpack",
    name: "Elemental Backpack",
    subtitle: "Training Bag",
    category: "bags",
    price: 55,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    alt: "Black athletic backpack"
  },
  {
    id: "one-luxe-top",
    name: "One Luxe Top",
    subtitle: "Women's Clothing",
    category: "clothes",
    price: 60,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    alt: "Athlete wearing a light sports top"
  }
];

app.set("view engine", "ejs");
app.use(express.static( "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( "public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Nike Store | Products",
    products,
    activePage: "home"
  });
});

app.get("/product/:id", (req, res) => {
  const product = products.find((item) => item.id === req.params.id);
  if (!product) {
    return res.status(404).render("404", {
      title: "Product Not Found",
      activePage: ""
    });
  }

  res.render("product", {
    title: `${product.name} | Nike Store`,
    product,
    activePage: ""
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found",
    activePage: ""
  });
});

app.listen(PORT, () => {
  console.log(`Nike Express app listening at http://localhost:${PORT}`);
});
