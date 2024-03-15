import Background from "../components/common/background/background";
import Foreground from "../components/common/foreground/foreground";
import { sectionSlice } from "../components/common/redux/sectionSlice";
import * as store from "../components/common/redux/store";
import Contact from "../components/section/contact/contact";
import Links from "../components/section/links/links";
import Profile from "../components/section/profile/profile";
import Special from "../components/section/special/special";
import Top from "../components/section/top/top";
import Works from "../components/section/works/works";
import * as vanilla from "../styles/index.css";
import { useGSAP } from "@gsap/react";
import { PageProps, HeadFC } from "gatsby";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import * as React from "react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, Observer);

const IndexPage: React.FC<PageProps> = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const section = store.useAppSelector((state) => state.section.currentSection);
  const dispatch = store.useAppDispatch();

  const launchChangeSectionAnimation = () => {
    const { isSectionChanging, previousSection, currentSection } =
      store.store.getState().section;

    if (!isSectionChanging) return;

    const from = previousSection;
    const to = currentSection;
    const direction = from < to ? 1 : -1;

    gsap
      .timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
        onComplete: () => {
          dispatch(sectionSlice.actions.setSectionChanging(false));
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

  store.store.subscribe(() => {
    launchChangeSectionAnimation();
  });

  useGSAP(() => {
    sectionRefs.current.forEach((sectionRef, index) => {
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
      <div style={{ fontSize: 100, color: "white" }}>{section}</div>
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
