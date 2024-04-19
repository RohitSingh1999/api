import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import Btn from "../../Common/Btn";
import { Link } from "react-router-dom";
import { MagazineData } from "../../Constant/LatestMagazine";

gsap.registerPlugin(Draggable, ScrollTrigger, Observer);

const LatestMagazine = () => {
  const galleryRef = useRef(null);
  const ballRef = useRef(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleMouseMove = (e) => {
      const ballElement = ballRef.current;
      const galleryBounds = galleryElement.getBoundingClientRect();

      const mouseX = e.clientX - galleryBounds.left;
      const mouseY = e.clientY - galleryBounds.top;

      if (
        mouseX >= 0 &&
        mouseY >= 0 &&
        mouseX <= galleryBounds.width &&
        mouseY <= galleryBounds.height
      ) {
        setIsCursorVisible(true);
        if (!ballAnimation) {
          ballAnimation = gsap.to(ballElement, {
            opacity: 1,
            duration: 0.6,
            ease: "power0.1",
          });
        }
        gsap.to(ballElement, {
          x: mouseX,
          y: mouseY,
          duration: 0.6,
          ease: "power0.1",
        });
      } else {
        setIsCursorVisible(false);
        if (ballAnimation) {
          ballAnimation.kill();
          ballAnimation = null;
        }
        gsap.to(ballElement, { opacity: 0, duration: 0.3 });
      }
    };

    galleryElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      galleryElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let ballAnimation;

  useEffect(() => {
    const loop = horizontalLoop(".cards li ", { repeat: -1 });
    const slow = gsap.to(loop, { timeScale: 0, duration: 2 });
    loop.timeScale(0);

    Observer.create({
      target: ".cards",
      type: "pointer,touch,",
      wheelSpeed: -1,
      onChange: (self) => {
        loop.timeScale(
          Math.abs(self.deltaX) > Math.abs(self.deltaY)
            ? -self.deltaX
            : -self.deltaY
        );
        slow.invalidate().restart();
      },
    });

    const handleWheel = (event) => {
      // Handle wheel event
    };

    const galleryElement = galleryRef.current;
    galleryElement.addEventListener("grab", handleWheel);

    Draggable.create(".drag", {
      type: "x",
      bounds: {
        minX: -(galleryElement.offsetWidth - window.innerWidth),
        maxX: 0,
      },
    });

    return () => {
      galleryElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });

    const startX = items[0].offsetLeft;
    const times = [];
    const widths = [];
    const xPercents = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 0.4) * 100;

    const snap =
      config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);
    let totalWidth, curX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, {
      xPercent: (i, el) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });
    totalWidth =
      items[items.length - 1].offsetLeft +
      (xPercents[items.length - 1] / 100) * widths[items.length - 1] -
      startX +
      items[items.length - 1].offsetWidth *
        gsap.getProperty(items[items.length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < items.length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > items.length / 2 &&
        (index += index > curIndex ? -items.length : items.length);

      const newIndex = gsap.utils.wrap(0, items.length, index);
      const time = times[newIndex];

      curIndex = newIndex;
      vars.overwrite = true;

      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    return tl;
  }

  return (
    <>
    <div className="gallery w-full relative overflow-hidden" ref={galleryRef}>
      {isCursorVisible && (
        <div
          className="ball md:w-20 md:h-20 h-10 w-10  absolute  bg-white  rounded-full pointer-events-none z-50   flex justify-center items-center"
          ref={ballRef}
        >
          <div className=" flex items-center justify-center">
          <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/web-browser.png" className="md:p-3 p-2 " alt="" />
          </div>
        </div>
      )}
      <div className="drag">
        <ul className="cards flex flex-nowrap ">
          {MagazineData.map((item, index) => (
            <Link
            to={`/latest-monthly-gazette/${item.slug}`}
              onClick={scrollToTop}
              key={index}
            >
              <li className="list-none lg:h-[34rem] h-[21rem] h md:h-[35rem] flex-shrink-0 md:w-[25rem] w-[15rem] text-center font-sans">
                <div className="content">
                  <p className="mmd:text-h4 text-white text-h5 font-bold">{item.slug}</p>
                  <img
                    src={item.imagelinks}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>

<Link to="/monthly-gazette" onClick={scrollToTop}>
<div className="flex items-center justify-center mt-6">
    <Btn btname="View All" />
 </div>
</Link>
</>
  );
};

export default LatestMagazine;