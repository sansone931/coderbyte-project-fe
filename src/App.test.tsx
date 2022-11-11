import { render, screen } from '@testing-library/react';

import { App } from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText('React TypeScript Starter');
  expect(titleElement).toHaveStyleRule('color', '#0000cd');
});
