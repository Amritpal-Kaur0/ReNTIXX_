
const { Catering} = require('../models');

const cateringData = [
  {
    dish_name: "Chicken Curry",
    dish_description: "A flavorful and aromatic chicken curry with a perfect blend of spices.",
    menu: "Main Course",
    price: 100,
    trending_id: 1,
    filename:"chicken-curry.png"

  },
  {
    dish_name: "Vegetable Stir-Fry",
    dish_description: "A healthy and colorful stir-fry with a variety of fresh vegetables.",
    menu: "Vegetarian",
    price: 80,
    trending_id: 2,
    filename:"vegetable-stir-fry.png"
  },
  {
    dish_name: "Beef Stroganoff",
    dish_description: "Tender beef cooked in a creamy mushroom sauce, served with pasta.",
    menu: "Main Course",
    price: 120,
    trending_id: 3,
    filename:"beef-stroganoff.png"

  },
  {
    dish_name: "Caprese Salad",
    dish_description: "A refreshing salad with fresh tomatoes, mozzarella, and basil, drizzled with balsamic glaze.",
    menu: "Appetizer",
    price: 60,
    trending_id: 4,
    filename:"caprese-salad.png"
  },
  {
    dish_name: "Chocolate Mousse",
    dish_description: "A decadent and silky smooth chocolate mousse, perfect for chocolate lovers.",
    menu: "Dessert",
    price: 70,
    trending_id: 5,
    filename:"chocolate-mousse.png"
  },
  {
    dish_name: "Mediterranean Pasta",
    dish_description: "Penne pasta tossed with sun-dried tomatoes, olives, feta cheese, and herbs.",
    menu: "Main Course",
    price: 90,
    trending_id: 6,
    filename:"mediterranean-pasta.png"
  },
  {
    dish_name: "Spinach and Feta Stuffed Mushrooms",
    dish_description: "Mushroom caps filled with a savory mixture of spinach, feta cheese, and breadcrumbs.",
    menu: "Appetizer",
    price: 75,
    trending_id: 7,
    filename:"spinach-feta-stuffed-mushrooms.png"
  },
  {
    dish_name: "Lemon Garlic Shrimp",
    dish_description: "Juicy shrimp sautéed with garlic, lemon, and herbs, served with steamed rice.",
    menu: "Seafood",
    price: 150,
    trending_id: 8,
    filename:"lemon-garlic-shrimp.png"
  },
  {
    dish_name: "Roasted Vegetable Tart",
    dish_description: "A savory tart filled with roasted vegetables, goat cheese, and fresh herbs.",
    menu: "Vegetarian",
    price: 100,
    trending_id: 9,
    filename:"roasted-vegetable-tart.png"
  },
  {
    dish_name: "Tiramisu",
    dish_description: "A classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone.",
    menu: "Dessert",
    price: 80,
    trending_id: 10,
    filename:"tiramisu.png"
  }
]


const seedCatering = () => Catering.bulkCreate(cateringData);

module.exports = seedCatering;