import * as vanilla from "./drawer.css";
import * as React from "react";

const getDirectionStyle = (dir: string, size: number) => {
  switch (dir) {
    case "left":
      return {
        top: 0,
        left: 0,
        transform: "translate3d(-100%, 0, 0)",
        width: size,
        height: "100vh",
      };
    case "right":
      return {
        top: 0,
        right: 0,
        transform: "translate3d(100%, 0, 0)",
        width: size,
        height: "100vh",
      };
    case "bottom":
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, 100%, 0)",
        width: "100%",
        height: size,
      };
    case "top":
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: "translate3d(0, -100%, 0)",
        width: "100%",
        height: size,
      };

    default:
      return {};
  }
};
type Props = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  style?: object;
  overlayColor?: string;
  overlayOpacity?: number;
  zIndex?: number;
  duration?: number;
  direction: string;
  size?: number;
};
const Drawer: React.FC<Props> = ({
  open,
  direction,
  children,
  onClose = () => {
    // do nothing.
  },
  overlayColor = "#000",
  overlayOpacity = 0.4,
  zIndex = 100,
  duration = 500,
  size = 250,
  style = {},
}) => {
  const overlayStyles = {
    backgroundColor: `${overlayColor}`,
    opacity: `${overlayOpacity}`,
    zIndex: zIndex,
  };
  const drawerStyles = {
    zIndex: zIndex + 1,
    transitionDuration: `${duration}ms`,
    ...getDirectionStyle(direction, size),
    ...style,
  };
  return (
    <div id="EZDrawer">
      <input
        type="checkbox"
        className={vanilla.EZDrawer__checkbox}
        id="EZDrawer__checkbox"
        onChange={onClose}
        checked={open}
      />
      <nav
        role="navigation"
        className={vanilla.EZDrawer__container}
        style={drawerStyles}
      >
        {children}
      </nav>
      <label
        htmlFor="EZDrawer__checkbox"
        className={vanilla.EZDrawer__overlay}
        style={overlayStyles}
      />
    </div>
  );
};
export default Drawer;
