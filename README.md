# Sweet Breath 甜之呼吸-Backend

## 簡介

Sweet Breath 甜之呼吸的後端原始碼，採用 Express 和 Sequelize 開發，生成 API 與前端串連。

## DEMO

[API 連結](https://sweetbreath-backend.herokuapp.com/)

## API 文件

[詳細 API 文件參考連結](https://hackmd.io/lkiEaF1ES6aAol_rvb-WcA?view)

## 建置

1. 執行 npm install 安裝此專案所需的第三方套件

2. 新增 config/config.json，設置使用的資料庫，格式為：

```
{
  "development": {
    "username": "test",
    "password": "test",
    "database": "test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "test",
    "password": "test",
    "database": "test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "test",
    "password": "test",
    "database": "test",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

3. 建立環境變數 .env，格式為：

```
JWT_SECRET=''
```

4. 輸入指令 npm run migrate 以執行 Sequelize migration，在 MySQL 資料庫中建立 database 及 table。

5. 輸入指令 npm run get-demo-data 以執行 Sequelize seeders 以在資料庫中建立初始 demo 資料。

## 開發

```
npm run server
```

## 部屬

```
npm run start
```

## 專案架構

```
|   index.js                 // App 伺服器入口點
|   package.json
|   package-lock.json
|   README.md
|
+---config
|     config.json            // Sequelize 設定檔
|
+---controllers              // 處理 API 邏輯
|     user.js
|     product.js
|     category.js
|     feature.js
|     order.js
|
+---models                   // 透過 Sequelize 和資料庫溝通
|     index.js
|     user.js
|     product.js
|     category.js
|     feature.js
|     orderitems.js
|     order.js
|
+---node_modules
|
+---migrations                // Sequelize migrations
|
\---seeders                   // Sequelize seeders

```

## 使用的第三方 library

### bcrypt

使用此套件將密碼加密後再存入資料庫

### dotenv

使用此套件設置環境變數

### cors

使用 cors 套件解決跨來源資源共用

### jsonwebtoken

使用 JWT 來實作登入機制驗證

### mysql2

使用 mysql2 連線資料庫

### sequelize

使用 ORM 工具 Sequelize 來操作資料庫

### sequelize-cli

快速生成 migrate 和 models 檔案

### concurrently

使前後端伺服器同時運行

## 資料庫結構

![資料庫結構](https://imgur.com/I5PbVIw.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)
