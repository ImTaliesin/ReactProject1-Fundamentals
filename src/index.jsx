import ReactDOM from "react-dom/client";

export default function Greeting() {
    return <h1>Hello, world!</h1>;
}

const root = document.getElementById("root");
root.render(<Greeting />, root);