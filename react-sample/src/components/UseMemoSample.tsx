import React, {useMemo, useState} from 'react';

const UseMemoSample = () => {
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prev) => {
      return [...prev, text]
    })
    setText('')
  }

  // 어짜피 결과는 동일하지만 해당 값이 호출되는 횟수를 줄일 경우 꼭 Memo 를 사용할 것.
  // 책과 다르게 호출되는 것을 보기 위해서 최종 결과값에 입력하고 있는 문자열의 길이를 더했다.
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0) + text.length

  const numberOfCharacters2 = useMemo(() =>
      items.reduce((sub, item) => sub + item.length, 0) + text.length
    , [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput}/>
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Character 1 : {numberOfCharacters1}</p>
        <p>Total Number of Character 2 : {numberOfCharacters2}</p>
      </div>
    </div>
  );
}

export default UseMemoSample;