export function DifferentAspectRatio() {
  return (
    <div className="different-aspect-ratio">
      <h2>Different Aspect Ratio</h2>
      <OriginalCopy />
      <PortionAlignedTop />
      <PortionAlignedVerticalMiddle />
      <PortionAlignedBottom />
      <PortionAlignedLeft />
      <PortionAlignedHorizontalMiddle />
      <PortionAlignedRight />
    </div>
  );
}

function Shapes() {
  return (
    <>
      <line fill="none" stroke="hsl(0,0%, 70%)" x1="0" y1="0" x2="800" y2="0" />
      <line fill="none" stroke="hsl(0,0%, 70%)" x1="0" y1="0" x2="0" y2="300" />
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

function PortionAlignedTop() {
  return (
    <div>
      <h2>Portion is aligned to the top - YMin</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 100 100"
        preserveAspectRatio="xMidYMin slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 100 100"</p>
      <p>preserveAspectRatio = "xMidYMin slice"</p>
      <p>The portion is the circle</p>
      <p>
        The proportion of the portion and the viewport don't match. The
        portion's proportion is a square and the viewport's proportion is a
        rectangle.
      </p>
      <p>
        Because I specified to preserve aspect ratio to slice, the portion is
        tasked to fill the entire viewport and cut off any part of the portion
        that doesn't fit the viewport
      </p>
      <p>
        Because the aspect ratio is preserved, as the portion is scaled up. Its
        width increases to fill the viewport width and the height increases
        along with it. This causes an overflow.
      </p>
      <p>Here, there is an overflow in the y axis</p>
      <p>
        I positioned the portion so that yMin of the portion aligns with the
        yMin of the viewport
      </p>
      <p>
        This means that the top of the portion gets priority in
        terms of what is shown
      </p>
      <p>The bottom side is cut off</p>
    </div>
  );
}

function PortionAlignedVerticalMiddle() {
  return (
    <div>
      <h2>Portion is aligned to the middle - YMid</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 100 100"</p>
      <p>preserveAspectRatio = "xMidYMid slice"</p>
      <p>The portion is the circle</p>
      <p>Here, there is an overflow in the y axis</p>
      <p>
        I positioned the portion so that yMid of the portion aligns with the
        yMid of the viewport
      </p>
      <p>
        This means that the vertical middle of the portion gets priority in
        terms of what is shown
      </p>
      <p>The top and bottom sides are cut off</p>
    </div>
  );
}

function PortionAlignedBottom() {
  return (
    <div>
      <h2>Portion is aligned to the bottom - YMax</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 100 100"
        preserveAspectRatio="xMidYMax slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 100 100"</p>
      <p>preserveAspectRatio = "xMidYMax slice"</p>
      <p>The portion is the circle</p>
      <p>Here, there is an overflow in the y axis</p>
      <p>
        I positioned the portion so that yMax of the portion aligns with the
        yMax of the viewport
      </p>
      <p>
        This means that the bottom of the portion gets priority in terms of what
        is shown
      </p>
      <p>The top side is cut off</p>
    </div>
  );
}

function PortionAlignedLeft() {
  return (
    <div>
      <h2>Portion is aligned to the left side - xMin</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 600 100"
        preserveAspectRatio="xMinYMin slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 600 100"</p>
      <p>preserveAspectRatio = "xMinYMin slice"</p>
      <p>The portion is the three shapes</p>
      <p>Here, there is an overflow in the x axis</p>
      <p>
        I positioned the portion so that xMin of the portion aligns with the
        xMin of the viewport
      </p>
      <p>
        This means that the left side gets priority in terms of what is shown
      </p>
      <p>The right side is cut off</p>
    </div>
  );
}

function PortionAlignedHorizontalMiddle() {
  return (
    <div>
      <h2>Portion is aligned to the middle - xMid</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 600 100"
        preserveAspectRatio="xMidYMin slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 600 100"</p>
      <p>preserveAspectRatio = "xMidYMin slice"</p>
      <p>The portion is the three shapes</p>
      <p>Here, there is an overflow in the x axis</p>
      <p>
        I positioned the portion so that xMid of the portion aligns with the
        xMid of the viewport
      </p>
      <p>
        This means that the middle of the portion gets priority in terms of what
        is shown
      </p>
      <p>The left and right sides are cut off</p>
    </div>
  );
}

function PortionAlignedRight() {
  return (
    <div>
      <h2>Portion is aligned to the right - xMax</h2>
      <svg
        width="800px"
        height="300px"
        viewBox="100 100 600 100"
        preserveAspectRatio="xMaxYMin slice"
      >
        <Shapes />
      </svg>
      <p>width="800px" height="300px"</p>
      <p>viewBox="100 100 600 100"</p>
      <p>preserveAspectRatio = "xMaxYMin slice"</p>
      <p>The portion is the three shapes</p>
      <p>Here, there is an overflow in the x axis</p>
      <p>
        I positioned the portion so that xMax of the portion aligns with the
        xMax of the viewport
      </p>
      <p>
        This means that the right side gets priority in terms of what is shown
      </p>
      <p>The left side is cut off</p>
    </div>
  );
}
