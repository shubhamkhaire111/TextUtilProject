/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convertd to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convertd to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copyied to Clipboard", "success");
  };

  const handleRemoveExraSpces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText =("Enter here..."); // correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode == "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode == "dark" ? "#212529" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="9"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleRemoveExraSpces}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode == "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview it here."}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TextForm;
