import { useState } from "react";

export function UncontrolledRating() {
  let [starsCount, setStarsCount] = useState(0);
  return (
    <div>
      <Star
        selected={starsCount > 0}
        setUniqueCount={() => {
          setStarsCount(1);
        }}
      />
      <Star
        selected={starsCount > 1}
        setUniqueCount={() => {
          setStarsCount(2);
        }}
      />
      <Star
        selected={starsCount > 2}
        setUniqueCount={() => {
          setStarsCount(3);
        }}
      />
      <Star
        selected={starsCount > 3}
        setUniqueCount={() => {
          setStarsCount(4);
        }}
      />
      <Star
        selected={starsCount > 4}
        setUniqueCount={() => {
          setStarsCount(5);
        }}
      />
    </div>
  );
}

type StarPropsType = { selected: boolean; setUniqueCount: () => void };

function Star({ selected, setUniqueCount }: StarPropsType) {
  return selected ? (
    <span
      onClick={() => {
        setUniqueCount();
      }}
    >
      &#9733;
    </span>
  ) : (
    <span
      onClick={() => {
        setUniqueCount();
      }}
    >
      &#9734;
    </span>
  );
}
