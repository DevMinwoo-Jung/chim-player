import { useState } from "react";
import FocusableInput from "./FocusableInput";
import "./styles.css";

function Talmo() {
  const [focused, setFocused] = useState(false);
  const [numbers, setNumbers] = useState([1, 2, 2, 2, 3]);
  const [numbersDistinctCount, setNumbersDistinctCount] = useState(3);
  const [mostFrequentNumber, setMostFrequentNumber] = useState(2);
  const [mostFrequentNumberCount, setMostFrequentNumberCount] = useState(3);
  const handleChangeFocused = (e) => {
    setFocused(focused);
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>
        코드를 편집하고 저장하면 새로운 URL의 Sandbox가 생성됩니다. 이 URL을
        이메일로 제출해주시면 됩니다.
      </div>
      <hr />
      <div>
        {numbers.map((number, key) => (
          <button type="button" key={Math.random}>
            {number}
          </button>
        ))}
      </div>
      <div>
        Q1. 위의 버튼들 중 하나를 누르면 해당 버튼의 숫자가 1 증가하도록
        만드십시오.
      </div>
      <div>
        Q2. 숫자들이 바뀌어도 아래 통계항목들이 정상적으로 집계되도록
        만드십시오.
        <ul>
          <li>서로 다른 숫자의 가짓수: {numbersDistinctCount}</li>
          <li>
            가장 많이 등장하는 숫자: {mostFrequentNumber} (
            {mostFrequentNumberCount}회)
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <FocusableInput
          type="number"
          focused={focused}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        Q3. FocusableInput.js를 수정하여, 다음 focused 체크박스가 false에서
        true로 변할 때 입력란에 자동으로 포커스가 가도록 하십시오.
        <input
          type="checkbox"
          checked={focused}
          onChange={handleChangeFocused}
        />
        &nbsp;focused
      </div>
      <div>
        Q4. 지금은 FocusableInput의 props에 넣은 type="number" 속성이 실제 input
        요소에까지 전달되지 않고 있습니다. FocusableInput.js를 수정하여 위
        입력란이 숫자만 허용하도록 만드십시오.
      </div>
      <div>
        Q5. 지금은 입력란의 내용에 변경이 있을 때마다 즉시 콘솔에 현재 텍스트를
        출력하게 되어 있습니다. 프로그램을 수정하여, 변경 발생 후 1초간 추가적인
        변경이 없을 때만 출력을 하도록 만드십시오.
      </div>
      <hr />
      <div>
        보너스 문제) 이 페이지의 디자인을 자유롭게 개선해 보십시오. 문제 내용이
        유지되는 한 코드를 자유롭게 수정하실 수 있습니다. material-ui와 같은
        외부 라이브러리를 dependency에 추가해서 사용해도 무방합니다.
      </div>
    </div>
  );
}

export default Talmo;
