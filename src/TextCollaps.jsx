import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TextCollapse = ({ texts }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleText = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {texts.map((text, index) => (
        <Card key={index}>
          <Card.Body>
            <Button
              variant="link"
              onClick={() => toggleText(index)}
              aria-controls={`text-collapse-${index}`}
              aria-expanded={index === openIndex}
            >
              {index + 1}
             # Разворачиваемая панель 
            </Button>
            <div
              id={`text-collapse-${index}`}
              className={`collapse ${index === openIndex ? 'show' : ''}`}
            >
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TextCollapse;
