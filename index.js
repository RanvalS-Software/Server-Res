const express = require("express");
const db = require("./db/index.js");
const sign = require("./controllers/controller.js");
const login = require("./controllers/login.js");
const add = require('./controllers/add.js');
const menu = require("./controllers/menu.js");
const { addFoodType } = require("./controllers/foodTypes");
const {  listFoodTypes } = require("./controllers/foodList.js");
const addProductToMenu = require('./controllers/menuadvantage.js');
const {listFoods}=require('./controllers/foodsList.js');
const getAllMenus = require("./controllers/menuList.js");
const { deleteFood } = require("./controllers/deletefood.js");
const { deleteMenu } = require("./controllers/menudelete.js");


const app = express();

app.use(express.json());
db();
app.use(express.urlencoded({ extended: false }));

app.post('/register', async (req, res) => {
  try {
    console.log(req.body);
    await sign(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    await login(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/add', async (req, res) => {
  try {
    console.log(req.body);
    await add(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/menu/:type', async (req, res) => {
  try {
    const type = req.params.type;
    const foods = await menu(type);
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/addProduct', async (req, res) => {
 
  const { menuName, products, price, label } = req.body; // 'ürünler' yerine 'products' olarak güncellendi

  try {
    const addedProduct = await addProductToMenu( menuName, products, price, label);
    res.json(addedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Ürün eklenirken bir hata oluştu' });
  }
});




// Yemek türü ekleme endpoint'i
app.post("/foodTypes", addFoodType);

// Tüm yemek türlerini listeleme endpoint'i
app.get("/foodTypes", listFoodTypes);

app.get("/advantagemenulist", getAllMenus);

// Tüm yemek türlerini listeleme endpoint'i
app.get("/listFood", listFoods);

//yemekleri silmek için 
app.delete("/deleteFood/:id",deleteFood);

// Avantajlı menüyü silmek için rotayı tanımla
app.delete('/deleteMenu/:id', async (req, res) => {
  try {
    const result = await deleteMenu(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Menüyü silme işlemi sırasında bir hata oluştu." });
  }
});

app.listen(8000, () => {
  console.log('Dinleniyor');
});
