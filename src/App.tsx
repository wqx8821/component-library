import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={e => e}>hallo</Button>
        <Button disabled>hallo</Button>
        <Button  size={ButtonSize.large}>hallo</Button>
        <Button  size={ButtonSize.small}>hallo</Button>
        <Button btnType={ButtonType.Link} href='https://www.baidu.com'>hallo 2</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.small} href='https://www.baidu.com'>hallo 2</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.small} href='https://www.baidu.com'>hallo 2</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.small} href='https://www.baidu.com'>hallo 2</Button>
        <Button size={ButtonSize.small} >hallo 2</Button>
        <code>
          let a = '1213'
          Learn React
        </code>
      </header>
    </div>
  );
}

export default App;
