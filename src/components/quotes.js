import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const category = 'intelligence';

    const getQuotes = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': 'XtpaXk3lGZsb6+8mmX6fyg==F1s0lRAD1hANrJxh',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        console.log(result[0]);
        setQuotes(result[0]);
      } catch (error) {
        throw new Error('Error: ', error.message);       
      }
    };

    getQuotes();
  }, []);

  return (
    <section className='quotes'>
      "{quotes.quote}" - {quotes.author}
    </section>
  );
};

export default Quotes;