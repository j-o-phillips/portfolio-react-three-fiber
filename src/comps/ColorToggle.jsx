import { useContext } from "react";
import { useThemeContext } from "../context/ThemeContext";

const ColorToggle = () => {
  const { colorData, setColorData } = useThemeContext();
  let ballOffset;

  switch (colorData.base) {
    case "yellow":
      ballOffset = "2px";
      break;
    case "blue":
      ballOffset = "22px";
      break;
    case "red":
      ballOffset = "42px";
      break;
    case "green":
      ballOffset = "61px";
      break;
    case "orange":
      ballOffset = "81px";
      break;
  }
  return (
    <div className="mx-3 toggle-cont">
      <div
        className="yellowIcon"
        onClick={() => {
          setColorData({
            base: "yellow",
          });
        }}
      ></div>
      <div
        className="blueIcon"
        onClick={() => {
          setColorData({
            base: "blue",
          });
        }}
      ></div>
      <div
        className="redIcon"
        onClick={() => {
          setColorData({
            base: "red",
          });
        }}
      ></div>
      <div
        className="greenIcon"
        onClick={() => {
          setColorData({
            base: "green",
          });
        }}
      ></div>
      <div
        className="orangeIcon"
        onClick={() => {
          setColorData({
            base: "orange",
          });
        }}
      ></div>
      <div className="ball" style={{ left: ballOffset }}></div>
    </div>
  );
};

export default ColorToggle;
