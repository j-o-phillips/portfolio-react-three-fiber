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
    <div
      className="mx-3 w-[102px] h-[24px] flex justify-between items-center p-[2px] relative cursor-pointer"
      style={{ border: "2px solid white", borderRadius: "30px" }}
    >
      <div
        className="bg-[yellow] w-[15px] h-[15px] rounded-full"
        onClick={() => {
          setColorData({
            base: "yellow",
            vector: { r: 0.9, g: 0.8, b: 0.2 },
          });
        }}
      ></div>
      <div
        className="bg-[blue] w-[15px] h-[15px] rounded-full"
        onClick={() => {
          setColorData({
            base: "blue",
            vector: { r: 0.02, g: 0.0, b: 1.0 },
          });
        }}
      ></div>
      <div
        className="bg-[red] w-[15px] h-[15px] rounded-full"
        onClick={() => {
          setColorData({
            base: "red",
            vector: { r: 1.0, g: 0.1, b: 0.1 },
          });
        }}
      ></div>
      <div
        className="bg-[green] w-[15px] h-[15px] rounded-full"
        onClick={() => {
          setColorData({
            base: "green",
            vector: { r: 0.1, g: 0.3, b: 0.05 },
          });
        }}
      ></div>
      <div
        className="bg-[orange] w-[15px] h-[15px] rounded-full"
        onClick={() => {
          setColorData({
            base: "orange",
            vector: { r: 1.0, g: 0.5, b: 0.0 },
          });
        }}
      ></div>
      <div
        className="w-[15px] h-[15px] rounded-full absolute"
        style={{
          left: ballOffset,
          backgroundColor: "#868686",
          transition: "all",
          transitionDuration: "0.5s",
        }}
      ></div>
    </div>
  );
};

export default ColorToggle;
