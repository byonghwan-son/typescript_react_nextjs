import {Meta, StoryFn} from '@storybook/react'
import {StyledButton} from '../components/StyledButton'

// 파일 안의 Story 의 설정(메타 데이터 객체)
export default {
  // 그룹명
  title: 'StyledButton (4) - Control 을 사용한다',
  // 사용하는 컴포넌트
  component: StyledButton,
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: ['primary', 'success', 'transparent']
    },
    children: {
      control: {type: 'text'}
    }
  }
} as Meta<typeof StyledButton>

const Template: StoryFn<typeof StyledButton> = (args: any) => <StyledButton {...args} />

// bind 를 호출해 스토리를 작성
export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'primary'
}