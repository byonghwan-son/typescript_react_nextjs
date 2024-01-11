const Hello = () => {

  const onClick = (): void => {
    alert('hello');
  }

  const text: string = 'Hello, React';

  return (
    <>
      <div onClick={onClick}>
        {text}
      </div>
    </>
  )
}

export default Hello;