import {Meta, StoryFn} from '@storybook/react'
import {StyledButton} from '../components/StyledButton'
import MDXDocument from './StyledButton.mdx'

// 파일 안의 Story 의 설정(메타 데이터 객체)
export default {
  // 그룹명
  title: 'StyledButton (5) - 도큐먼트를 사용한다',
  // 사용하는 컴포넌트
  component: StyledButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      // 도큐먼트용의 mdx 컴포넌트를 지정한다.
      page: MDXDocument,
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