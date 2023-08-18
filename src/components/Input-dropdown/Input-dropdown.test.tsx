import InputDropDown, { InputPropTypes } from './Input-dropdown';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('if input is working properly', () => {
  test('if value is correctly rendered', () => {
    const inputprops: InputPropTypes = {
      value: 'value',
      label: 'label',
      type: 'text',
      placeholder: 'placeholder',
      options: [{ label: 'label', id: 'id' }]
    };

    render(<InputDropDown {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    if (elem) expect(elem.getAttribute('value')).toBe('value');
  });
  test('if type is correctly rendered', () => {
    const inputprops: InputPropTypes = {
      value: 'value',
      label: 'label',
      type: 'text',
      placeholder: 'placeholder',
      options: [{ label: 'label', id: 'id' }]
    };

    render(<InputDropDown {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    if (elem) expect(elem.getAttribute('type')).toBe('text');
  });
});
