import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureLandingProps {}

const StyledFeatureLanding = styled.div``;

export function FeatureLanding(props: FeatureLandingProps) {
  return (
    <StyledFeatureLanding>
      <h1>Welcome to the Beat App!</h1>
      <p>
        Beat revolutionizes the way you move in the city. Ride with the first
        and only app with professional drivers that offers you fast pick-up
        times. Beat Tesla is the largest private fleet of Tesla cars in Latin
        America and offers premium, high-tech rides. Beat. Mobility, redefined.
      </p>
    </StyledFeatureLanding>
  );
}

export default FeatureLanding;
