import "./App.css";
import MultipleSelect from "./components/MultipleSelect";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import building from "./assets/buidling.png";

function App() {
  return (
    <>
      <header style={{ marginTop: "10px" }}>
        <nav>
          <div>
            <p>
              <img src={building} alt="" />
              Building Fast,
              <span>
                <em> kinda</em>
              </span>
            </p>
          </div>
          <div>
            <p style={{ marginTop: "37px" }}>contact us</p>
          </div>
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
