import { FC, useEffect } from "react";
import "./Spinner.scss";

interface SpinnerProps {
  width?: number;
  color?: "white";
}

const Spinner: FC<SpinnerProps> = ({ width, color }) => {
  useEffect(() => {
    const root = document.documentElement;
    if (width) {
      root?.style.setProperty("--indicator-spinner-width", width + "px");
    }

    if (color) {
      root?.style.setProperty("--indicator-spinner-color", 'white');
    }
  }, [width, color]);

  return (
    <div className="loadingio-spinner-spin-9qm07ls7maa">
      <div className="ldio-uairjl9wo88">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
