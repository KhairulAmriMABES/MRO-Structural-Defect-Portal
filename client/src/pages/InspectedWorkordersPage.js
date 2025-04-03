import React, { useState, useEffect } from 'react';
import WorkorderList from '../components/WorkorderList';
import WorkorderDetail from '../components/WorkorderDetail';
import { workorders as staticWorkorders } from '../data/workorders';

const InspectedWorkordersPage = () => {
  const [workorders, setWorkorders] = useState([]);
  const [selectedWorkorder, setSelectedWorkorder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', message: '', type: 'success' });

  useEffect(() => {
    // Filter workorders with images
    const inspectedWorkorders = staticWorkorders.filter(wo => wo.images && wo.images.length > 0);
    setWorkorders(inspectedWorkorders);
    setLoading(false);
  }, []);

  const showNotification = (title, message, type = 'success') => {
    setToastMessage({ title, message, type });
    setShowToast(true);
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleSelectWorkorder = (workorder) => {
    setSelectedWorkorder(workorder);
  };

  const handleAcceptMeasurement = async () => {
    if (!selectedWorkorder) return;
    
    setIsProcessing(true);
    try {
      // Simulated API call to AMOS
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log('Sending measurement to AMOS:', selectedWorkorder);
      // Here you would make the actual API call to AMOS
      
      // Update workorder status locally
      const updatedWorkorders = workorders.map(wo => 
        wo.workorderId === selectedWorkorder.workorderId 
          ? { ...wo, status: 'Accepted' }
          : wo
      );
      setWorkorders(updatedWorkorders);
      
      showNotification(
        'Measurement Accepted',
        'Data has been successfully sent to AMOS',
        'success'
      );
    } catch (error) {
      console.error('Error sending to AMOS:', error);
      showNotification(
        'Error',
        'Failed to send measurement to AMOS',
        'danger'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRejectMeasurement = async () => {
    if (!selectedWorkorder) return;
    
    setIsProcessing(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      // Update workorder status locally
      const updatedWorkorders = workorders.map(wo => 
        wo.workorderId === selectedWorkorder.workorderId 
          ? { ...wo, status: 'Rejected' }
          : wo
      );
      setWorkorders(updatedWorkorders);
      
      showNotification(
        'Measurement Rejected',
        'The measurement has been rejected',
        'danger'
      );
    } catch (error) {
      console.error('Error rejecting measurement:', error);
      showNotification(
        'Error',
        'Failed to reject measurement',
        'danger'
      );
    } finally {
      setIsProcessing(false);
    }
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
          listTitle="Inspected Workorders"
        />
      </div>
      <div className="col-md-8 col-lg-9 main-content">
        {selectedWorkorder ? (
          <>
            <WorkorderDetail workorder={selectedWorkorder} />
            <div className="text-center mt-4 mb-4">
              <button 
                className="btn btn-success btn-lg me-3"
                onClick={handleAcceptMeasurement}
                disabled={isProcessing || selectedWorkorder.status === 'Accepted'}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    Accept & Send to AMOS ✓
                  </>
                )}
              </button>
              <button 
                className="btn btn-danger btn-lg"
                onClick={handleRejectMeasurement}
                disabled={isProcessing || selectedWorkorder.status === 'Rejected'}
              >
                {isProcessing ? 'Processing...' : 'Reject Measurement ✗'}
              </button>
            </div>
          </>
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

        {/* Toast Notification */}
        <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
          <div 
            className={`toast ${showToast ? 'show' : ''}`} 
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true"
          >
            <div className={`toast-header bg-${toastMessage.type} text-white`}>
              <strong className="me-auto">{toastMessage.title}</strong>
              <small className="text-white">Just now</small>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              <div className="d-flex align-items-center">
                <span className="me-2">
                  {toastMessage.type === 'success' ? '✓' : '✗'}
                </span>
                <div>
                  {toastMessage.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectedWorkordersPage; 