import React, { useEffect, useRef } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modalSlice';

export default function Modal ({
  isOpen, title, children
}) {
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      dispatch(closeModal());
    }
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keyup', handleKeyUp);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return isOpen ? (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
      aria-modal="true"
      aria-hidden={!isOpen}
      role="dialog"
      tabIndex={-1}
    >
      <div className="modal-dialog" ref={modalRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h4>{title}</h4>
            <button
              type="button"
              className="close-button"
              onClick={() => dispatch(closeModal())}
              aria-label="Close Modal"
              data-testid="close-btn"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  ) : null;
}
