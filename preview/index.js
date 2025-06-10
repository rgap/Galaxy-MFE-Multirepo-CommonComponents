import React from "react";
import { createRoot } from "react-dom/client";
import Button from "../src/Button.jsx";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Common Components Preview</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>Button Component</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button>Default Button</Button>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button onClick={() => alert("Button clicked!")}>Clickable Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <section>
        <h2>Button Sizes</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Normal
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
        </div>
      </section>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
