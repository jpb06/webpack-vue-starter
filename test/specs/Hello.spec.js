import { shallow } from '@vue/test-utils'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'tester'

    const wrapper = shallow(Hello, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hello tester!')
  })
})
