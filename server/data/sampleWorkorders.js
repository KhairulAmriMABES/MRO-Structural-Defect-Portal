const sampleWorkorders = [
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
    reportedDate: new Date("2025-03-15T08:30:00Z"),
    status: "In Progress",
    priority: "High",
    assignedTo: "John Smith",
    images: ["/images/defect1-1.jpg", "/images/defect1-2.jpg"],
    notes: [
      {
        text: "Initial inspection completed. Requires NDT for further assessment.",
        author: "Sarah Johnson",
        date: new Date("2025-03-15T10:15:00Z")
      },
      {
        text: "NDT confirmed crack extends 3mm below surface. Requires immediate repair.",
        author: "Mike Chen",
        date: new Date("2025-03-16T14:30:00Z")
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
    reportedDate: new Date("2025-03-18T11:45:00Z"),
    status: "Open",
    priority: "Medium",
    assignedTo: "Emma Wilson",
    images: ["/images/defect2-1.jpg"],
    notes: [
      {
        text: "Surface corrosion identified during C-check. Requires cleaning and assessment.",
        author: "David Park",
        date: new Date("2025-03-18T13:20:00Z")
      }
    ]
  },
  {
    workorderId: "5000003",
    aircraftRegistration: "9M-MTC",
    aircraftType: "Airbus A330-300",
    defectDescription: "Delamination detected on composite panel",
    defectLocation: {
      frame: "FR-78",
      stringer: "STR-34",
      lateral: "Right",
      longitudinal: "Aft pressure bulkhead"
    },
    defectType: "Delamination",
    defectDimension: {
      length: 120,
      width: 80,
      depth: 2.5,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-10T09:15:00Z"),
    status: "Pending Review",
    priority: "Critical",
    assignedTo: "Robert Taylor",
    images: ["/images/defect3-1.jpg", "/images/defect3-2.jpg", "/images/defect3-3.jpg"],
    notes: [
      {
        text: "Delamination detected during ultrasonic inspection. Possible impact damage.",
        author: "Jennifer Lee",
        date: new Date("2025-03-10T11:30:00Z")
      },
      {
        text: "Engineering assessment completed. Panel requires replacement.",
        author: "Robert Taylor",
        date: new Date("2025-03-12T15:45:00Z")
      },
      {
        text: "Replacement panel ordered. ETA 5 business days.",
        author: "Procurement Team",
        date: new Date("2025-03-13T09:00:00Z")
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
    reportedDate: new Date("2025-03-20T16:20:00Z"),
    status: "Open",
    priority: "Medium",
    assignedTo: "",
    images: ["/images/defect4-1.jpg", "/images/defect4-2.jpg"],
    notes: [
      {
        text: "Multiple dents discovered during walkaround. Possible ground equipment contact.",
        author: "Captain Alex Rodriguez",
        date: new Date("2025-03-20T16:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000005",
    aircraftRegistration: "9M-MTE",
    aircraftType: "Airbus A330-300",
    defectDescription: "Deep scratch on cockpit window #3",
    defectLocation: {
      frame: "FR-5",
      stringer: "N/A",
      lateral: "Right",
      longitudinal: "Cockpit"
    },
    defectType: "Scratch",
    defectDimension: {
      length: 250,
      width: 2,
      depth: 0.6,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-22T07:45:00Z"),
    status: "Closed",
    priority: "High",
    assignedTo: "Thomas Wright",
    images: ["/images/defect5-1.jpg"],
    notes: [
      {
        text: "Deep scratch detected during pre-flight inspection. Window requires replacement.",
        author: "First Officer Maria Garcia",
        date: new Date("2025-03-22T08:00:00Z")
      },
      {
        text: "Window replacement completed and pressure tested. Aircraft returned to service.",
        author: "Thomas Wright",
        date: new Date("2025-03-23T14:15:00Z")
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
    reportedDate: new Date("2025-03-25T22:10:00Z"),
    status: "In Progress",
    priority: "High",
    assignedTo: "Lisa Johnson",
    images: ["/images/defect6-1.jpg", "/images/defect6-2.jpg"],
    notes: [
      {
        text: "Lightning strike reported during flight. Inspection reveals damage to composite structure.",
        author: "Captain James Wilson",
        date: new Date("2025-03-25T23:00:00Z")
      },
      {
        text: "NDT inspection completed. Damage confined to outer skin layer.",
        author: "Lisa Johnson",
        date: new Date("2025-03-26T10:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000007",
    aircraftRegistration: "9M-MTG",
    aircraftType: "Airbus A330-300",
    defectDescription: "Hydraulic fluid leak detected at landing gear bay",
    defectLocation: {
      frame: "FR-65",
      stringer: "STR-18",
      lateral: "Left",
      longitudinal: "Main landing gear bay"
    },
    defectType: "Other",
    defectDimension: {
      length: 10,
      width: 10,
      depth: 0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-14T13:25:00Z"),
    status: "Closed",
    priority: "Medium",
    assignedTo: "Richard Wong",
    images: ["/images/defect7-1.jpg"],
    notes: [
      {
        text: "Hydraulic fluid leak identified during pre-flight inspection.",
        author: "Maintenance Crew",
        date: new Date("2025-03-14T13:30:00Z")
      },
      {
        text: "O-ring replaced on hydraulic line connection. Leak test performed - no leaks found.",
        author: "Richard Wong",
        date: new Date("2025-03-14T16:45:00Z")
      }
    ]
  },
  {
    workorderId: "5000008",
    aircraftRegistration: "9M-MTH",
    aircraftType: "Airbus A330-300",
    defectDescription: "Corrosion on cargo door hinge mechanism",
    defectLocation: {
      frame: "FR-38",
      stringer: "STR-25",
      lateral: "Right",
      longitudinal: "Forward cargo door"
    },
    defectType: "Corrosion",
    defectDimension: {
      length: 85,
      width: 30,
      depth: 1.2,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-17T09:40:00Z"),
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Carlos Mendez",
    images: ["/images/defect8-1.jpg", "/images/defect8-2.jpg"],
    notes: [
      {
        text: "Corrosion identified on cargo door hinge mechanism during scheduled maintenance.",
        author: "Inspection Team",
        date: new Date("2025-03-17T10:15:00Z")
      },
      {
        text: "Corrosion removal in progress. Will require protective coating application.",
        author: "Carlos Mendez",
        date: new Date("2025-03-18T11:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000009",
    aircraftRegistration: "9M-MTI",
    aircraftType: "Airbus A330-300",
    defectDescription: "Cracked floor beam in passenger cabin",
    defectLocation: {
      frame: "FR-42",
      stringer: "STR-0",
      lateral: "Center",
      longitudinal: "Mid-cabin"
    },
    defectType: "Crack",
    defectDimension: {
      length: 45,
      width: 0.5,
      depth: 3.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-19T14:20:00Z"),
    status: "Pending Review",
    priority: "High",
    assignedTo: "Engineering Team",
    images: ["/images/defect9-1.jpg"],
    notes: [
      {
        text: "Crack found in floor beam during heavy maintenance check.",
        author: "Structural Inspector",
        date: new Date("2025-03-19T15:00:00Z")
      },
      {
        text: "Engineering analysis in progress. Temporary repair approved.",
        author: "Engineering Team",
        date: new Date("2025-03-20T10:45:00Z")
      }
    ]
  },
  {
    workorderId: "5000010",
    aircraftRegistration: "9M-MTJ",
    aircraftType: "Airbus A330-300",
    defectDescription: "Damaged weather radar antenna",
    defectLocation: {
      frame: "FR-8",
      stringer: "STR-0",
      lateral: "Center",
      longitudinal: "Nose radome"
    },
    defectType: "Other",
    defectDimension: {
      length: 200,
      width: 150,
      depth: 10,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-21T08:15:00Z"),
    status: "Open",
    priority: "Medium",
    assignedTo: "",
    images: ["/images/defect10-1.jpg"],
    notes: [
      {
        text: "Weather radar showing intermittent faults. Physical inspection revealed damage to antenna.",
        author: "Avionics Technician",
        date: new Date("2025-03-21T09:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000011",
    aircraftRegistration: "9M-MXA",
    aircraftType: "Boeing 737-800",
    defectDescription: "Multiple dents on leading edge of right wing",
    defectLocation: {
      frame: "WS-185",
      stringer: "N/A",
      lateral: "Right",
      longitudinal: "Wing leading edge"
    },
    defectType: "Dent",
    defectDimension: {
      length: 120,
      width: 80,
      depth: 4.5,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-12T17:30:00Z"),
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Wing Repair Team",
    images: ["/images/defect11-1.jpg", "/images/defect11-2.jpg"],
    notes: [
      {
        text: "Bird strike reported during approach. Multiple dents found on wing leading edge.",
        author: "Captain Michael Brown",
        date: new Date("2025-03-12T18:00:00Z")
      },
      {
        text: "Damage assessment completed. Leading edge panel replacement required.",
        author: "Wing Repair Team",
        date: new Date("2025-03-13T10:15:00Z")
      }
    ]
  },
  {
    workorderId: "5000012",
    aircraftRegistration: "9M-MXB",
    aircraftType: "Boeing 737-800",
    defectDescription: "Cracked window in passenger cabin",
    defectLocation: {
      frame: "BS-500",
      stringer: "STR-10",
      lateral: "Left",
      longitudinal: "Row 15 window"
    },
    defectType: "Crack",
    defectDimension: {
      length: 75,
      width: 0.2,
      depth: 2.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-16T11:20:00Z"),
    status: "Closed",
    priority: "Medium",
    assignedTo: "Cabin Maintenance",
    images: ["/images/defect12-1.jpg"],
    notes: [
      {
        text: "Passenger reported cracked window during flight. Cabin crew confirmed hairline crack in outer pane.",
        author: "Lead Flight Attendant",
        date: new Date("2025-03-16T12:00:00Z")
      },
      {
        text: "Window assembly replaced and pressure tested. Aircraft returned to service.",
        author: "Cabin Maintenance",
        date: new Date("2025-03-17T09:45:00Z")
      }
    ]
  },
  {
    workorderId: "5000013",
    aircraftRegistration: "9M-MXC",
    aircraftType: "Boeing 737-800",
    defectDescription: "APU exhaust duct with heat damage",
    defectLocation: {
      frame: "BS-950",
      stringer: "STR-0",
      lateral: "Center",
      longitudinal: "Tail cone"
    },
    defectType: "Other",
    defectDimension: {
      length: 150,
      width: 150,
      depth: 1.5,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-18T15:10:00Z"),
    status: "Open",
    priority: "Low",
    assignedTo: "",
    images: ["/images/defect13-1.jpg"],
    notes: [
      {
        text: "Heat damage observed on APU exhaust duct during routine inspection.",
        author: "Line Maintenance",
        date: new Date("2025-03-18T16:00:00Z")
      }
    ]
  },
  {
    workorderId: "5000014",
    aircraftRegistration: "9M-MXD",
    aircraftType: "Boeing 737-800",
    defectDescription: "Delamination on rudder composite panel",
    defectLocation: {
      frame: "BS-910",
      stringer: "N/A",
      lateral: "Center",
      longitudinal: "Rudder"
    },
    defectType: "Delamination",
    defectDimension: {
      length: 200,
      width: 100,
      depth: 3.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-20T09:30:00Z"),
    status: "Pending Review",
    priority: "High",
    assignedTo: "Composite Repair Team",
    images: ["/images/defect14-1.jpg", "/images/defect14-2.jpg"],
    notes: [
      {
        text: "Delamination detected during tap test inspection of rudder.",
        author: "NDT Technician",
        date: new Date("2025-03-20T10:45:00Z")
      },
      {
        text: "Ultrasonic inspection confirms delamination between plies. Engineering evaluation required.",
        author: "Composite Repair Team",
        date: new Date("2025-03-21T14:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000015",
    aircraftRegistration: "9M-MXE",
    aircraftType: "Boeing 737-800",
    defectDescription: "Corroded electrical connector in wheel well",
    defectLocation: {
      frame: "BS-650",
      stringer: "STR-15",
      lateral: "Right",
      longitudinal: "Main landing gear bay"
    },
    defectType: "Corrosion",
    defectDimension: {
      length: 25,
      width: 25,
      depth: 0.5,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-22T13:40:00Z"),
    status: "Closed",
    priority: "Medium",
    assignedTo: "Avionics Team",
    images: ["/images/defect15-1.jpg"],
    notes: [
      {
        text: "Corrosion found on electrical connector in wheel well during scheduled maintenance.",
        author: "Electrical Technician",
        date: new Date("2025-03-22T14:15:00Z")
      },
      {
        text: "Connector replaced and sealed with protective coating. Functional test completed successfully.",
        author: "Avionics Team",
        date: new Date("2025-03-23T10:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000016",
    aircraftRegistration: "9M-MTK",
    aircraftType: "Airbus A330-300",
    defectDescription: "Damaged acoustic panel in engine inlet cowl",
    defectLocation: {
      frame: "N/A",
      stringer: "N/A",
      lateral: "Left",
      longitudinal: "Engine #1 inlet"
    },
    defectType: "Other",
    defectDimension: {
      length: 300,
      width: 150,
      depth: 15,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-24T08:20:00Z"),
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Powerplant Team",
    images: ["/images/defect16-1.jpg"],
    notes: [
      {
        text: "Damaged acoustic panel discovered during engine visual inspection.",
        author: "Engine Inspector",
        date: new Date("2025-03-24T09:15:00Z")
      },
      {
        text: "Panel removal in progress. Replacement part ordered from manufacturer.",
        author: "Powerplant Team",
        date: new Date("2025-03-25T11:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000017",
    aircraftRegistration: "9M-MXF",
    aircraftType: "Boeing 737-800",
    defectDescription: "Cracked flap track fairing",
    defectLocation: {
      frame: "WS-220",
      stringer: "N/A",
      lateral: "Right",
      longitudinal: "Outboard flap track"
    },
    defectType: "Crack",
    defectDimension: {
      length: 150,
      width: 0.8,
      depth: 5.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-15T16:50:00Z"),
    status: "Open",
    priority: "Low",
    assignedTo: "",
    images: ["/images/defect17-1.jpg"],
    notes: [
      {
        text: "Crack found on flap track fairing during walk-around inspection.",
        author: "Line Maintenance",
        date: new Date("2025-03-15T17:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000018",
    aircraftRegistration: "9M-MTL",
    aircraftType: "Airbus A330-300",
    defectDescription: "Scratched passenger window",
    defectLocation: {
      frame: "FR-55",
      stringer: "STR-10",
      lateral: "Right",
      longitudinal: "Row 25 window"
    },
    defectType: "Scratch",
    defectDimension: {
      length: 100,
      width: 1.0,
      depth: 0.3,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-26T10:15:00Z"),
    status: "Pending Review",
    priority: "Low",
    assignedTo: "Cabin Maintenance",
    images: ["/images/defect18-1.jpg"],
    notes: [
      {
        text: "Passenger reported scratched window affecting visibility.",
        author: "Cabin Crew",
        date: new Date("2025-03-26T11:00:00Z")
      },
      {
        text: "Inspection completed. Scratch is within acceptable limits but monitoring recommended.",
        author: "Cabin Maintenance",
        date: new Date("2025-03-26T14:45:00Z")
      }
    ]
  },
  {
    workorderId: "5000019",
    aircraftRegistration: "9M-MXG",
    aircraftType: "Boeing 737-800",
    defectDescription: "Dented forward cargo door",
    defectLocation: {
      frame: "BS-540",
      stringer: "STR-22",
      lateral: "Right",
      longitudinal: "Forward cargo door"
    },
    defectType: "Dent",
    defectDimension: {
      length: 250,
      width: 150,
      depth: 8.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-23T18:30:00Z"),
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Structural Repair Team",
    images: ["/images/defect19-1.jpg", "/images/defect19-2.jpg"],
    notes: [
      {
        text: "Dent on cargo door likely caused by ground handling equipment.",
        author: "Ground Crew Supervisor",
        date: new Date("2025-03-23T19:00:00Z")
      },
      {
        text: "Dent mapping completed. Repair scheme being developed.",
        author: "Structural Repair Team",
        date: new Date("2025-03-24T13:15:00Z")
      }
    ]
  },
  {
    workorderId: "5000020",
    aircraftRegistration: "9M-MTM",
    aircraftType: "Airbus A330-300",
    defectDescription: "Worn brake assembly on main landing gear",
    defectLocation: {
      frame: "FR-68",
      stringer: "STR-0",
      lateral: "Left",
      longitudinal: "Main landing gear"
    },
    defectType: "Other",
    defectDimension: {
      length: 450,
      width: 450,
      depth: 5.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-19T07:45:00Z"),
    status: "Closed",
    priority: "High",
    assignedTo: "Landing Gear Team",
    images: ["/images/defect20-1.jpg"],
    notes: [
      {
        text: "Brake wear indicators showing beyond limits during inspection.",
        author: "Line Maintenance",
        date: new Date("2025-03-19T08:30:00Z")
      },
      {
        text: "Brake assembly replaced. Functional and leak checks completed successfully.",
        author: "Landing Gear Team",
        date: new Date("2025-03-19T14:00:00Z")
      },
      {
        text: "Aircraft returned to service after successful test taxi.",
        author: "Maintenance Control",
        date: new Date("2025-03-19T16:30:00Z")
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
    reportedDate: new Date("2025-03-27T09:15:00Z"),
    status: "Open",
    priority: "High",
    assignedTo: "Radome Specialist",
    images: [],
    notes: [
      {
        text: "Significant impact damage observed on radome surface during pre-flight inspection.",
        author: "Line Inspector",
        date: new Date("2025-03-27T09:30:00Z")
      },
      {
        text: "Initial assessment suggests possible bird strike. NDT inspection required.",
        author: "Radome Specialist",
        date: new Date("2025-03-27T11:45:00Z")
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
    reportedDate: new Date("2025-03-28T14:20:00Z"),
    status: "Pending Review",
    priority: "Medium",
    assignedTo: "Composite Team",
    images: [],
    notes: [
      {
        text: "Disbond detected during scheduled maintenance inspection.",
        author: "Maintenance Inspector",
        date: new Date("2025-03-28T15:00:00Z")
      },
      {
        text: "Ultrasonic inspection reveals delamination between composite layers.",
        author: "NDT Technician",
        date: new Date("2025-03-28T16:30:00Z")
      }
    ]
  },
  {
    workorderId: "5000023",
    aircraftRegistration: "9M-MTP",
    aircraftType: "Airbus A330-300",
    defectDescription: "Multiple cracks in aft pressure bulkhead",
    defectLocation: {
      frame: "FR-80",
      stringer: "STR-15",
      lateral: "Center",
      longitudinal: "Aft pressure bulkhead"
    },
    defectType: "Crack",
    defectDimension: {
      length: 75,
      width: 0.3,
      depth: 4.0,
      unit: "mm"
    },
    reportedDate: new Date("2025-03-29T11:30:00Z"),
    status: "In Progress",
    priority: "Critical",
    assignedTo: "Structural Team",
    images: [],
    notes: [
      {
        text: "Multiple cracks discovered during D-check inspection.",
        author: "Heavy Maintenance Inspector",
        date: new Date("2025-03-29T12:15:00Z")
      },
      {
        text: "NDT inspection completed. Engineering assessment required for repair scheme.",
        author: "NDT Lead",
        date: new Date("2025-03-29T15:45:00Z")
      },
      {
        text: "Temporary repair scheme approved. Permanent repair to be scheduled.",
        author: "Engineering Team",
        date: new Date("2025-03-30T09:00:00Z")
      }
    ]
  }
];

module.exports = sampleWorkorders;
