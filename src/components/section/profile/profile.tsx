import Layout from "../layout";
import * as vanilla from "./profile.css";
import React from "react";
import { useRef } from "react";

const Profile = React.forwardRef<HTMLElement>((_, ref) => {
  return <Layout ref={ref}>Profile</Layout>;
});

export default Profile;
