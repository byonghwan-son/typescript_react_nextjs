import React, {memo, useCallback, useState} from 'react';

// Decrement : Normal
// Increment : Memo Component
// Double : Memo Component

type ButtonProps = {
  onClick: () => void
}

const Decrement = (props: ButtonProps) => {
  const {onClick} = props
  console.log('Decrement Button 이 다시 그려졌습니다.')
  return (<button onClick={onClick}>Decrement</button>)
}

const Increment = memo((props: ButtonProps) => {
  const {onClick} = props
  console.log('Increment Button 이 다시 그려졌습니다.')
  return (<button onClick={onClick}>Increment</button>)
})

const Double = memo((props: ButtonProps) => {
  const {onClick} = props
  console.log('Double Button 이 다시 그려졌습니다.')
  return (<button onClick={onClick}>Double</button>)
})

function Parent3() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  const increment = () => {
    setCount(prev => prev + 1)
  }

  // Parent3가 다시 그려지더라도 useCallback 으로 감싸져 있는 function 을 호출하기 때문에
  // Double 컴포넌트는 다시 그려지지 않는다.
  // 새로 만들어지는 function 이 아니라는 뜻이다.
  // deps 의 배열 값이 변경되면 ( [count] 로 변경을 하면 매번 클릭할 때마다 count 가 변경됨. )
  // 새롭게 바뀐 함수가 리턴되어서 Double 컴포넌트는 다시 그려지게 된다.
  const double = useCallback(() => {
    console.log('Double Button 을 클릭했어요.')
    setCount(prev => prev * 2)
  }, [])

  return (
    <div>
      <p>count : {count}</p>
      <Decrement onClick={decrement} />
      <Increment onClick={increment} />
      <Double onClick={double} />
    </div>
  );
}

export default Parent3;