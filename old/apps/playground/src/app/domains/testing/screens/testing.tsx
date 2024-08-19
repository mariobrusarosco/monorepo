import { useEffect } from 'react';
import { AsyncToggle } from '../components/async-toggle';
import { Checkbox } from '../components/checkbox';
import { Toggle } from '../components/toggle';
import { Tooltip } from '../components/tooltip';

export const parseLikeFeedback = (people: string[]) => {
  switch (people.length) {
    case 0:
      return 'No one likes this';
    case 1:
      return `${people.at(0)} likes this`;
    case 2:
      return `${people.at(0)} and ${people.at(1)} like this`;
    case 3:
      return `${people.at(0)},  ${people.at(1)} and ${people.at(2)} like this`;
    default:
      return `${people.at(0)}, ${people.at(1)} and other ${
        people.length - 2
      } like this`;
  }
};

// const displayLikeFeedback = (likes: string[]) => {
//   const result = parseLikeFeedback(likes);

//   console.log(result);
// };

const displayLikeFeedback = ({
  peopleWhoLiked,
  namingThreshold,
}: {
  peopleWhoLiked: string[];
  namingThreshold: number;
}) => {
  const alphabetPositionMapper = {
    a: 1,
    b: 2,
  };

  console.log(alphabetPositionMapper);
};

export const Testing = () => {
  useEffect(() => {
    console.log(
      displayLikeFeedback({
        peopleWhoLiked: ['Mario', 'Luigi', 'Peach', 'Toad'],
        namingThreshold: 3,
      })
    );
  }, []);

  return (
    <div>
      <Toggle />
      <AsyncToggle />
      <Checkbox label="Select me!" />
      <Tooltip />
    </div>
  );
};
