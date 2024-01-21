import styled from "styled-components";
import {NextPage} from "next";

type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props => props.color)};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const Page: NextPage = () => {
  return (
    <div>
      {/*빨간색 문자, 테두리에 투명한 배경의 버튼을 표시한다.*/}
      <Button backgroundColor={`transparent`} color={`#FF0000`}>Hello</Button>
      {/*하얀색 문자, 테두리에 파란색 배경의 버튼을 표시한다.*/}
      <Button backgroundColor={`#1E90FF`} color={`white`}>World</Button>
    </div>
  )
}

export default Page