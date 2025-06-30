"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SectionObserver({
  id,
  onEnter,
}: {
  id: string;
  onEnter: () => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      onEnter();
    }
  }, [inView, onEnter]);

  return <div id={id} ref={ref} />;
}
