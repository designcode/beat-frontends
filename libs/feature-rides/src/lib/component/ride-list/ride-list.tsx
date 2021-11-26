import { debounce } from '@beat-frontends/shared/utils';
import { InfiniteScroll } from '@beat-frontends/ui';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRides } from '../../store/rides.slice';
import { RideState } from '../../store/store';
import { RideDetails } from './../ride-details/ride-details';

export function RideList() {
  const dispatch = useDispatch();
  const { entities, status, hasMoreEntities, currentPage } = useSelector(
    (state: RideState) => state.rides
  );

  useEffect(() => {
    if (entities.length < 1) {
      dispatch(
        fetchRides({
          page: 1,
        })
      );
    }
  }, [dispatch, entities.length]);

  return (
    <InfiniteScroll
      isLoading={status !== 'succeeded'}
      hasMoreData={hasMoreEntities}
      onBottomHit={() => {
        dispatch(
          fetchRides({
            page: currentPage + 1,
          })
        );
      }}
    >
      <h1>My Rides</h1>
      {entities.map((entity) => (
        <Link key={entity.id} to={`rides/${entity.id}`}>
          <RideDetails ride={entity} />
        </Link>
      ))}
    </InfiniteScroll>
  );
}

export default RideList;
