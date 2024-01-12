import React from 'react'

const TitleContext = React.createContext('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {/* Consumer 바로 아래 함수를 두고, Context 값을 참조한다. */}
      {
        (title) => {
          return <h1>{title}</h1>
        }
      }
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* Header에서 Title로는 아무런 데이터를 전달하지 않는다. 중간자. */}
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page