const generateValues = (start, end, step = 1) => {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, idx) => start + idx * step);
};

const theme = {
  display: [
    "none",
    "inline",
    "inline-block",
    "block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid"
  ],
  boxes: {
    narrow: "38%",
    superscope: "45%",
    "half-square": "50%",
    widescreen: "56.25%",
    "postal-card": "66.666666667%",
    landscape: "75%",
    "wide-angle": "87.5%",
    square: "100%",
    portrait: "133%",
    photography: "150%"
  },
  "flex-direction": ["column", "column-reverse", "row", "row-reverse"],
  visiblity: ["visible", "hidden"],
  "pointer-events": ["all", "none"],
  "justify-content": {
    center: "center",
    end: "flex-end",
    start: "flex-start",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch"
  },
  "align-items": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "align-content": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "align-self": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "flex-grow": generateValues(0, 5),
  "flex-shrink": generateValues(0, 5),
  order: generateValues(0, 5),
  overflow: ["auto", "hidden", "visible", "scroll"],
  "font-family": {
    heading: ["Studio Pro", "sans-serif"],
    body: ["Studio Pro", "sans-serif"],
    mono: [
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },
  "font-size": {
    10: "10px",
    12: "12px",
    14: "14px",
    15: "15px",
    16: "16px",
    base: "18px",
    20: "20px",
    24: "24px",
    36: "36px",
    40: "40px",
  },
  heading: {
    h1: "56px",
    h2: "48px",
    h3: "36px",
    h4: "24px",
    h5: "18px",
    h6: "16px"
  },
  position: ["static", "fixed", "absolute", "sticky", "relative"],
  "font-weight": [100, 200, 300, 400, 500, 600, 700, 800, 900],
  "text-transform": ["lowercase", "uppercase", "capitalize", "none", "inherit"],
  "text-decoration": ["none", "underline", "inherit"],
  "text-align": ["left", "right", "center"],
  "font-style": ["normal", "italic", "oblique", "inherit"],
  "line-height": {
    none: "1",
    base: "1.25",
    relaxed: "1.5",
    loose: "2"
  },
  "grid-breakpoints": {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1441px"
  },
  "list-type": ["none"],
  spacers: {
    auto: "auto",
    "0": 0,
    "1": "5px",
    "2": "10px",
    "3": "20px",
    "4": "30px",
    "5": "40px",
    "6": "50px",
    "7": "60px",
    "8": "90px",
    "9": "130px",
    "10": "200px"
  },
  sizes: [
    "auto",
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100
  ],
  "z-index": generateValues(0, 10000, 1000),
  "grid-columns": {
    "1": "1fr",
    "2": "repeat(2, 1fr)",
    "3": "repeat(3, 1fr)",
    "4": "repeat(4, 1fr)"
  },
  colors: {
    "color-transparent": "transparent",
    "color-current": "currentColor",
    "color-black": "#000000",
    "color-white": "#ffffff",
    "color-primary": "#0d6efd",
    "color-secondary": "#6610f2",
    "gray-100": "#f7fafc",
    "gray-200": "#edf2f7",
    "gray-300": "#e2e8f0",
    "gray-400": "#cbd5e0",
    "gray-500": "#a0aec0",
    "gray-600": "#718096",
    "gray-700": "#4a5568",
    "gray-800": "#2d3748",
    "gray-900": "#1a202c"
  }
};

module.exports = theme;
