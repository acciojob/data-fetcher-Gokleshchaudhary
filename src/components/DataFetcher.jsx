import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setData(json); // updates state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setData({ error: "Failed to load data" });
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default DataFetcher;

