import React from 'react';
import "./card.css";

const Card = ({ title, postLink }) => {

  const truncateText = (text, maxWords = 28) => {
    const words = text.split(' ');
    if (words.length > maxWords)
    {
      return words.slice(0, maxWords).join(' ') + "...";
    }
  }

  return (
    <>
      <div className="cardContainer">
        <h2 className="cardTitle">{title}</h2>
        {/* <div className="cardDescription">
          {
            truncateText(description)
          }
        </div> */}
        <div className="cardLink">
          <a href={postLink}>Link</a>
        </div>
      </div>
    </>
  )
}

export default Card