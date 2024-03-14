import Background from "../components/common/background/background";
import Foreground from "../components/common/foreground/foreground";
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
import { useSelector, useDispatch } from "react-redux";

gsap.registerPlugin(useGSAP, Observer);

const IndexPage: React.FC<PageProps> = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  // const section = useSelector((state: { section: number }) => state.section);
  // const dispatch = useDispatch();

  useGSAP(() => {
    let animating = false;
    let currentIndex = 0;

    sectionRefs.current.forEach((sectionRef, index) => {
      if (index !== 0) {
        gsap.set(sectionRef, { autoAlpha: 0, yPercent: 100 });
      }
    });

    const gotoSection = (index: number, direction: number) => {
      if (
        (index < 0 && direction === -1) ||
        (index >= sectionRefs.current.length && direction === 1)
      ) {
        return;
      }
      console.log(
        `Running. currentIndex=${currentIndex}, from: ${index} to: ${direction})`
      );
      console.log(`Wrapped index: ${index}`);

      animating = true;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power2.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (direction === 1) {
        tl.to(sectionRefs.current[currentIndex], {
          autoAlpha: 0,
          yPercent: -100,
          zIndex: 0,
        });
        tl.to(
          sectionRefs.current[index],
          { autoAlpha: 1, yPercent: 0, zIndex: 1 },
          "<"
        );
      } else {
        tl.to(sectionRefs.current[currentIndex], {
          autoAlpha: 0,
          yPercent: 100,
          zIndex: 0,
        });
        tl.to(
          sectionRefs.current[index],
          { autoAlpha: 1, yPercent: 0, zIndex: 1 },
          "<"
        );
      }

      currentIndex = index;
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });
  }, [sectionRefs]);

  return (
    <main>
      <Background />
      <Foreground />
      <Top ref={(el) => (sectionRefs.current[0] = el as HTMLDivElement)} />
      <Profile ref={(el) => (sectionRefs.current[1] = el as HTMLDivElement)} />
      <Works ref={(el) => (sectionRefs.current[2] = el as HTMLDivElement)} />
      <Special ref={(el) => (sectionRefs.current[3] = el as HTMLDivElement)} />
      <Links ref={(el) => (sectionRefs.current[4] = el as HTMLDivElement)} />
      <Contact ref={(el) => (sectionRefs.current[5] = el as HTMLDivElement)} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
