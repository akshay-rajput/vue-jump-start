import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Sample from '../SampleComponent.vue'

describe('Sample', () => {
  it('renders properly', () => {
    const wrapper = mount(Sample, { props: { message: 'Hello Vitest' } })
    const messageWrapper = wrapper.find('#message')
    expect(messageWrapper.text()).toBe('Message prop: Hello Vitest')
  })
})
