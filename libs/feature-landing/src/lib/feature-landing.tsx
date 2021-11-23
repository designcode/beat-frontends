import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureLandingProps {}

const StyledFeatureLanding = styled.div`

`;

export function FeatureLanding(props: FeatureLandingProps) {
  return (
    <StyledFeatureLanding>
      <h1>Welcome to the Beat App!</h1>
    </StyledFeatureLanding>
  );
}

export default FeatureLanding;
