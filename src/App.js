import React from "react";
import ReactDOM from "react-dom";
import UploadComponent from "./uploadComponent";

const App = () => {
  return (
    <div className="app">
      <UploadComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
