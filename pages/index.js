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

// Resten av koden från canvas (kortad här för tydlighet, men kommer läggas in i nästa steg)
export default function InfiniSignalPage() {
  return <div>Hello World – canvas code goes here</div>;
}
