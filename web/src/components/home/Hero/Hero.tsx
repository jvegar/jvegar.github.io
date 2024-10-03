import { useState, useEffect, useCallback } from "react";
import "./Hero.css";

function useTextRotation(
  toRotate: string[],
  typingSpeed: number,
  deletingSpeed: number,
  pausePeriod: number
) {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), pausePeriod);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [toRotate, pausePeriod, text, isDeleting, loopNum]);

  useEffect(() => {
    let ticker = setInterval(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(ticker);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}

function Hero() {
  const rotatingText = useTextRotation(
    [
      "Software Engineer.",
      "FullStack Developer.",
      "Backend Developer.",
      "Financial Investor.",
    ],
    100,
    100,
    1000
  );

  return (
    <section className="hero hero--fullheight" id="hero-section">
      <div className="hero__overlay"></div>
      <div className="hero__content hero__content--centered">
        <span className="hero__subheading">Hi! I am</span>
        <h1 className="hero__title">Jose Vega</h1>
        <h2 className="hero__subtitle">
          I'm a <span className="hero__rotating-text">{rotatingText}</span>
        </h2>
      </div>
    </section>
  );
}

export default Hero;
