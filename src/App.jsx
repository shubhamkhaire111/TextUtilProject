import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // appy when dark mode on
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a3e72";
      showAlert("Dark Mode has been enable", "success");
      document.title = "Text Utile Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enable", "success");
      document.title = "Text Utile Light Mode"; // used to change the title of page
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        aboutUs="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-4">
        <Alert alert={alert} />
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to Analyse Below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
