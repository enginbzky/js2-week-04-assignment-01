// This function returns products with normal quality.

const getProductsOfNormalQuality = (pProductList) =>
  pProductList.filter((element) => element.quality === "Normal");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//This function returns products whose image extension ends in png.

const getProductImageWithPngExtension = (pProductList) =>
  pProductList.filter((element) => element.productImage.includes(".png"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//This function returns the calorie of the most expensive product.

const getCalorieOfTheMostExpensiveProduct = (pProductList) =>
  pProductList.reduce((previousValue, currentValue) =>
    previousValue.price > currentValue.price ? previousValue : currentValue
  ).totalCalories;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This function sorts the products according to their expiration date from smallest to largest.

const sortByExpirationDate = (pProductList) =>
  pProductList.sort(
    (preProduct, curProduct) => preProduct.expireDate - curProduct.expireDate
  );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};

import { productList } from "./data.js";

console.log(sortByExpirationDate(productList));
