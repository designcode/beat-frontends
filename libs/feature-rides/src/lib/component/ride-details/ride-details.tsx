import styled from '@emotion/styled';
import { Card } from '@beat-frontends/ui';
import { RideEntity } from '@beat-frontends/shared/types';
import { formateDate, formatCurrency } from '@beat-frontends/shared/utils';

const StyledRideDetails = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }

  img {
    width: 100%;
  }
`;

export interface RideDetailsProps {
  ride: RideEntity;
  showMap?: boolean;
}

export function RideDetails(props: RideDetailsProps) {
  const ride = props.ride;
  const rideInfo = props.showMap ? (
    <img src={ride.ride.map} alt={ride.ride.dropoff} />
  ) : (
    ride.ride.dropoff
  );
  return (
    <StyledRideDetails>
      <Card>
        <div className="header">
          <h3>{formateDate(ride.ride.created_at)}</h3>
          <strong>{formatCurrency(ride.ride.total)}</strong>
        </div>
        <div className="body">{rideInfo}</div>
      </Card>
    </StyledRideDetails>
  );
}

export default RideDetails;
