import React, { useState, useEffect } from "react";

function TypingHeading({
  text = "Clean Clothes, Happy Life",
  speed = 80,
  pause = 1500,
  className = "",
}) {
  const [display, setDisplay] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!deleting && i < text.length) {
      timer = setTimeout(() => setI((prev) => prev + 1), speed);
    } else if (deleting && i > 0) {
      timer = setTimeout(() => setI((prev) => prev - 1), speed / 2);
    } else if (i === text.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (i === 0 && deleting) {
      setDeleting(false);
    }

    setDisplay(text.slice(0, i));
    return () => clearTimeout(timer);
  }, [i, deleting, text, speed, pause]);

  return (
    <>
      <h2 className={`${className} inline-block`}>
        {display}
        <span className="ml-1 blink">|</span>
      </h2>
      <style>{`
        .blink {
          display: inline-block;
          width: 0.6rem;
          animation: blink 1s steps(1) infinite;
          color: inherit;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default TypingHeading;
