import * as React from "react";
import {
  EZDrawer__checkbox,
  EZDrawer__overlay,
  EZDrawer__container,
} from "./drawer.module.css";
const getDirectionStyle = (dir, size) => {
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
const Drawer = ({
  open,
  onClose = () => {},
  children,
  style,
  overlayColor = "#000",
  overlayOpacity = 0.4,
  zIndex = 100,
  duration = 500,
  direction,
  size = 250,
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
        className={EZDrawer__checkbox}
        id="EZDrawer__checkbox"
        onChange={onClose}
        checked={open}
      />
      <nav
        role="navigation"
        className={EZDrawer__container}
        style={drawerStyles}
      >
        {children}
      </nav>
      <label
        htmlFor="EZDrawer__checkbox"
        className={EZDrawer__overlay}
        style={overlayStyles}
      />
    </div>
  );
};
export default Drawer;
