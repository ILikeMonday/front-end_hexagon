import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div>
      <div
        className="d-flex align-items-center gap-2"
        style={{
          textAlign: "center",
          backgroundColor: "pink",
          minHeight: "100vh",
        }}
      >
        <div className="text-bg-dark mx-auto">
          <div style={{ backgroundColor: "#009FE9", textAlign: "center" }}>
            <h1>Upbeat !!!</h1>
          </div>
          <div style={{ fill: "green", textAlign: "center" }}>
            <button type="button">Start Game</button>
          </div>
          <div style={{ fill: "green", textAlign: "center" }}>
            <button type="button">How to play</button>
          </div>
          <div style={{ fill: "green", textAlign: "center" }}>
            <button type="button">Quit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
