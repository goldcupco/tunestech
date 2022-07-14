import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Button } from './index';

describe('components | buttons', () => {
  test('Render the Button default', () => {
    const { container } = render(withTheme(<Button>Some text stuff</Button>));
    expect(container).toMatchSnapshot();
  });

  test('Render the Button with variant primary', () => {
    const { container } = render(withTheme(<Button variant="primary">Some text stuff</Button>));
    expect(container).toMatchSnapshot();
  });

  test('Render the cursor ponter when prop onClick is set', () => {
    const { container } = render(withTheme(<Button onClick={jest.fn}>Some text stuff</Button>));
    expect(container).toMatchSnapshot();
  });
});
