type RatingPropsType = { value: 0 | 1 | 2 | 3 | 4 | 5 };

export function Rating({ value }: RatingPropsType) {
  const selectedStars = Array(value).fill(null); // Create an array of length 'value' filled with null values
  const notSelectedStars = Array(5 - value).fill(null); // Create an array of length 'value' filled with null values
  return (
    <div>
      {selectedStars.map((_, index) => (
        <Star key={index} selected={true} />
      ))}

      {notSelectedStars.map((_, index) => (
        <Star key={index} selected={false} />
      ))}
    </div>
  );
}

type StarPropsType = { selected: boolean };

function Star({ selected }: StarPropsType) {
  return selected ? <span>&#9733;</span> : <span>&#9734;</span>;
}
