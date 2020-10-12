import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import { Counter } from './Counter';
import { Counterable } from './CounterType';

/**
 * コンポーネントをループで一括生成する（16.）
 * @params counters
 * @render Counter(counter)
 */
export const CounterList = (props: {counters: Counterable[], countUp: (counter: Counterable) => void}) => {
  const counters = props.counters.map((counter: Counterable) => {
    return <Counter 
      counter={counter}
      // ユニークなkeyが必要、ループで処理するコンポーネントには
      key={counter.id}
      countUp={props.countUp}
    />
  });
  return <ul>
    {counters}
   </ul>
}
