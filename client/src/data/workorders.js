// Static workorder data for GitHub Pages deployment
export const workorders = [
  {
    workorderId: "5000001",
    aircraftRegistration: "9M-MTA",
    aircraftType: "Airbus A330-300",
    defectDescription: "Surface crack detected on fuselage skin during routine inspection",
    defectLocation: {
      frame: "FR-45",
      stringer: "STR-22",
      lateral: "Right",
      longitudinal: "Aft of wing box"
    },
    defectType: "Crack",
    defectDimension: {
      length: 25.4,
      width: 0.8,
      depth: 1.2,
      unit: "mm"
    },
    reportedDate: "2025-03-15T08:30:00Z",
    status: "In Progress",
    priority: "High",
    assignedTo: "John Smith",
    images: ["/images/defects/cracks/cracks.png"],
    notes: [
      {
        text: "Initial inspection completed. Requires NDT for further assessment.",
        author: "Sarah Johnson",
        date: "2025-03-15T10:15:00Z"
      },
      {
        text: "NDT confirmed crack extends 3mm below surface. Requires immediate repair.",
        author: "Mike Chen",
        date: "2025-03-16T14:30:00Z"
      }
    ]
  },
  {
    workorderId: "5000002",
    aircraftRegistration: "9M-MTB",
    aircraftType: "Airbus A330-300",
    defectDescription: "Corrosion detected on wing attachment fitting",
    defectLocation: {
      frame: "FR-32",
      stringer: "STR-12",
      lateral: "Left",
      longitudinal: "Wing root area"
    },
    defectType: "Corrosion",
    defectDimension: {
      length: 75,
      width: 45,
      depth: 0.5,
      unit: "mm"
    },
    reportedDate: "2025-03-18T11:45:00Z",
    status: "Open",
    priority: "Medium",
    assignedTo: "Emma Wilson",
    images: ["/images/defects/corrosion/corrosion.png"],
    notes: [
      {
        text: "Surface corrosion identified during C-check. Requires cleaning and assessment.",
        author: "David Park",
        date: "2025-03-18T13:20:00Z"
      }
    ]
  },
  {
    workorderId: "5000004",
    aircraftRegistration: "9M-MTD",
    aircraftType: "Airbus A330-300",
    defectDescription: "Multiple dents on lower fuselage skin",
    defectLocation: {
      frame: "FR-52",
      stringer: "STR-28",
      lateral: "Center",
      longitudinal: "Forward cargo area"
    },
    defectType: "Dent",
    defectDimension: {
      length: 300,
      width: 150,
      depth: 3.8,
      unit: "mm"
    },
    reportedDate: "2025-03-20T16:20:00Z",
    status: "Open",
    priority: "Medium",
    assignedTo: "",
    images: ["/images/defects/dents/dents.png"],
    notes: [
      {
        text: "Multiple dents discovered during walkaround. Possible ground equipment contact.",
        author: "Captain Alex Rodriguez",
        date: "2025-03-20T16:30:00Z"
      }
    ]
  },
  {
    workorderId: "5000006",
    aircraftRegistration: "9M-MTF",
    aircraftType: "Airbus A330-300",
    defectDescription: "Lightning strike damage on vertical stabilizer",
    defectLocation: {
      frame: "FR-92",
      stringer: "STR-5",
      lateral: "Center",
      longitudinal: "Vertical stabilizer"
    },
    defectType: "Other",
    defectDimension: {
      length: 50,
      width: 50,
      depth: 5,
      unit: "mm"
    },
    reportedDate: "2025-03-25T22:10:00Z",
    status: "In Progress",
    priority: "High",
    assignedTo: "Lisa Johnson",
    images: ["/images/defects/puncture/puncture.png"],
    notes: [
      {
        text: "Lightning strike reported during flight. Inspection reveals damage to composite structure.",
        author: "Captain James Wilson",
        date: "2025-03-25T23:00:00Z"
      },
      {
        text: "NDT inspection completed. Damage confined to outer skin layer.",
        author: "Lisa Johnson",
        date: "2025-03-26T10:30:00Z"
      }
    ]
  },
  {
    workorderId: "5000021",
    aircraftRegistration: "9M-MTN",
    aircraftType: "Airbus A330-300",
    defectDescription: "Impact damage on radome surface",
    defectLocation: {
      frame: "FR-2",
      stringer: "STR-0",
      lateral: "Center",
      longitudinal: "Radome"
    },
    defectType: "Dent",
    defectDimension: {
      length: 180,
      width: 120,
      depth: 5.5,
      unit: "mm"
    },
    reportedDate: "2025-03-27T09:15:00Z",
    status: "Open",
    priority: "High",
    assignedTo: "Radome Specialist",
    images: [],
    notes: [
      {
        text: "Significant impact damage observed on radome surface during pre-flight inspection.",
        author: "Line Inspector",
        date: "2025-03-27T09:30:00Z"
      },
      {
        text: "Initial assessment suggests possible bird strike. NDT inspection required.",
        author: "Radome Specialist",
        date: "2025-03-27T11:45:00Z"
      }
    ]
  },
  {
    workorderId: "5000022",
    aircraftRegistration: "9M-MTO",
    aircraftType: "Airbus A330-300",
    defectDescription: "Disbond on wing-to-body fairing",
    defectLocation: {
      frame: "FR-35",
      stringer: "STR-8",
      lateral: "Left",
      longitudinal: "Wing root"
    },
    defectType: "Delamination",
    defectDimension: {
      length: 300,
      width: 50,
      depth: 2.0,
      unit: "mm"
    },
    reportedDate: "2025-03-28T14:20:00Z",
    status: "Pending Review",
    priority: "Medium",
    assignedTo: "Composite Team",
    images: [],
    notes: [
      {
        text: "Disbond detected during scheduled maintenance inspection.",
        author: "Maintenance Inspector",
        date: "2025-03-28T15:00:00Z"
      },
      {
        text: "Ultrasonic inspection reveals delamination between composite layers.",
        author: "NDT Technician",
        date: "2025-03-28T16:30:00Z"
      }
    ]
  }
  // Add more workorders as needed
]; 