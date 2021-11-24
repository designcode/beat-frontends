import { render } from '@testing-library/react';

import RideList from './ride-list';

describe('RideList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RideList />);
    expect(baseElement).toBeTruthy();
  });
});
