import "./Svgs.css";

export function Svgs() {
  return (
    <div className="svgs">
      <h1>Experimenting with Svgs</h1>
      <OriginalCopy />
      <SmallViewBoxVersion />
      <LargeViewBoxVersion />
      <ShiftedToTheRightViewBoxVersion />
      <ShiftedToTheLeftViewBoxVersion />
    </div>
  );
}

function Shapes() {
  return (
    <>
        <line fill="none" stroke="hsl(0,0%, 70%)" x1="0" y1="0" x2="800" y2="0"/>
        <line fill="none" stroke="hsl(0,0%, 70%)" x1="0" y1="0" x2="0" y2="300"/>
        <rect
        x="0"
        y="0"
        width="800"
        height="300"
        fill="none"
        stroke="hsl(324, 91%, 75%)"
      />
      <circle cx="150" cy="150" r="50" fill="hsl(341, 58%, 57%)" />
      <rect
        x="300"
        y="100"
        width="100"
        height="100"
        fill="hsl(208, 72%, 64%)"
      />
      <polygon
        fill="hsl(41, 100%, 53%)"
        stroke="hsl(41, 100%, 53%)"
        points="500,200 600,100 700,200"
      />
    </>
  );
}

function OriginalCopy() {
  return (
    <div>
      <h2>original</h2>
      <svg width="800px" height="300px" viewBox="0 0 800 300">
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="0 0 800 300"</p>
      <p>The viewBox and the viewport has a 1:1 relationship</p>
    </div>
  );
}

function SmallViewBoxVersion() {
  return (
    <div>
        <h2>viewBox is smaller than viewport, same aspect ratio</h2>
      <svg width="800px" height="300px" viewBox="0 0 400 150">
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="0 0 400 150"</p>
      <p>
        The portion of the canvas that is shown is from (0,0) to (400, 150),
        this is the coordinate system in the canvas
      </p>
      <p>That portion of the canvas is then mapped to the viewport</p>
      <p>
        The portion of the canvas from (0,0) to (400, 150) is used to fill up
        the viewport that is 800px wide and 300px long
      </p>
    </div>
  );
}

function LargeViewBoxVersion() {
  return (
    <div>
        <h2>viewBox is larger than viewport, same aspect ratio</h2>
      <svg width="800px" height="300px" viewBox="0 0 1600 600">
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="0 0 1600 600"</p>
      <p>
        The portion of the canvas that is shown is from (0,0) to (1600, 600),
        this is the coordinate system in the canvas
      </p>
      <p>That portion of the canvas is then mapped to the viewport</p>
      <p>
        The portion of the canvas from (0,0) to (1600, 600) is used to fill up
        the viewport that is 800px wide and 300px long
      </p>
    </div>
  );
}

function ShiftedToTheRightViewBoxVersion() {
  return (
    <div>
      <h2>viewBox is shifted to the right by 300 units, same aspect ratio</h2>
      <svg width="800px" height="300px" viewBox="300 0 800 300">
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="0 0 1600 600"</p>
      <p>
        The portion of the canvas that is shown is from (300,0) to (1100, 300),
        this is the coordinate system in the canvas
      </p>
      <p>That portion of the canvas is then mapped to the viewport</p>
      <p>
        The portion of the canvas from (300,0) to (1100, 300) is used to fill up
        the viewport that is 800px wide and 300px long
      </p>
    </div>
  );
}


function ShiftedToTheLeftViewBoxVersion() {
    return (
      <div>
        <h2>viewBox is shifted to the left by 400 units, same aspect ratio</h2>
        <svg width="800px" height="300px" viewBox="-400 0 800 300">
          <Shapes />
        </svg>
        <p>width="800px" height="300px"</p>
        <p>viewBox="-400 0 800 300"</p>
        <p>
          The portion of the canvas that is shown is from (-400,0) to (400, 300),
          this is the coordinate system in the canvas
        </p>
        <p>That portion of the canvas is then mapped to the viewport</p>
        <p>
          The portion of the canvas from (-400,0) to (400, 300) is used to fill up
          the viewport that is 800px wide and 300px long
        </p>
      </div>
    );
  }