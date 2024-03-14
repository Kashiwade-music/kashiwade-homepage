import * as vanilla from "./profile.css";
import React from "react";
import { useRef } from "react";

const Profile = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={vanilla.SectionWrapper} ref={ref}>
      <div className={vanilla.SectionMain}>PROFILE</div>
    </section>
  );
});

export default Profile;
