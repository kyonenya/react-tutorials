import React, { FC } from 'react';
import ReactDOM from 'react-dom';

type Counter = {
  id: string,
  count: number,
  color: string,
}

/**
 * 
 * @params counter
 */
const Counter = (props: {counter: Counter, countUp: (counter :Counter) => void}) => {
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

/**
 * コンポーネントをループで一括生成する（16.）
 * @params counters
 * @render Counter(counter)
 */
const CounterList = (props: {counters: Counter[], countUp: (counter: Counter) => void}) => {
  const counters = props.counters.map((counter: Counter) => {
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


/**
 * App
 * 共通要素でstateを管理する（14.）
 * @render CounterList(counters)
 */
class App extends React.Component<{}, {counters: Counter[], total: number}> {
  constructor(props: {}) {
    super(props);  // 実際にはpropsを受け取らなくても再定義してやる必要がある
    this.state = {
      // 15. 各カウンターのstateをここから分配していく
      counters: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'},
      ], 
      total: 0,
    }
  }
  
  // 18. thisで渡ってきたカウンターのidと同じカウンターのcountを1増やす
  countUp = (counter: Counter) => {  // どのカウンターコンポーネントを更新するのか、引数をとる
    this.setState((prevState) => {
      // prevState.count++ とするわけにはいかないので、値のコピーをとる（イミュータブルに）
      const counters = prevState.counters.map((counter) => {
        return {id: counter.id, count: counter.count, color: counter.color};
      });
      const pos = prevState.counters.map((counter) => {
        return counter.id;  // [A, B, C]
      }).indexOf(counter.id);  // Cなら'2'
      counters[pos].count++;
      
      return {
        counters: counters,
        total: prevState.total + 1,
      };
    });
  }
  
  render = () => {
    return <div className="container">
      <CounterList 
        // 子コンポーネントのpropsにstateを丸ごと渡す
        counters={this.state.counters}
        // 17. state更新スイッチを末端の子コンポーネントまで渡していく
        countUp={this.countUp}
      />
      <div>合計: {this.state.total}</div>
    </div>
  }
}
// それぞれのカウンターがバラバラにカウント数を持っているが、それを合計したカウント数を持ちたい
// -> Appコンポーネントという親コンポーネントを定義する

ReactDOM.render(
  <App />,
  document.getElementById('root')
);