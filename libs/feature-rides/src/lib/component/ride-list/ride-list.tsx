import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from '@beat-frontends/ui';
import { fetchRides } from '../../store/rides.slice';
import { RideState } from '../../store/store';

export function RideList() {
  const dispatch = useDispatch();
  const { entities, status } = useSelector((state: RideState) => state.rides);

  useEffect(() => {
    if (!entities.length) {
      dispatch(fetchRides());
    }
  }, [dispatch, entities.length]);

  if (status === 'succeeded') {
    return (
      <React.Fragment>
        <h1>My Rides</h1>
        {entities.map((ride) => (
          <Link key={ride.id} to={`rides/${ride.id}`}>
            <Card>
              <p>{ride.ride.total}</p>
            </Card>
          </Link>
        ))}
      </React.Fragment>
    );
  }

  return <h1>{status}!</h1>;
}

export default RideList;
