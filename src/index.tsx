import React from 'react';
import ReactDOM from 'react-dom';


// 6. 関数コンポーネント
// propsにはタイプエイリアスで型を付ける
type CounterProps = {
  color: string
}

// functionで定義する
function Counter(props: CounterProps) {  // 7. 渡ってきたpropsを吸い上げる
  // クリックイベント
  const clicked = (color: string) => {
    alert(color);
  }

  return <li 
    style={{backgroundColor: props.color}}
    // 9. イベントに引数を渡したい場合はonClickに無名関数を渡す
    onClick={() => clicked(props.color)}
  >
    0
  </li>;
}

ReactDOM.render(
  <div className="container">
    <ul>
      {/* 6. props: 同種のコンポーネントを識別する属性'color'を自分で定義できる */}
      <Counter color="tomato" />
      <Counter color="skyblue" />
      <Counter color="limegreen" />
    </ul>
  </div>,
  document.getElementById('root')
);


// 4-5. JSXの基本
const name = '隆史';
const showMessage = () => {
  alert('こんにちは');
}
ReactDOM.render( 
  <div 
    className="box" 
    // style属性をオブジェクトで指定する
    // JavaScriptの式なので合わせて二重波括弧になる（クォーテーションは無し）
    style={{width: 100, height: 100, backgroundColor: 'tomato'}} 
    // onClick属性はクォーテーション無しの波括弧で指定する
    onClick={showMessage}
  >
    // JavaScriptの式は波括弧で埋め込む
    {name}
  </div>,
  document.getElementById('foo')
);