import styled from "styled-components";
import {NextPage} from "next";

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Theme 에서 참조한 색상을 사용하고 있습니다.</Text>
    </div>
  )
}

export default Page