import "./App.css";
import MultipleSelect from "./components/MultipleSelect";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <>
      <header>
        <nav>
          <p>
            Building Fast,
            <span>
              <em> kinda</em>
            </span>
          </p>
          <p>about us</p>
        </nav>
      </header>
      <div className="building">
        <div className="building-inside">
          <p>start building your ideas now</p>
          <span>don&apos;t worry. we&apos;ll help.</span>
        </div>
        <div className="chooseOption">
          <MultipleSelect />
          <button className="button-85">Start now</button>
        </div>
      </div>
      <footer>
        <div>
          <FaSquareXTwitter
            size={40}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
          <FaLinkedin
            size={40}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
        </div>
      </footer>
    </>
  );
}

export default App;
