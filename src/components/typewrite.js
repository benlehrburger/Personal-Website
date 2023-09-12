import React, { useState, useEffect } from 'react';

const useTypewriter = (text, delay, element, startDelay) => {
  const [typedText, setTypedText] = useState('');
  const [isTypingVisible, setIsTypingVisible] = useState(false);

  useEffect(() => {
    const typewriter = (text, delay) => {
      let i = 0;

      const type = () => {
        const currentText = text.substring(0, i++);
        setTypedText(currentText);

        if (i <= text.length) {
          setTimeout(type, delay);
        }
      };

      setTimeout(type, startDelay);
    };

    if (isTypingVisible) {
      typewriter(text, delay); 
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTypingVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const section = document.querySelector(element);
    observer.observe(section);
  }, [text, delay, startDelay, isTypingVisible]);

  return typedText;
};

const TypewriterComponent = ({ text2type, delay, element, startDelay }) => {
  const typedText = useTypewriter(text2type, delay, element, startDelay);

  return (
    <div>
      <p>{typedText}</p>
    </div>
  );
};

export default TypewriterComponent;