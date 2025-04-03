import React from 'react';

const WorkorderList = ({ workorders, loading, error, selectedWorkorderId, onSelectWorkorder, listTitle = "Workorders" }) => {
  if (loading) {
    return (
      <div className="workorder-list p-2">
        <h4 className="mb-2">{listTitle}</h4>
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="workorder-list p-2">
        <h4 className="mb-2">{listTitle}</h4>
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="workorder-list p-2">
      <h4 className="mb-2">{listTitle} ({workorders.length})</h4>
      {workorders.length === 0 ? (
        <div className="alert alert-info py-2">No workorders found.</div>
      ) : (
        <div className="list-group">
          {workorders.map((workorder) => (
            <button
              key={workorder.workorderId}
              className={`list-group-item list-group-item-action ${
                selectedWorkorderId === workorder.workorderId ? 'active' : ''
              }`}
              onClick={() => onSelectWorkorder(workorder)}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{workorder.workorderId}</h5>
                <small className={`badge ${getPriorityBadgeClass(workorder.priority)}`}>
                  {workorder.priority}
                </small>
              </div>
              <p className="mb-1">{workorder.aircraftRegistration}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small>{workorder.defectType}</small>
                <small className={`badge ${getStatusBadgeClass(workorder.status)}`}>
                  {workorder.status}
                </small>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const getPriorityBadgeClass = (priority) => {
  switch (priority) {
    case 'Critical':
      return 'bg-danger';
    case 'High':
      return 'bg-warning text-dark';
    case 'Medium':
      return 'bg-info text-dark';
    case 'Low':
      return 'bg-success';
    default:
      return 'bg-secondary';
  }
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Open':
      return 'bg-secondary';
    case 'In Progress':
      return 'bg-primary';
    case 'Pending Review':
      return 'bg-warning text-dark';
    case 'Closed':
      return 'bg-success';
    default:
      return 'bg-secondary';
  }
};

export default WorkorderList;
