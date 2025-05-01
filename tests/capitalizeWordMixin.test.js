import capitalizeWordMixin from '../src/mixins/capitalizeWordMixin.js';
import { describe, it, expect } from 'vitest';

const capitalizeWords = capitalizeWordMixin.methods.capitalizeWords;

describe('Mixin capitalizeWordMixin', () => {
  it('should capitalize each word correctly', () => {
    expect(capitalizeWords('hello world')).toBe('Hello Mundo');
  });

  it('should return empty string if input is undefined', () => {
    expect(capitalizeWords(undefined)).toBe('');
  });

  it('should works with words that have already been capitalized', () => {
    expect(capitalizeWords('Hello World')).toBe('Hello World');
  });

  it('should work with lower and upper case', () => {
    expect(capitalizeWords('helLo wOrlD')).toBe('Hello World');
  });
});
