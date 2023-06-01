import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        setQuotes(result[0]);
        setLoading(false);
      } catch (error) {
        setError('Error: ', error.message);
        setLoading(false);
      }
    };

    getQuotes();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return (
      <div>Error!!!</div>
    );
  }

  return (
    <section className="quotes">
      <span>{quotes.quote}</span>
      <span className="author">{quotes.author}</span>
    </section>
  );
};

export default Quotes;
