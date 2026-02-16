import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../services/product.service";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState({ byId: {}, allIds: [] });
  const [loading, setLoading] = useState(false);

  /** Normalize products */
  const normalizeProducts = (items) => {
    const byId = {};
    const allIds = [];

    items.forEach((p) => {
      byId[p._id] = {
        id: p._id,
        name: p.name,
        price: p.price,
        image: p.images?.[0],
        description: p.description,
        category: p.category?.name,
        stock: p.stock,
        collection: p.collection,
      };

      allIds.push(p._id);
    });

    setProducts({ byId, allIds });
  };

  /** Load dummy products */
  const loadProducts = () => {
    setLoading(true);

    // Simulate API delay (optional)
    setTimeout(() => {
      normalizeProducts(dummyProducts);
      setLoading(false);
    }, 500);
  };

  /** Dummy search */
  const search = (params) => {
    const filtered = dummyProducts.filter((p) => {
      const matchQuery = params?.q
        ? p.name.toLowerCase().includes(params.q.toLowerCase())
        : true;

      const matchCategory = params?.category
        ? p.category.name === params.category
        : true;

      return matchQuery && matchCategory;
    });

    normalizeProducts(filtered);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        loadProducts,
        search,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
