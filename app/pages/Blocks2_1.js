import React, { useEffect, useState } from "react";

export default function Blocks2({ blockHash }) {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    if (!blockHash) return; // Asegúrate de que blockHash no esté vacío

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getblock/${blockHash}`);
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();
  }, [blockHash]); // Dependencia de useEffect es ahora blockHash

  return (
    <div dangerouslySetInnerHTML={{ __html: blockData }} />
  );
}
