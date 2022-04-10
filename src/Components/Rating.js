import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ rate, rateChange, style, fontSize, filter }) => {
  return (
    <>
      {[...Array(5)].map((a, index) => (
        <span
          className="try"
          key={index}
          onClick={() => rateChange(index + 1)}
          style={style}
        >
          {index < rate ? (
            filter ? (
              <AiFillStar className="try2" fontSize={fontSize} />
            ) : (
              <AiFillStar fontSize={fontSize} />
            )
          ) : filter ? (
            <AiOutlineStar className="try2" fontSize={fontSize} />
          ) : (
            <AiOutlineStar fontSize={fontSize} />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
