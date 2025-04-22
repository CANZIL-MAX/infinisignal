import { useState, useEffect, useRef } from "react";
const Slider = ({ value, onValueChange, className, min, max, step }) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={(e) => onValueChange([parseFloat(e.target.value)])}
    className={className}
  />
);
const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

// ... Rest of your full canvas code from "Infini Signal Site" (already fetched above) ...