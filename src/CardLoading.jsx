import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const initialCards = [
  { title: 'Карточка 1', content: 'Содержание 1' },
  { title: 'Карточка 2', content: 'Содержание 2' },
  { title: 'Карточка 3', content: 'Содержание 3' },
  
];

const CardLoading = () => {
  const [cards, setCards] = useState(initialCards);
  const [visibleCards, setVisibleCards] = useState(2);

  const showMore = () => {
    if (visibleCards + 2 <= cards.length) {
      setVisibleCards(visibleCards + 2);
    } else {
      setVisibleCards(cards.length);
    }
  };

  return (
    <div>
      {cards.slice(0, visibleCards).map((card, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      {visibleCards < cards.length && (
        <Button variant="primary" onClick={showMore}>
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export default CardLoading;
