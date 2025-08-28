import { useState } from "react";

export function useOptimistic(initialData) {
  const [data, setData] = useState(initialData);

  const addItem = (item) => {
    setData((prev) => [...prev, item]); // Update optimis
  };

  return [data, addItem];
}
