import {useState} from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 생성 (타이틀, 사진정보, 게임결과)
// 2. 가위 바위 보 버튼 (하단)
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤으로 값이 선택되도록.
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 계산.
// 6. 게임결과에 따라 테두리 색을 결정 ( win: green, lose: red, draw: black)

const choice = {
  rock:{
    name: 'Rock',
    img: "https://atlas-content-cdn.pixelsquid.com/stock-images/rock-stone-AvXzl49-600.jpg"
  },
  scissors:{
    name: 'Scissors',
    img: "https://img.lakeshorelearning.com/is/image/OCProduction/ts548?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0"
  },
  paper:{
    name: 'Paper',
    img: "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }

  return (
      <div>
        <div className="main">
          <Box title="YOU" item={userSelect} />
          {/*<Box title="COMPUTER"/>*/}
        </div>
        <div className="main">
          <button onClick={()=>play("scissors")}>가위</button>
          <button onClick={()=>play("rock")}>바위</button>
          <button onClick={()=>play("paper")}>보</button>
        </div>
      </div>
  );
}

export default App;
