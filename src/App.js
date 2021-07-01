import "./App.css";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app">
        <Contact />
      </div>
      {/* <div className="app-2">
        <Login />
      </div> */}
    </>
  );
}

export default App;
