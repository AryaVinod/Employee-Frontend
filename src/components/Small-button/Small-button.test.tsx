import SmallButton, { ButtonPropTypes } from './Small-button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('If Small-button works properly', () => {
  const ButtonProps: ButtonPropTypes = {
    label: 'Button',
    color: 'blue'
  };

  test('If label rendered correctly', () => {
    render(<SmallButton {...ButtonProps} />);
    const element = screen.getByTestId('small-button-test');

    if (element) expect(element).toHaveTextContent('Button');
  });

  test('If color rendered correctly', () => {
    render(<SmallButton {...ButtonProps} />);
    const element = screen.getByTestId('small-button-test');

    if (element) expect(element.getAttribute('class')).toBe('blue-button');
  });
});
