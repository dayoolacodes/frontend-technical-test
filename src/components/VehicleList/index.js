import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import { FullPageSpinner } from '../Loader';
import ErrorComponent from '../ErrorComponent';
import Modal from '../Modal';
import ExtraInfo from '../ExtraInfo';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  const isOpen = useSelector((state) => state.modal.isOpen);
  const vehicleId = useSelector((state) => state.modal.vehicleId);

  if (loading) {
    return <FullPageSpinner />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }
  const extra = vehicles.find((e) => e.id === vehicleId);

  return (
    <div className="VehicleList" data-testid="results">
      {extra && extra.meta ? (
        <Modal {...{ isOpen, title: 'More Details' }}>
          <ExtraInfo {...{ meta: extra.meta }} />
        </Modal>
      ) : null}
      {vehicles.map(
        ({
          description, id, media, modelYear, price, meta
        }, index) => {
          return (
            <VehicleCard
              key={id}
              {...{
                description,
                id,
                media,
                modelYear,
                price,
                meta,
                index,
              }}
            />
          );
        }
      )}
    </div>
  );
}
