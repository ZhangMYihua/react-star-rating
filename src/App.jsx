import { useState } from 'react';

import StarRating from './star-rating.component';

import './App.css';

function App() {
  const [productRating, setProductRating] = useState(0);

  return (
    <div className='App'>
      <h2>Current Rating: {productRating}</h2>
      <StarRating onChange={setProductRating} />
    </div>
  );
}

export default App;
