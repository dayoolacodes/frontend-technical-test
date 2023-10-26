import React from 'react';
import './style.scss';

export function FullPageSpinner() {
  return (
    <div className="container" data-testid="loading">
      <div className="spinner" aria-label="loading" />
    </div>
  );
}

export function Spinner() {
  return (
    <div className="container-inline">
      <div className="spinner" aria-label="loading" />
    </div>
  );
}
