export function SvgB() {
  return (
    <div className="svg-b">
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy="12.5" r="6.25" fill="rgba(255,0,0,.125)"></circle>
        <circle cx="25" cy="25" r="12.5" fill="rgba(255,0,0,.25)"></circle>
        <circle cx="50" cy="50" r="25" fill="rgba(255,0,0,.5)"></circle>
        <circle cx="100" cy="100" r="50" fill="rgba(255,0,0,.75)"></circle>
        <circle cx="200" cy="200" r="100" fill="rgba(255,0,0,1)"></circle>
      </svg>
    </div>
  );
}

// cx center x - x position of center of circle
// cy center y - y position of center of circle
// r - radius - affects how big the circle will be