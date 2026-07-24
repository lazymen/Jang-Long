fetch("products.json")
    .then(response => response.json())
    .then(products => {

        const productGrid = document.querySelector(".product-grid");

        const categoryMenu = document.getElementById("category-menu");

        const categories = [

            "all",

            ...new Set(

                products.map(product => product.category)

            )

        ];

        categories.forEach(category => {

            categoryMenu.innerHTML += `

        <button class="category-button">

            ${category.toUpperCase()}

        </button>

    `;

        });

        products.forEach(product => {

            productGrid.innerHTML += `

                <a href="product.html?id=${product.id}" class="product-card">

                    <img src="images/products/${product.id}/main.jpg" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>₩ ${product.price.toLocaleString()}</p>

                </a>

            `;

        });

    })
    .catch(error => {

        console.error(error);

    });