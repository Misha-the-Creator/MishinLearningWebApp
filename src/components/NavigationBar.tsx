import { Link } from "@tanstack/react-router";

function NavigationBar() {
  return (
    <nav className="nav flex flex-row justify-center-safe mx-auto">
      <Link to="/ml/">Машинное обучение</Link>
      <span className="mx-2">|</span>
      <Link to="/dl">Глубокое обучение</Link>
      <span className="mx-2">|</span>
      <Link to="/llm">LLM</Link>
      <span className="mx-2">|</span>
      <Link to="/dev">Разработка</Link>
      <span className="mx-2">|</span>
      <Link to="/live">Жизнь</Link>
    </nav>
  );
}

export default NavigationBar;
