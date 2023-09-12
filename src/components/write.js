import React, { useState, useEffect } from 'react';
import '../Home.css';

const InsertImagesIntoText = ({ text, imageUrls }) => {
  const [formattedText, setFormattedText] = useState('');

  useEffect(() => {
    const tokens = text.split("<IMAGE>");
    let formattedString = "";

    for (let i = 0; i < tokens.length; i++) {
      formattedString += tokens[i];
      if (i !== tokens.length - 1) {
        formattedString += `<img src="${imageUrls[i]}" class="inline-image" alt="Image">`;
      }
    }

    setFormattedText(formattedString);
  }, [text, imageUrls]);

  return (
    <div dangerouslySetInnerHTML={{ __html: formattedText }} />
  );
};

export default InsertImagesIntoText;
