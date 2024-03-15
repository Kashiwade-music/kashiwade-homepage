import { sectionSlice } from "../redux/sectionSlice";
import * as store from "../redux/store";
import sectionNameArray from "../utils/sectionNameArray";
import * as vanilla from "./sectionLinkBox.css";
import SectionMarkerContact from "./sectionMarkerContact";
import SectionMarkerContactActive from "./sectionMarkerContactActive";
import SectionMarkerHome from "./sectionMarkerHome";
import SectionMarkerHomeActive from "./sectionMarkerHomeActive";
import SectionMarkerLinks from "./sectionMarkerLinks";
import SectionMarkerLinksActive from "./sectionMarkerLinksActive";
import SectionMarkerProfile from "./sectionMarkerProfile";
import SectionMarkerProfileActive from "./sectionMarkerProfileActive";
import SectionMarkerSpecial from "./sectionMarkerSpecial";
import SectionMarkerSpecialActive from "./sectionMarkerSpecialActive";
import SectionMarkerWorks from "./sectionMarkerWorks";
import SectionMarkerWorksActive from "./sectionMarkerWorksActive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

interface SectionLinkBoxProps {
  sectionName: string;
}

const SectionLinkBox = React.forwardRef<HTMLDivElement, SectionLinkBoxProps>(
  (props, ref) => {
    const { sectionName } = props;
    const section = store.useAppSelector(
      (state) => state.section.currentSection
    );
    const dispatch = store.useAppDispatch();

    const sectionMarkerRef = useRef<HTMLDivElement>(null);
    const activeSVGRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
      const { isSectionChanging } = store.store.getState().section;
      if (isSectionChanging) return;

      const index = sectionNameArray.indexOf(sectionName);
      dispatch(sectionSlice.actions.changeSectionTo(index));
    };

    const sectionMarkerArray = [
      SectionMarkerHome,
      SectionMarkerProfile,
      SectionMarkerWorks,
      SectionMarkerSpecial,
      SectionMarkerLinks,
      SectionMarkerContact,
    ];
    const sectionMarkerActiveArray = [
      SectionMarkerHomeActive,
      SectionMarkerProfileActive,
      SectionMarkerWorksActive,
      SectionMarkerSpecialActive,
      SectionMarkerLinksActive,
      SectionMarkerContactActive,
    ];
    const index = sectionNameArray.indexOf(sectionName);
    const isActive = section === index;
    const SectionMarker = sectionMarkerArray[index];
    const SectionMarkerActive = sectionMarkerActiveArray[index];

    useGSAP(() => {
      console.log(
        `[SectionLinkBox useGSAP.1] @${sectionName} -> isActive: ${isActive}`
      );

      gsap.set(activeSVGRef.current, { autoAlpha: isActive ? 1 : 0 });

      gsap.set(sectionMarkerRef.current, {
        autoAlpha: isActive ? 1 : 0,
        xPercent: isActive ? 0 : 50,
      });
    }, []);

    useGSAP(() => {
      console.log(
        `[SectionLinkBox useGSAP.2] @${sectionName} -> isActive: ${isActive}`
      );

      gsap
        .timeline({
          defaults: { duration: 0.75, ease: "power2.inOut" },
        })
        .to(activeSVGRef.current, { autoAlpha: isActive ? 1 : 0 })
        .to(
          sectionMarkerRef.current,
          {
            xPercent: isActive ? 0 : 50,
            autoAlpha: isActive ? 1 : 0,
          },
          "<"
        );
    }, [isActive]);
    return (
      <div ref={ref} onClick={handleClick} className={vanilla.SectionLink}>
        <div className={vanilla.SectionSVG}>
          <SectionMarker />
        </div>
        <div className={vanilla.SectionSVG} ref={activeSVGRef}>
          <SectionMarkerActive />
        </div>
        <div className={vanilla.SectionMarker} ref={sectionMarkerRef}></div>
      </div>
    );
  }
);

const SectionLink: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  return (
    <div className={vanilla.SectionLinkWrapper}>
      {sectionNameArray.map((sectionName, index) => {
        return (
          <SectionLinkBox
            key={index}
            ref={(el) => (sectionRefs.current[index] = el as HTMLDivElement)}
            sectionName={sectionName}
          />
        );
      })}
    </div>
  );
};

export default SectionLink;
