// Sample Recipe Data
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://images.pexels.com/photos/3023738/pexels-photo-3023738.jpeg?auto=compress&cs=tinysrgb&w=600",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Steak",
        "imageSrc": "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://images.pexels.com/photos/2580464/pexels-photo-2580464.jpeg?auto=compress&cs=tinysrgb&w=600",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4,
    },
    
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690755.jpg",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },

    {
        "name": "Cheese Pizza",
        "imageSrc": "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },

    {
        "name": "Grilled Salmon",
        "imageSrc": "https://img.freepik.com/free-photo/grilled-salmon-fillet-with-asparagus-broccoli-generated-by-ai_188544-18288.jpg",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Burger",
        "imageSrc": "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },

    {
        "name": "BBQ Ribs",
        "imageSrc": "https://www.shutterstock.com/image-photo/spicy-hot-grilled-spare-ribs-600nw-611174102.jpg",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },

    {
        "name": "Caesar Salad",
        "imageSrc": "https://www.shutterstock.com/image-photo/caesar-salad-classic-romaine-lettuce-600nw-2463338943.jpg",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },

    {
        "name": "Vegan Salad",
        "imageSrc": "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },

    {
        "name": "Chocolate Cake",
        "imageSrc": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// DOM elements
const recipeContainer = document.getElementById('recipeContainer');
const searchBar = document.getElementById('searchBar');
const showAllBtn = document.getElementById('showAll');
const showVegBtn = document.getElementById('showVeg');
const showNonVegBtn = document.getElementById('showNonVeg');
const ratingFilters = document.querySelectorAll('input[name="rating"]');

// Function to display recipes
function displayRecipes(recipesToDisplay) {
    recipeContainer.innerHTML = '';
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Type: ${recipe.type}</p>
            <p>Time: ${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

// Initial load
displayRecipes(recipes);

// Search functionality
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchText)
    );
    displayRecipes(filteredRecipes);
});

// Filter by type
showAllBtn.addEventListener('click', () => displayRecipes(recipes));

showVegBtn.addEventListener('click', () => {
    const vegRecipes = recipes.filter(recipe => recipe.type === 'veg');
    displayRecipes(vegRecipes);
});

showNonVegBtn.addEventListener('click', () => {
    const nonVegRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
    displayRecipes(nonVegRecipes);
});

// Filter by rating
ratingFilters.forEach(filter => {
    filter.addEventListener('change', () => {
        let filteredRecipes;
        if (filter.value === 'above4.5') {
            filteredRecipes = recipes.filter(recipe => recipe.rating > 4.5);
        } else if (filter.value === 'below4.0') {
            filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
        }
        displayRecipes(filteredRecipes);
    });
});
