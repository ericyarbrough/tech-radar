const quadrants = {
  Languages_or_Frameworks: 0,
  Infrastructure: 1,
  Datastores: 2,
  Techniques: 3,
};

const quadData = Object.keys(quadrants).map((key) => (
  { name: key }
));

const initialRadarData = {
  svg_id: 'radar',
  width: 1450,
  height: 1000,
  colors: {
    background: '#eff',
    grid: '#ccc',
    inactive: '#ddd',
  },
  title: 'Yet Another Tech Radar 📡 ',
  quadrants: quadData,
  rings: [
    { name: 'ADOPT', color: '#93c47d' },
    { name: 'TRIAL', color: '#93d2c2' },
    { name: 'ASSESS', color: '#fbdb84' },
    { name: 'HOLD', color: '#efafa9' },
  ],
  print_layout: true,
  entries: [
    {
      quadrant: quadrants.Infrastructure, ring: 1, label: 'OpenAPM.io', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 0, label: 'Swagger', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 0, label: 'Terraform', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 0, label: 'Kubernetes', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 1, label: 'Nomad', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'Ambassador', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'Kong', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'Traefik', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'Kops', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'Skaffold', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'KNative', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 1, label: 'Helm', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 2, label: 'FluxCD', moved: 0,
    },
    {
      quadrant: quadrants.Infrastructure, ring: 1, label: 'Serverless', moved: 0,
    },
    {
      quadrant: quadrants.Languages_or_Frameworks, ring: 0, label: 'Jest', moved: 0,
    },
    {
      quadrant: quadrants.Languages_or_Frameworks, ring: 1, label: 'Next.js', moved: 0,
    },
    {
      quadrant: quadrants.Languages_or_Frameworks, ring: 2, label: 'Go Fiber', moved: 0,
    },
    {
      quadrant: quadrants.Languages_or_Frameworks, ring: 2, label: 'Rocket.rs', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 0, label: 'MariaDB', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 0, label: 'Redis', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 1, label: 'MongoDB', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 1, label: 'Postgres', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 2, label: 'Cassandra', moved: 0,
    },
    {
      quadrant: quadrants.Datastores, ring: 2, label: 'Scylladb', moved: 0,
    },
    {
      quadrant: quadrants.Techniques, ring: 0, label: 'GitOps', moved: 0,
    },
  ],
  // ENTRIES
};

export default initialRadarData;
