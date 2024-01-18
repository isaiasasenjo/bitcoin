import { getBlockHash } from "bitcoin-core/src/methods";
import React, { useEffect, useState } from "react";

export default function Blocks2() {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/getblock");
        const data = await response.text();
        setBlockData(data);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    fetchData();
    console.log(`blockData: ${blockData}`);
  }, []); // La dependencia está vacía, esto se ejecutará solo una vez al montar el componente

  return (
    <div>

      {/* Aquí puedes mostrar blockData en tu interfaz de usuario */}
      <div dangerouslySetInnerHTML={{ __html: blockData }} />
    </div>
  );
}