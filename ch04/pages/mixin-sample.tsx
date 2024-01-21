import styled, { css } from "styled-components";
import {NextPage} from "next";

// 혼합형 ( 사전에 정의한 스타일을 추가함)
const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`

const font = css`
  color: #1e90ff;
  font-size: 2em;
`

const Button = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redBox}
  ${font}
`

const Text = styled.p`
  font-weight: bold;
  ${font}
`

const Page: NextPage = () => {
  return (
    <div>
      {/*파란색 문자, 빨간색 경계선의 버튼을 표시한다.*/}
      <Button>Hello</Button>
      {/*파란색 문자의 텍스트를 표시한다.*/}
      <Text>World</Text>
    </div>
  )
}

export default Page