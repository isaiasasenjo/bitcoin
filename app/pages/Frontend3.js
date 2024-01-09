import { useEffect, useState } from "react";

const Frontend3 = () => {
  const [blockCount, setBlockCount] = useState(null);
  console.log("FRONTEND 11111111");
  useEffect(() => {
    // Llamada al Endpoint del Backend
    fetch("http://localhost:3001/blockcount")  // ajusta la URL según la configuración de tu servidor
      .then(response => response.json())
      .then(data => setBlockCount(data.blockcount))
      .catch(error => console.error("Error fetching blockcount:", error));
  }, []);
  console.log("FRONTEND 22222222");
  console.log(blockCount);
  return (
    <div>
      <p>Último bloque minado: {blockCount}</p>
    </div>
  );
};

export default Frontend3;
