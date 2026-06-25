import * as React from "react";

export default function useScrollReveal() {
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Unobserve to run animation only once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Find all elements with class 'reveal'
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []); // Run on mount to register intersection observer once
}
