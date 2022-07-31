require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");
const productController = require("./controllers/product");
const categoryController = require("./controllers/category");
const featureController = require("./controllers/feature");
const orderController = require("./controllers/order");

const corsOption = {
  origin: ["http://localhost:8080"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));

function checkAuthorization(req, res) {
  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(404).send({
      ok: 0,
      message: "Authorized Token Missing!",
    });
  }
  return;
}

// user
app.post("/register", userControlloer.register); // 註冊
app.post("/login", userControlloer.login); // 登入
app.get("/me", userControlloer.getMe, checkAuthorization); // 驗證
app.get("/user", userControlloer.getUser, checkAuthorization); // 會員撈取個人資料
app.put("/user", userControlloer.editUser, checkAuthorization); // 會員編輯個人資料
app.get("/users", userControlloer.admin, checkAuthorization); // 管理員撈取會員資料
app.put("/users/:id", userControlloer.adminEditUsers, checkAuthorization); // 管理員編輯會員權限

//product
app.get("/products", productController.getProducts); // 撈取產品
app.get("/product/:id", productController.getProduct); // 撈取單一產品
app.get("/all_products", productController.getAllProducts, checkAuthorization); // 管理員撈取產品
app.post("/product", productController.addProduct, checkAuthorization); // 管理員新增產品
app.put("/product/:id", productController.editProduct, checkAuthorization); // 管理員編輯產品
app.delete("/product/:id", productController.deleteProduct, checkAuthorization); // 管理員刪除產品

// category
app.get("/category", categoryController.getCategoryName); // 撈取分類
app.get("/category/product", categoryController.getCategory); // 以分類撈取產品
app.get("/category/products", categoryController.getAllCategory); // 以所有分類撈取所有產品
app.post("/category", categoryController.addCategory, checkAuthorization); // 管理員新增分類
app.put("/category/:id", categoryController.editCategory, checkAuthorization); // 管理員編輯分類
app.delete(
  "/category/:id",
  categoryController.deleteCategory,
  checkAuthorization
); // 管理員刪除產品

// Feature
app.post("/feature/:id", featureController.addFeature, checkAuthorization); // 管理員新增規格
app.put("/feature/:id", featureController.editFeature, checkAuthorization); // 管理員編輯規格
app.delete("/feature/:id", featureController.deleteFeature, checkAuthorization); // 管理員刪除產品

//Order
app.post("/orders", orderController.createOrder, checkAuthorization); //生成訂單
app.get("/orders", orderController.getOrderList, checkAuthorization); //取得訂單清單
app.get("/order/:user_id", orderController.getUserOrder, checkAuthorization); //取得特定買家訂單
app.get("/order_item/:order_number", orderController.getOrderItem); //取得特定訂單品項
app.put(
  "/order/:order_number",
  orderController.editOrderStatus,
  checkAuthorization
); ////編輯訂單狀態

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
