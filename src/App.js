import { Routes, Route } from 'react-router-dom';

import MainLoyout from './layouts/MainLoyout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLoyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
