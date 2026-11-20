# Assignment 3 — Interactive E-commerce Website

This folder contains my Assignment 3 submission for CSC336 Web Technologies.

## Reference Website

Same reference site as Assignment 2.

## Task
Add JavaScript functionality including cart management, form validation, and dynamic product loading using Fetch API.

## Express Structure

- `server.js` - Express server, routes, product data, and `/api/products` endpoint
- `views/` - EJS templates
- `views/partials/` - shared head, header, footer, and product card templates
- `public/css/` - shared stylesheet
- `public/js/` - filtering, sorting, Fetch API, and cart JavaScript

## Routes

- `/` - Product listing page
- `/product/:id` - Product detail page
- `/api/products` - JSON product list

## Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.
