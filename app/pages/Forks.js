import React, { useEffect, useState } from "react";
import styles4 from "./../styles/Styles4.module.css";

const Forks = () => {
  // Estado para almacenar la información obtenida
  const [blockchainInfo, setBlockchainInfo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blockchaininfo/`);
        const data = await response.text(); // Suponiendo que la respuesta es texto
        setBlockchainInfo(data); // Actualizamos el estado con la información obtenida
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };
    fetchData();
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez, después del primer renderizado

  return (

    <div dangerouslySetInnerHTML={{ __html: blockchainInfo }} />
);


}
export default Forks;
