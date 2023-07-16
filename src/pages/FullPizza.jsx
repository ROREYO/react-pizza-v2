import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://64a28074b45881cc0ae53d7e.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h1>{pizza.title}</h1>
      <h3>{pizza.price} ₽</h3>
    </div>
  );
};

export default FullPizza;
