import ReactDOM from "react-dom";
import "./App.css";

const Box = (props) => {
  const { className, text } = props;
  return <div className={className}>{text}</div>;
};
const rootEl = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <div className="bgCont">
    <h1>Boxes</h1>
    <div className="boxCont">
      <Box className="smallBox" text="Small" />
      <Box className="mediumBox" text="Medium" />
      <Box className="largeBox" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById(rootEl));
export default Box;
