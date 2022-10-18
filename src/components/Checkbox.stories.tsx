import { Checkbox, CheckboxProps } from './Checkbox'
import { getStorybook, Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {

  },
  decorators:  [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
        {Story()}
        <Text size='sm'>Lembrar de mim durante 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default : StoryObj<CheckboxProps> = {}