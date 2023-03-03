import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div>
      <Link to="/">
        <button>Menu</button>
      </Link>
      <Link to="/Start">
        <button>Start</button>
      </Link>
    </div>
  );
}
