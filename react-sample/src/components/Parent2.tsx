import React, {memo, useState} from 'react'

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
  return (
    <span>
      {isFizz ? `Fizz` : ``}
    </span>
  )
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props: BuzzProps) => {
  const { isBuzz, onClick } = props
  console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`)
  return (
    <span onClick={onClick}>
      {isBuzz ? `Buzz` : ``}
    </span>
  )
})

type InitialProps = {
  initialCount: number
}

function Parent2(props: InitialProps) {
  const [count, setCount] = useState(props.initialCount)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => {
    // Parent2 가 다시 그려지면서 onBuzClick 함수도 다시 만들어 진다.
    // 그로 인해 Memoization Component 인 Buzz 도 변경되었다고 인식해서
    // Buzz 컴포넌트가 다시 그려진다.
    console.log(`Buzz가 클릭되었습니다. isBuzz=${isBuzz}`)
  }
  console.log(`Parent가 다시 그려졌습니다. count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <p>{`현재 카운트 : ${count}`}</p>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </div>
  )
}

export default Parent2