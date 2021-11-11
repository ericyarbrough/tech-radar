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
    { name: "Platforms" },
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
        "ring": 2,
        "label": "OpenAPM.io",
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Swagger",
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "Next.js",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Jest",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "MariaDB",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Redis",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 1,
        "label": "MongoDB",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 1,
        "label": "Postgres",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 2,
        "label": "Cassandra",
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 2,
        "label": "Scylladb",
        "moved": 0
      },
  ]
  //ENTRIES
}

export default initialRadarData;