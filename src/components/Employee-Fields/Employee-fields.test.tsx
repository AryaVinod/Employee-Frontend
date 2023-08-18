import EmployeeField, { FieldPropTypes } from './Employee-fields';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('If Employee Field works properly', () => {
  test('Renders label and value when value is provided', () => {
    const FieldProps: FieldPropTypes = {
      label: 'Name',
      value: 'Arya'
    };

    render(<EmployeeField {...FieldProps} />);

    const labelElement = screen.getByText('Name');
    const valueElement = screen.getByText('Arya');

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
