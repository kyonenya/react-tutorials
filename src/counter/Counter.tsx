import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Counterable } from './CounterType';

/**
 * 
 * @params counter
 */
export const Counter = (props: {counter: Counterable, countUp: (counter :Counterable) => void}) => {
  console.log(props.counter);
  return  <li
    style={{backgroundColor: props.counter.color}}
    // 17. 親要素からstate更新スイッチを受け取ってイベントに紐付ける
    onClick={() => props.countUp(props.counter)}
  >
    {props.counter.id}：{props.counter.count}
  </li>; 
}
// 子コンポーネントはstateを持つ必要がないので関数コンポーネントにした