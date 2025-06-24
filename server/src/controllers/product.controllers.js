export const getProducts = (req, res) => {
  res.json(products);
};

export const addProducts = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const editProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
};

export const deleteProducts = (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter((p) => p.id !== id);
  res.status(204).send();
};
