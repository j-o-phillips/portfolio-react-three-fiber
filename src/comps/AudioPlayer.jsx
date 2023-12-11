import { useThemeContext } from "../context/ThemeContext";
import track from "../assets/haydn3.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const AudioPlayer = () => {
  const { colorData } = useThemeContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volFlag, setVolFlag] = useState(false);
  const audio = useRef();

  const handleTogglePlay = () => {
    if (!isPlaying) {
      audio.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audio.current.pause();
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    audio.current.load();
    isPlaying && setIsPlaying(false);
  };

  return (
    <div
      className="m-[10px] w-[316px] h-[200px]  p-[5px] flex justify-center items-center text-white"
      style={{
        boxShadow: `${colorData.base} 10px 5px 40px -10px`,
        borderRadius: "400px",
        backgroundImage: `linear-gradient(
      144deg,
      ${colorData.base},
      30%,
      rgb(251, 251, 249),
      75%,
      #120d14
    )`,
      }}
    >
      <div
        className="flex items-center h-full w-full rounded-full"
        style={{ backgroundColor: "rgb(5, 6, 45)" }}
      >
        <audio ref={audio} src={track} />
        <div
          className="flex justify-center items-center cursor-pointer ml-[10px] h-[170px] w-[120px]"
          style={{
            borderRadius: "500px 0 0 500px ",
            border: "2px solid white",
          }}
          onClick={handleTogglePlay}
        >
          {!isPlaying ? (
            <FontAwesomeIcon icon={faPlay} className="text-4xl ml-3" />
          ) : (
            <FontAwesomeIcon icon={faPause} className="text-4xl ml-3" />
          )}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer ml-[10px] h-[170px] w-[120px]"
          style={{
            borderRadius: "0 500px 500px 0",
            border: "2px solid white",
          }}
          onClick={handleStop}
        >
          <FontAwesomeIcon icon={faStop} className="text-4xl mr-1" />
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            range={!volFlag ? 1 : undefined}
            onChange={(e) => {
              audio.current.volume = e.target.value;
              setVolFlag(true);
            }}
            className="transform rotate-[270deg] input"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
