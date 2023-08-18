import Input, { InputPropTypes } from './input';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('if input is working properly', () => {
  test('if value is correctly rendered', () => {
    const inputprops: InputPropTypes = {
      value: 'value',
      label: 'label',
      type: 'text',
      placeholder: 'placeholder'
    };

    render(<Input {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    expect(elem.getAttribute('value')).toBe('value');
  });
  test('if type is correctly rendered', () => {
    const inputprops: InputPropTypes = {
      value: 'value',
      label: 'label',
      type: 'text',
      placeholder: 'placeholder'
    };

    render(<Input {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    expect(elem.getAttribute('type')).toBe('text');
  });
});
