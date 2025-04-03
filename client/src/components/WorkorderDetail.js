import React from 'react';

const WorkorderDetail = ({ workorder }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '-';
    
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="workorder-detail">
      <div className="card mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Workorder: {workorder.workorderId}</h4>
          <span className={`badge ${getStatusBadgeClass(workorder.status)}`}>
            {workorder.status}
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h5>Aircraft Info</h5>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Registration</th>
                        <td>{workorder.aircraftRegistration}</td>
                      </tr>
                      <tr>
                        <th>Type</th>
                        <td>{workorder.aircraftType}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <h5>Defect Info</h5>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Type</th>
                        <td>
                          <span className={`badge ${getDefectTypeBadgeClass(workorder.defectType)}`}>
                            {workorder.defectType}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>Priority</th>
                        <td>
                          <span className={`badge ${getPriorityBadgeClass(workorder.priority)}`}>
                            {workorder.priority}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <h5>Defect Description</h5>
              <p>{workorder.defectDescription}</p>
              
              <h5>Defect Location</h5>
              <div className="row">
                <div className="col-md-6">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Frame</th>
                        <td>{workorder.defectLocation.frame}</td>
                      </tr>
                      <tr>
                        <th>Stringer</th>
                        <td>{workorder.defectLocation.stringer}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Lateral</th>
                        <td>{workorder.defectLocation.lateral}</td>
                      </tr>
                      <tr>
                        <th>Longitudinal</th>
                        <td>{workorder.defectLocation.longitudinal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h5>Dimensions</h5>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Length</th>
                        <td>{workorder.defectDimension.length} {workorder.defectDimension.unit}</td>
                      </tr>
                      <tr>
                        <th>Width</th>
                        <td>{workorder.defectDimension.width} {workorder.defectDimension.unit}</td>
                      </tr>
                      <tr>
                        <th>Depth</th>
                        <td>{workorder.defectDimension.depth} {workorder.defectDimension.unit}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <h5>Status</h5>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Reported</th>
                        <td>{formatDate(workorder.reportedDate)}</td>
                      </tr>
                      <tr>
                        <th>Assigned To</th>
                        <td>{workorder.assignedTo || 'Unassigned'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {workorder.images && workorder.images.length > 0 && (
                <div>
                  <h5>Images</h5>
                  <div className="row">
                    {workorder.images.map((image, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="card">
                          <div className="position-relative">
                            <img 
                              src={process.env.PUBLIC_URL + image}
                              alt={`${workorder.defectType} defect`}
                              className="card-img-top"
                              style={{ 
                                height: '200px',
                                objectFit: 'cover'
                              }}
                              onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src = `https://placehold.co/400x300/${getDefectColor(workorder.defectType)}/ffffff/png?text=${encodeURIComponent('Image Not Found')}`;
                              }}
                            />
                          </div>
                          <div className="card-body py-2">
                            <p className="card-text small mb-1">{image.description || `${workorder.defectType} image ${index + 1}`}</p>
                            <small className="text-muted">
                              {image.date ? formatDate(image.date) : '-'}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {workorder.notes && workorder.notes.length > 0 && (
                <div>
                  <h5>Notes</h5>
                  <div className="timeline">
                    {workorder.notes.map((note, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-item-content">
                          <p>{note.text}</p>
                          <div className="d-flex justify-content-between">
                            <span className="author">
                              <strong>{note.author}</strong>
                            </span>
                            <span className="date">{formatDate(note.date)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getDefectColor = (defectType) => {
  switch (defectType) {
    case 'Crack':
      return 'ff4444'; // Red
    case 'Corrosion':
      return 'ffbb33'; // Yellow
    case 'Dent':
      return '33b5e5'; // Blue
    case 'Delamination':
      return '9933cc'; // Purple
    case 'Scratch':
      return '00C851'; // Green
    default:
      return '2BBBAD'; // Teal
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

const getDefectTypeBadgeClass = (defectType) => {
  switch (defectType) {
    case 'Crack':
      return 'bg-danger';
    case 'Corrosion':
      return 'bg-warning text-dark';
    case 'Dent':
      return 'bg-info text-dark';
    case 'Delamination':
      return 'bg-dark';
    case 'Scratch':
      return 'bg-secondary';
    default:
      return 'bg-light text-dark';
  }
};

export default WorkorderDetail;
