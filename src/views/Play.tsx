import React, { useEffect, useState } from "react";

const Play = () => {
  const [initialTime, setInitialTime] = useState<Date | null>(null);

  const texto = "Tiene nombres mil el miembro viril";
  const [textoValidado, setTextoValidado] = useState("");
  const [textoSinValidar, setTextosinValidar] = useState(texto);

  const handleKeyDow = (event: React.KeyboardEvent) => {
    if (event.key !== textoSinValidar.at(0)) {
      return;
    }
    if (textoValidado === "") {
      setInitialTime(new Date());
    }
    setTextoValidado((txt) => `${txt}${event.key}`);
    setTextosinValidar((txt) => txt.slice(1, texto.length));
  };

  const clear = () => {
    setTextoValidado("");
    setTextosinValidar(texto);
  };
  useEffect(() => {
    if (textoSinValidar === "") {
      const seccons = new Date().getTime() - initialTime?.getTime()!;
      console.log("has ganado");
      console.log(`has tardado ${seccons}`);
    }
  }, [textoSinValidar]);
  return (
    <div>
      <h4>
        <span style={{ color: "green" }}>{textoValidado}</span>
        {textoSinValidar}
      </h4>

      {/* <button>Empezar</button> */}
      <input type="text" onKeyDown={handleKeyDow} value={textoValidado} />
      <button type="button" onClick={clear}>
        reset
      </button>
    </div>
  );
};

export default Play;
