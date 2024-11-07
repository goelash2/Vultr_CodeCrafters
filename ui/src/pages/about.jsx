// CircularLayout.jsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRobot, faChartBar, faBullseye, faFlag, faEye } from '@fortawesome/free-solid-svg-icons';

const CircularLayout = () => {
  const aimRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  // GSAP Animation for hover effect
  useEffect(() => {
    gsap.fromTo(
      aimRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
    );

    gsap.fromTo(
      missionRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out", delay: 0.2 }
    );

    gsap.fromTo(
      visionRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out", delay: 0.4 }
    );
  }, []);

  return (
    <div class="relative py-20">
      <div class="container mx-auto">
        <h2 class="text-center text-4xl font-bold">
          Our Aim, Mission, and Vision
        </h2>
        <div class="mt-12 flex justify-between">
          <div class="text-center w-1/3">
            <FontAwesomeIcon
              icon={faBullseye}
              size="3x"
              className="text-[#FF6F61]"
            />
            <h3 className="mt-4 text-xl font-semibold">Our Aim</h3>
            <p className="text-lg opacity-80">
              We aim to provide a predictive solution for jaundice, enhancing
              newborn care.
            </p>
          </div>
          <div class="text-center w-1/3">
            <FontAwesomeIcon
              icon={faFlag}
              size="3x"
              className="text-[#FF6F61]"
            />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="text-lg opacity-80">
              Our mission is to empower caregivers with early identification and
              intervention tools for neonatal jaundice.
            </p>
          </div>
          <div class="text-center w-1/3">
            <FontAwesomeIcon
              icon={faEye}
              size="3x"
              className="text-[#FF6F61]"
            />
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="text-lg opacity-80">
              We envision a future where technology empowers healthcare systems
              worldwide to better care for newborns.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-[#FCFAF2]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#3E3E3E]">Why We Care</h2>
          <p className="mt-4 text-lg text-[#3E3E3E]">
            Our goal is to bring awareness to the early detection of jaundice and improve healthcare for newborns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularLayout;
