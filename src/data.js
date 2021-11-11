const initialRadarData = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Tech Radar",
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Tools" },
    { name: "Techniques" },
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  entries: [
      {
        "quadrant": 1,
        "ring": 0,
        "label": "AWS DynamoDB",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Exasol",
        "active": true,
        "moved": 1
      }
  ]
  //ENTRIES
}

export default initialRadarData;