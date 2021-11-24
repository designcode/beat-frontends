import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureRidesProps {}

const StyledFeatureRides = styled.div`
  color: pink;
`;

export function FeatureRides(props: FeatureRidesProps) {
  return (
    <StyledFeatureRides>
      <h1>Rides!</h1>
    </StyledFeatureRides>
  );
}

export default FeatureRides;
