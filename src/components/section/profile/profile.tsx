import Layout from "../layout";
import * as vanilla from "./profile.css";
import React from "react";
import { useRef } from "react";

const Profile = React.forwardRef<HTMLElement>((_, ref) => {
  React.useEffect(() => {
    console.log(`\u001b[31m<Profile> Rendered\u001b[0m`);
  }, []);

  return <Layout ref={ref}>Profile</Layout>;
});

export default Profile;
