import { Card } from '@beat-frontends/ui';
import { RideEntity } from '@beat-frontends/shared/types';
import styled from '@emotion/styled';

const StyledRideList = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
  }
`;

export interface RideDetailsProps {
  ride: RideEntity;
  showMap?: boolean;
}

export function RideDetails(props: RideDetailsProps) {
  const ride = props.ride;
  const rideInfo = props.showMap ? ride.ride.map : ride.ride.dropoff;
  return (
    <StyledRideList>
      <Card>
        <div className="header">
          <div className="created">{ride.ride.created_at}</div>
          <div className="amount">{ride.ride.total}</div>
        </div>
        <div className="body">{rideInfo}</div>
      </Card>
    </StyledRideList>
  );
}

export default RideDetails;
