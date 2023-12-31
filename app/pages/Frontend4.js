import { useEffect, useState } from "react";

const Frontend4 = () => {
  const [blockCount, setBlockCount] = useState(null);
    console.log("1111111111");
  useEffect(() => {
    // Llamada al Endpoint del Backend
    fetch("http://localhost:3001/blockcount")  // ajusta la URL según la configuración de tu servidor
      .then(response => response.json())
      .then(data => setBlockCount(data.blockcount))
      .catch(error => console.error("Error fetching blockcount:", error));
  }, []);
  console.log("22222222222");

  return (
    <div>
      <p>Último bloque minado: {blockCount}</p>
    </div>
  );
};

export default Frontend4;

