export const getStockPerCategory = (products = []) => {
  const stockTotals = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + product.stock;
    return acc;
  }, {});

  return Object.entries(stockTotals).map(([category, stock]) => ({
    category,
    stock,
  }));
};
