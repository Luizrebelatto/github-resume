import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Home from '../src/screens/home.vue';

describe('Component Home', () => {
  it('should render button and input', () => {
    const wrapper = mount(Home)

    const input = wrapper.find('input.input')
    const button = wrapper.find('button.neon-button')

    expect(input.exists()).toBe(true)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Search')
  })
});
