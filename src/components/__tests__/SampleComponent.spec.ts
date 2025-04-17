import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Sample from '../SampleComponent.vue'

describe('Sample', () => {
  it('renders properly', () => {
    const wrapper = mount(Sample, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
