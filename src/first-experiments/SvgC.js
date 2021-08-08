export function SvgC() {
  return (
    <div className="svg-c">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="150"
        viewBox="0 0 350 150"
      >
        <circle cx="100" cy="75" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="200" y="25" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
    </div>
  );
}

// circle element - cx, cy, center of circle's x and y position, radius is 50, fill is red
// rectangle element - x, y positions the top left corner of the rectangle, width and height is 100 - same value means it is a square, fill is black
