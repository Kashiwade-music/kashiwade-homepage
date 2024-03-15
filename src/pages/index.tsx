import Background from "../components/common/background/background";
import Foreground from "../components/common/foreground/foreground";
import SectionLink from "../components/common/foreground/sectionLinkBox";
import { sectionSlice } from "../components/common/redux/sectionSlice";
import * as store from "../components/common/redux/store";
import Contact from "../components/section/contact/contact";
import Top from "../components/section/home/home";
import Links from "../components/section/links/links";
import Profile from "../components/section/profile/profile";
import Special from "../components/section/special/special";
import Works from "../components/section/works/works";
import * as vanilla from "../styles/index.css";
import { useGSAP } from "@gsap/react";
import { PageProps, HeadFC } from "gatsby";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import * as React from "react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, Observer);

const changeURLHash = () => {
  const { currentSection, isSectionChanging } = store.store.getState().section;
  if (isSectionChanging) return;
  const hashList = ["top", "profile", "works", "special", "links", "contact"];
  if (currentSection > 0) {
    window.location.hash = hashList[currentSection];
  } else {
    window.location.hash = "";
  }
};

const IndexPage: React.FC<PageProps> = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const dispatch = store.useAppDispatch();
  console.log(`\u001b[31m[index.tsx] Rendered\u001b[0m`);

  const launchChangeSectionAnimation = () => {
    const { isSectionChanging, previousSection, currentSection } =
      store.store.getState().section;

    if (!isSectionChanging) return;
    console.log("[lCSA] isSectionChanging is true");

    const from = previousSection;
    const to = currentSection;
    const direction = from < to ? 1 : -1;

    gsap
      .timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
        onComplete: () => {
          dispatch(sectionSlice.actions.setSectionChanging(false));
          sectionRefs.current.forEach((sectionRef, index) => {
            if (index > currentSection) {
              gsap.set(sectionRef, { autoAlpha: 0, yPercent: 100 });
            } else if (index < currentSection) {
              gsap.set(sectionRef, { autoAlpha: 0, yPercent: -100 });
            }
          });
          console.log("animation completed");
        },
      })
      .to(sectionRefs.current[from], {
        autoAlpha: 0,
        yPercent: direction * -100,
        zIndex: 0,
      })
      .to(
        sectionRefs.current[to],
        { autoAlpha: 1, yPercent: 0, zIndex: 1 },
        "<"
      );
  };

  React.useEffect(() => {
    console.log(`[useEffect] launched, sectionRefs: ${sectionRefs.current}`);

    store.store.subscribe(() => {
      launchChangeSectionAnimation();
      changeURLHash();
    });
  }, []);

  useGSAP(() => {
    console.log(
      `[index.tsx -> useGSAP] launched, sectionRefs: ${sectionRefs.current}`
    );
    sectionRefs.current.forEach((sectionRef, index) => {
      console.log(`[index.tsx -> useGSAP sectionRefs] index: ${index}`);

      if (index !== 0) {
        gsap.set(sectionRef, { autoAlpha: 0, yPercent: 100 });
      }
    });

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => {
        const { isSectionChanging, currentSection } =
          store.store.getState().section;
        if (isSectionChanging || currentSection - 1 < 0) return;
        console.log("launching onDown");

        dispatch(sectionSlice.actions.changeSectionTo(currentSection - 1));
      },
      onUp: () => {
        const { isSectionChanging, currentSection } =
          store.store.getState().section;
        if (
          isSectionChanging ||
          currentSection + 1 >= sectionRefs.current.length
        )
          return;
        console.log("launching onUp");

        dispatch(sectionSlice.actions.changeSectionTo(currentSection + 1));
      },
      tolerance: 10,
      preventDefault: true,
    });
  }, [sectionRefs]);

  return (
    <main>
      <Background />
      <Foreground />
      <SectionLink />
      {/* <div style={{ fontSize: 100, color: "white" }}>{section}</div> */}
      {[Top, Profile, Works, Special, Links, Contact].map((Section, index) => (
        <Section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el as HTMLDivElement)}
        />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
