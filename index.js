require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");
const productController = require("./controllers/product");
const categoryController = require("./controllers/category");
const featureController = require("./controllers/feature");
const orderController = require("./controllers/order");
const roleAccessRouteConfig = require("./routeConfig");
const SECRET = process.env.JWT_SECRET;

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

function getRoleByToken(authorization) {
  let role = "guest";
  if (!authorization || !authorization.startsWith("Bearer ")) return role;
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return;
    if (user.is_admin) return (role = "admin");
    return (role = "user");
  });
  return role;
}

app.all("/*", (req, res, next) => {
  const { path, method } = req;
  const authorization = req.header("Authorization");
  const role = getRoleByToken(authorization);
  if (role === "admin") return next();

  const roleAccessRoute = roleAccessRouteConfig[role][method];
  const isValid =
    roleAccessRoute &&
    roleAccessRoute.findIndex((router) => path.startsWith(router)) !== -1;
  if (!isValid)
    return res.status(400).send({
      ok: 0,
      message: "Authorized Token Missing!",
    });
  return next();
});

/**
 * user 使用者
 */
app.post("/register", userControlloer.register); // 註冊
app.post("/login", userControlloer.login); // 登入
app.get("/me", userControlloer.getMe); // 驗證
app.get("/user", userControlloer.getUser); // 會員撈取個人資料
app.put("/user", userControlloer.editUser); // 會員編輯個人資料
app.get("/users", userControlloer.admin); // 管理員撈取會員資料
app.put("/users/:id", userControlloer.adminEditUsers); // 管理員編輯會員權限

/**
 * product 產品
 */
app.get("/products", productController.getProducts); // 撈取產品
app.get("/product/:id", productController.getProduct); // 撈取單一產品
app.get("/all_products", productController.getAllProducts); // 管理員撈取產品
app.post("/product", productController.addProduct); // 管理員新增產品
app.put("/product/:id", productController.editProduct); // 管理員編輯產品
app.delete("/product/:id", productController.deleteProduct); // 管理員刪除產品

/**
 * category 分類
 */
app.get("/category", categoryController.getCategoryName); // 撈取分類
app.get("/category/product", categoryController.getCategory); // 以分類撈取產品
app.get("/category/products", categoryController.getAllCategory); // 以所有分類撈取所有產品
app.post("/category", categoryController.addCategory); // 管理員新增分類
app.put("/category/:id", categoryController.editCategory); // 管理員編輯分類
app.delete("/category/:id", categoryController.deleteCategory); // 管理員刪除產品

/**
 * feature 規格
 */
app.post("/feature/:id", featureController.addFeature); // 管理員新增規格
app.put("/feature/:id", featureController.editFeature); // 管理員編輯規格
app.delete("/feature/:id", featureController.deleteFeature); // 管理員刪除產品

/**
 * order 訂單
 */
app.post("/orders", orderController.createOrder); //生成訂單
app.get("/orders", orderController.getOrderList); //取得訂單清單
app.get("/order/:user_id", orderController.getUserOrder); //取得特定買家訂單
app.get("/order_item/:order_number", orderController.getOrderItem); //取得特定訂單品項
app.put("/order/:order_number", orderController.editOrderStatus); ////編輯訂單狀態

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
