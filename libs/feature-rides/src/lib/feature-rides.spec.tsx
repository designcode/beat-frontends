import { render } from '@testing-library/react';

import FeatureRides from './feature-rides';

describe('FeatureRides', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureRides />);
    expect(baseElement).toBeTruthy();
  });
});
