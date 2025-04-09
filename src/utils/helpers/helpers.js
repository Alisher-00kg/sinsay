export const findProductById = (catalog, id) =>
  catalog
    .flatMap((section) => section.products)
    .find((product) => product.id === id);
