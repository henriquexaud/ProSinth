import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  const [sequencia, setSequencia] = useState("");
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [isHiden, setIsHiden] = useState<boolean>(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSequencia(event.target.value);
    setTypingIndex(0); // Reinicia o efeito de digitação
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    iniciarProcesso();
  };

  const iniciarProcesso = () => {
    // Exibir mensagem de transcrição após 3 segundos
    setTimeout(() => {
      setIsHiden(true);
      setMensagens((mensagens) => [...mensagens, "Fator de transcrição: CAAT"]);
    }, 10);

    setTimeout(() => {
      setIsHiden(true);
      setMensagens((mensagens) => [
        ...mensagens,
        "Proteína RNA Polimerase buscando o fator no DNA...",
      ]);
    }, 1000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Fator encontrado, iniciando a transcrição...",
      ]);
    }, 4000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "AUG - GAU - GAA - AUU - CAA - GUA - UUC - AAA - UCU - GAU - CCU - CCU - GUA - AUU - GAU - GAA - GGU - CUC - UCU - CCU - GUA - GGU - GUA - UCU - AAC - AUU - GUA - GGU - CCU - CAG - GUA - UCU - CUU - GAA - GGU - CCU - AUU - GGU - GUA - GAA - GUA - UCU - CUC - GGA - GGU - GGU - GGU - CCU - GGU - CUC - GUA - GGA - GAA - GAA - UCU - CCG - CCU - AUU - GUA - GGU - GUA - AAC - AAC - AAC - UCU - UCU - CCU - CCU - UCU - GUA - GGU - AAC - UCU - GGU - AUU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - CCU - UCU - CUC - CAA - GGU - GGU - GGU - CUC - GGA - CCU - GGG - CCU - AUU - GGU - GUA - GGU - GUA - GAA - GGA - GGA - GGA - CCU - GGA - CUC - GGA - GGU - GGU - GGU - GGU - CAG - GGU - UCU - CCU - GGU - GGU - UCU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - UCU - CAG - GGU - GUA - GAG - GAA - UCU - CCG - CCU - AUU - GUA - GGU - GUA - AAC - AAC - AAC - UCU - UCU - CCU - CCU - UCU - GUA - GGU - AAC - UCU - GGU - AUU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - UCU - CAG - GGU - GUA",
      ]);
    }, 8000);

    // Exibir mensagem de splicing após 6 segundos
    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Splicing: Identificando introns e preparando mRNA...",
      ]);
    }, 12000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "AUG - GAU - GAA - AUU - CAA - GUA - UUC - AAA - UCU - GAU - CCU - CCU - GUA - AUU - GAU - GAA - GGU - CUC - UCU - GUA - UCU - CUU - GAA - GGU - CCU - AUU - GGU - GUA - GAA - GUA - UCU - CUC - GGA - GGU - GGU - GGU - CCU - GGU - CUC - GUA - GGA - GAA - GAA - UCU - CCG - CCU - AUU - GUA - GGU - GUA - AAC - GUA - GGU - AAC - UCU - GGU - AUU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - CCU - UCU - CUC - CAA - GGU - GGU - GGU - CUC - GGA - CCU - GGG - CCU - GGA - GGA - GGA - CCU - GGU - GGU - GGU - CAG - GGU - UCU - CCU - GGU - GGU - UCU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - CCG - CCU - AUU - GUA - GGU - GUA - AAC - AAC - AAC - UCU - UCU - CCU - CCU - UCU - GUA - GGU - AAC - UCU - GGU - AUU - AAC - GGU - GGU - CAG - GGU - CUU - CCU - GUA - GGU - AAC - GGU - UCU - CCU - GGU - UCU - AAC - UCU - UCU - CAG - GGU - GUA",
      ]);
    }, 14000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "mRNA deixando o núcleo para encontrar ribossomo no citoplasma...",
      ]);
    }, 18000);

    // Exibir mensagem de síntese de aminoácidos após 9 segundos
    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Pareando bases tRNA com mRNA e montando cadeia polipeptídica...",
      ]);
    }, 19000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Met - Asp - Glu - Ile - Gln - Val - Phe - Lys - Ser - Asp - Pro - Pro - Val - Ile - Asp - Glu - Gly - Leu - Ser - Val - Ser - Leu - Glu - Gly - Pro - Ile - Gly - Val - Glu - Val - Ser - Leu - Gly - Gly - Gly - Pro - Gly - Leu - Val - Gly - Glu - Glu - Ser - Pro - Pro - Ile - Val - Gly - Val - Asn - Val - Gly - Asn - Ser - Gly - Ile - Asn - Gly - Gly - Gln",
      ]);
    }, 22000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Liberação da cadeia polipeptídica.",
      ]);
    }, 24000);

    setTimeout(() => {
      setMensagens((mensagens) => [
        ...mensagens,
        "Parabéns, você sintetizou uma Actina!",
      ]);
    }, 26000);

    setTimeout(() => {
      setShowButton(true);
    }, 26000);
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingIndex((typingIndex) => typingIndex + 1); // Incrementa o índice
    }, 10); // Ajuste a velocidade da digitação alterando o valor do intervalo

    // Limpa o intervalo quando o componente for desmontado
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>ProSinth</p>
          <Form
            onSubmit={handleSubmit}
            style={{ display: isHiden ? "none" : "block" }}
          >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={sequencia}
                onChange={handleInputChange}
                placeholder="Digite o fator de transcrição"
              />
            </Form.Group>
            <Button className="w-100 mt-2" variant="primary" type="submit">
              Sintetizar
            </Button>
          </Form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 800, marginBottom: 200 }}>
            {mensagens.map((mensagem, index) => (
              <p style={{ fontSize: 18 }} key={index}>
                {mensagem.slice(0, typingIndex)}
                {/* Exibe apenas as letras até o índice atual */}
              </p>
            ))}
            <div ref={messagesEndRef}>
              {showButton ? (
                <Button
                  className=" mt-2"
                  variant="primary"
                  onClick={() => window.location.reload()}
                >
                  Reiniciar
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
