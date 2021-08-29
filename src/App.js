import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useMemo, useState } from 'react';
import Header from './components/LearnHooks/Header';
import Counter from './components/LearnHooks/Counter';
import Button from './components/LearnHooks/Button';

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementByOne = useCallback(() => {
    setCountOne(prev => prev + 1);
  }, [])
  const incrementByFive = useCallback(() => {
    setCountTwo(prev => prev + 5);
  }, [])

  const checkEvenOrOdd = useMemo(() => {
    let sum = 0;
    for(let i = 0; i < 1000000000; i++){
      sum += i
    }
    return countOne % 2 === 0
  }, [countOne])

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col">
          <div className="card">
            <Counter counterContent='counter 1' count={countOne} />
            {checkEvenOrOdd ? 'Even' : 'Odd'}
            <Button buttonContent='increment by One' handleButtonClick={incrementByOne} />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Counter counterContent='counter 2' count={countTwo} />
            <Button buttonContent='increment by Five' handleButtonClick={incrementByFive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
