require("dotenv").config({ path: "../../.env" });
const db = require("../models");
const Product = db.Product;
const Category = db.Category;
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const categoryController = {
  getCategoryName: (req, res) => {
    Category.findAll({
      where: {
        is_deleted: false,
      },
    })
      .then((categories) => {
        return res.status(200).send({
          ok: 1,
          data: categories,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },
  getCategory: (req, res) => {
    Category.findAll({
      where: {
        is_deleted: false,
      },
      include: [
        {
          model: Product,
          where: { is_deleted: false, status: 1 },
        },
      ],
    })
      .then((categories) => {
        return res.status(200).send({
          ok: 1,
          data: categories,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  getAllCategory: (req, res) => {
    Category.findAll({
      where: {
        is_deleted: false,
      },
      include: [
        {
          model: Product,
          where: { is_deleted: false },
          required: false,
        },
      ],
    })
      .then((categories) => {
        return res.status(200).send({
          ok: 1,
          data: categories,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  addCategory: (req, res, checkAuthorization) => {
    const { name } = req.body;
    if (!name) {
      return res.status(404).send({
        ok: 0,
        message: "請完成必填欄位資訊",
      });
    }
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      if (!user.is_admin) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      Category.create({
        name,
      })
        .then(() => {
          return res.status(200).send({
            ok: 1,
            message: "分類新增完成",
          });
        })
        .catch((error) => {
          return res.status(404).send({
            ok: 0,
            message: error,
          });
        });
    });
  },

  editCategory: (req, res, checkAuthorization) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(404).send({
        ok: 0,
        message: "請完成必填欄位資訊",
      });
    }
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      if (!user.is_admin) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      Category.findOne({
        where: {
          id,
        },
      }).then((category) => {
        if (!category) {
          return res.status(404).send({
            ok: 0,
            message: "查無此分類資訊",
          });
        }
        category
          .update({
            name,
          })
          .then(() => {
            return res.status(200).send({
              ok: 1,
              message: "分類編輯完成",
            });
          })
          .catch((productError) => {
            return res.status(404).send({
              ok: 0,
              message: productError,
            });
          });
      });
    });
  },

  deleteCategory: (req, res, checkAuthorization) => {
    const { id } = req.params;
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      if (!user.is_admin) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      Category.findOne({
        where: {
          id,
        },
      }).then((category) => {
        if (!category) {
          return res.status(404).send({
            ok: 0,
            message: "查無此分類資訊",
          });
        }
        category
          .update({
            is_deleted: true,
          })
          .then(() => {
            return res.status(200).send({
              ok: 1,
              message: "分類刪除完成",
            });
          })
          .catch((error) => {
            return res.status(404).send({
              ok: 0,
              message: error,
            });
          });
      });
    });
  },
};

module.exports = categoryController;
