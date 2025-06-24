const PRODUCTS_KEY = 'products';

export const fetchProducts = async () => {
  const storedProducts = localStorage.getItem(PRODUCTS_KEY);
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(mockProducts));
  return mockProducts;
};

export const createProduct = (product) => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];
  const newProduct = { ...product, id: Date.now() };
  const updatedProducts = [...products, newProduct];
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
  return newProduct;
};

import { mockProducts } from '../data/mockData';