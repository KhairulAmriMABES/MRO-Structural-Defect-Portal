import React, { useState, useEffect } from 'react';
import WorkorderList from '../components/WorkorderList';
import WorkorderDetail from '../components/WorkorderDetail';
import { workorders as staticWorkorders } from '../data/workorders';

const NewWorkordersPage = () => {
  const [workorders, setWorkorders] = useState([]);
  const [selectedWorkorder, setSelectedWorkorder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Filter workorders without images
    const newWorkorders = staticWorkorders.filter(wo => !wo.images || wo.images.length === 0);
    setWorkorders(newWorkorders);
    setLoading(false);
  }, []);

  const handleSelectWorkorder = (workorder) => {
    setSelectedWorkorder(workorder);
  };

  const handleDeployDrone = () => {
    setShowToast(true);
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="row">
      <div className="col-md-4 col-lg-3 sidebar">
        <WorkorderList 
          workorders={workorders}
          loading={loading}
          error={error}
          selectedWorkorderId={selectedWorkorder?.workorderId}
          onSelectWorkorder={handleSelectWorkorder}
          listTitle="New Workorders"
        />
      </div>
      <div className="col-md-8 col-lg-9 main-content">
        {selectedWorkorder ? (
          <WorkorderDetail workorder={selectedWorkorder} />
        ) : (
          <div className="select-message">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Select a Workorder</h5>
                <p className="card-text">Choose a workorder from the list to view its details.</p>
              </div>
            </div>
          </div>
        )}
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleDeployDrone}
          >
            Deploy Drone 🚁
          </button>
        </div>

        {/* Toast Notification */}
        <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
          <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-primary text-white">
              <strong className="me-auto">Drone Control System</strong>
              <small className="text-white">Just now</small>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
            </div>
            <div className="toast-body">
              <div className="d-flex align-items-center">
                <span className="me-2">🚁</span>
                <div>
                  <strong>Drone Deployment Initiated</strong>
                  <p className="mb-0">Drone is now en route to capture images of the selected workorder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWorkordersPage; 