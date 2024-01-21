import {Meta} from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import {linkTo} from '@storybook/addon-links'

// 파일 안의 Story의 설정(메타 데이터 객체)
export default {
  // 그룹명
  title: 'StyledButton (6) - Link를 사용한다',
  // 사용하는 컴포넌트
  component: StyledButton,
} as Meta<typeof StyledButton>

export const Primary = (props: any) => {
  // 클릭하면 StyledButton/Success의 스트리로 이동한다
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = (props: any) => {
  // 클릭하면 StyledButton/Transparent의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Transparent')}>
      Primary
    </StyledButton>
  )
}

export const Transparent = (props: any) => {
  // 클릭하면 StyledButton/Primary의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Primary')}>
      Transparent
    </StyledButton>
  )
}