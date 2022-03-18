import React from 'react';

function Elements ({ currentElements, CardsContainer, Card }) {
  return (
    <>
      <CardsContainer>
        {
          currentElements && currentElements.map(name => {
            return <Card key={name} name={name} />;
          })
        }
      </CardsContainer>
    </>
  );
}

export default Elements;
