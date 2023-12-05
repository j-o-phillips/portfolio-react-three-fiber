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
        className="bg-[yellow]"
        onClick={() => {
          setColorData({
            base: "yellow",
            vector: { r: 1.0, g: 1.0, b: 0.0 },
          });
        }}
      ></div>
      <div
        className="bg-[blue]"
        onClick={() => {
          setColorData({
            base: "blue",
            vector: { r: 0.0, g: 0.0, b: 1.0 },
          });
        }}
      ></div>
      <div
        className="bg-[red]"
        onClick={() => {
          setColorData({
            base: "red",
            vector: { r: 1.0, g: 0.0, b: 0.0 },
          });
        }}
      ></div>
      <div
        className="bg-[green]"
        onClick={() => {
          setColorData({
            base: "green",
            vector: { r: 0.0, g: 1.0, b: 0.0 },
          });
        }}
      ></div>
      <div
        className="bg-[orange]"
        onClick={() => {
          setColorData({
            base: "orange",
            vector: { r: 1.0, g: 0.5, b: 0.0 },
          });
        }}
      ></div>
      <div className="ball" style={{ left: ballOffset }}></div>
    </div>
  );
};

export default ColorToggle;
