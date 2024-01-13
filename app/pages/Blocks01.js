import React, { useEffect, useState } from "react";

export default function Blocks01() {
  const [blockCount, setBlockCount] = useState(null);
  const [blockHash, setBlockHash] = useState(null);
  const [lastBlock, setLastBlock] = useState(2450000); // Inicializa con el valor que desees

  useEffect(() => {
    // Llamada al endpoint para obtener el blockCount
    fetch("/blockcount")
      .then((response) => response.json())
      .then((data) => setBlockCount(data.blockCount))
      .catch((error) => console.error("Error:", error));
  }, []); // Solo se ejecuta una vez al cargar el componente

  useEffect(() => {
    // Llamada al endpoint para obtener el hash del bloque específico
    if (lastBlock !== null) {
      fetch(`/blockhash/${lastBlock}`)
        .then((response) => response.text())
        .then((data) => setBlockHash(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [lastBlock]);

  const numBlocksToShow = 10;
  const [currentBlock, setCurrentBlock] = useState(lastBlock);

  const blocks = [];

  const [vacio, setVacio] = useState("");
  const handlePrevious = () => {
    if (lastBlock > currentBlock) {
      setVacio("");
    } else {
      setVacio("LastBlock");
    }

    setCurrentBlock((prevBlock) => prevBlock - numBlocksToShow);
  };

  const handleNext = () => {
    if (lastBlock > blockCount + currentBlock) {
      setCurrentBlock((prevBlock) => prevBlock + numBlocksToShow);
    } else {
      setVacio("LastBlock");
    }
  };

  for (let i = 0; i < numBlocksToShow; i++) {
    const blockNumber = currentBlock - i;
    blocks.push(
      <div key={blockNumber} className={styles2.cuadrado}>
        <h3>
          <a
            href={`https://blockchair.com/es/bitcoin/testnet/block/${
              blockNumber + blockCount
            }`}
            className={styles3.enlaces}
            target="_blank"
          >
            {blockNumber + blockCount}
          </a>
        </h3>
      </div>
    );
  }

  return (
    <main>
      {/* Resto de tu JSX */}
      <div>
        <h3>BlockCount: {blockCount}</h3>
        <h3>BlockHash: {blockHash}</h3>
      </div>
      {/* Resto de tu JSX */}
    </main>
  );
}
