import {Meta} from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

// 파일 안의 Story 설정(메타 데이터 객체)
export default {
  // 그룹명
  title: 'StyledButton (2) - action을 사용한다',
  // 사용할 컴포넌트
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof StyledButton>

export const Primary = (props: any) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success = (props: any) => {
  return (
    <StyledButton {...props} variant="success">
      Primary
    </StyledButton>
  )
}

export const Transparent = (props: any) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}