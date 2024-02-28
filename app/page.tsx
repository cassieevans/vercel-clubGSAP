'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".box-1", { x: 120, rotation: 360 })
        .to(".box-2", { x: -120, rotation: -360 }, '<')
        .to(".box-3", { y: -166 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Yarn, Next.js, Vercel</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box box-1 gradient-blue">Box 1</div>
        <div className="box box-2 gradient-blue">Box 2</div>
        <div className="box box-3 gradient-blue">Box 3</div>
      </section>
    </main>
  );
}
