import React, { useState } from "react";

const SequenciaInput: React.FC<{
  onSequenciaSubmit: (sequencia: string) => void;
}> = ({ onSequenciaSubmit }) => {
  const [sequencia, setSequencia] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSequencia(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSequenciaSubmit(sequencia);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <label>
          Sequência de ácidos nucleicos:
          <input type="text" value={sequencia} onChange={handleInputChange} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SequenciaInput;
