import React from 'react';
import ExerCard from './ExerCard';

function List({user, exercises}) {
  return (
    <div>
      <h1>List</h1>
      <ul>{
        exercises.map((exercise) => {
          return (
            <ExerCard
              key={exercise.id}
              exercise={exercise}
              description={exercise.description}
              image={exercise.image}
              frequency={exercise.frequency}
            />
          ) 
        })}
      </ul>
    </div>
  );
};
export default List;