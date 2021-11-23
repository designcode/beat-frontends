import { render } from '@testing-library/react';

import FeatureLanding from './feature-landing';

describe('FeatureLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLanding />);
    expect(baseElement).toBeTruthy();
  });
});
