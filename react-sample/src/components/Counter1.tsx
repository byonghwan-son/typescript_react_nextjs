import { useState } from "react"

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default Counter