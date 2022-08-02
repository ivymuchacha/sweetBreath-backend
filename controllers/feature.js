const db = require("../models");
const Feature = db.Feature;

const featureController = {
  addFeature: (req, res) => {
    const { id } = req.params; //Product_id
    const { name, price, promo_price, stock } = req.body;
    if (!name || !stock || !price) {
      return res.status(404).send({
        ok: 0,
        message: "請完成必填欄位資訊",
      });
    }

    Feature.create({
      ProductId: id,
      name,
      price,
      promo_price,
      stock,
    })
      .then(() => {
        return res.status(200).send({
          ok: 1,
          message: "規格新增完成",
        });
      })
      .catch((error) => {
        return res.status(404).send({
          ok: 0,
          message: error,
        });
      });
  },

  editFeature: (req, res) => {
    const { id } = req.params; // Feature_id
    const { name, stock, price, promo_price } = req.body;
    if (!name || !stock || !price) {
      return res.status(404).send({
        ok: 0,
        message: "請完成必填欄位資訊",
      });
    }

    Feature.findOne({
      where: {
        id,
      },
    }).then((feature) => {
      if (!feature) {
        return res.status(404).send({
          ok: 0,
          message: "查無此分類資訊",
        });
      }
      feature
        .update({
          name,
          stock,
          price,
          promo_price,
        })
        .then(() => {
          return res.status(200).send({
            ok: 1,
            message: "規格編輯完成",
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

  deleteFeature: (req, res) => {
    const { id } = req.params; //Feature_id

    Feature.findOne({
      where: {
        id,
      },
    }).then((feature) => {
      if (!feature) {
        return res.status(404).send({
          ok: 0,
          message: "查無此規格資訊",
        });
      }
      feature
        .update({
          is_deleted: true,
        })
        .then(() => {
          return res.status(200).send({
            ok: 1,
            message: "規格刪除完成",
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
};

module.exports = featureController;
