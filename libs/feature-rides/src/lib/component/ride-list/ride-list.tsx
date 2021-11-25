import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRides } from '../../store/rides.slice';
import { RideState } from '../../store/store';
import { RideDetails } from './../ride-details/ride-details';

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
        {entities.map((entity) => (
          <Link key={entity.id} to={`rides/${entity.id}`}>
            <RideDetails ride={entity} />
          </Link>
        ))}
      </React.Fragment>
    );
  }

  return <h1>{status}!</h1>;
}

export default RideList;
