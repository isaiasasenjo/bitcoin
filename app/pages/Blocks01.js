import { useEffect, useState } from "react";
import Frontend4 from "./Frontend4";

export default function Blocks() {
  const [blockCount, setBlockCount] = useState(null);

  // Actualizar blockCount cuando cambia
  useEffect(() => {
    // puedes hacer algo con blockCount aquí si es necesario
  }, [blockCount]);
  console.log("Estoy en Blocks01");
  console.log(blockCount);

  return (
    <main>
      {/* ... (tu código actual) */}
      <Frontend4 blockCount={blockCount} setBlockCount={setBlockCount} />
    </main>
  );
}
