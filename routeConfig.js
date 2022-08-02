const roleAccessRouteConfig = {
  user: {
    GET: [
      "/me",
      "/user",
      "/products",
      "/product/",
      "/category",
      "/category/product",
      "/category/products",
      "/orders",
      "/order/",
    ],
    POST: ["/register", "/login", "/orders"],
    PUT: ["/user"],
  },
  guest: {
    GET: [
      "/products",
      "/product/",
      "/category",
      "/category/product",
      "/category/products",
    ],
    POST: ["/register", "/login"],
  },
};

module.exports = roleAccessRouteConfig;
