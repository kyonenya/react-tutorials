import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Statistic } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import { App } from './App';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const increment = () => setCount(c => c+1);
  
  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);