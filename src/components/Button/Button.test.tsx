import Button, { ButtonPropTypes } from './Button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('If Button works properly', () => {
  test('If label rendered correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      label: 'Button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element).toHaveTextContent('Button');
  });

  test('If onClick is triggered', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropTypes = {
      label: 'Button',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
});

describe('If Snapshot rendered', () => {
  test('If snapshot rendered', () => {
    const ButtonProps: ButtonPropTypes = {
      label: 'Button'
    };

    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
