export function SvgE() {
  return (
    <div className="svg-e">
      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 500 200"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>original version</p>

      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 100 100"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>viewBox="0 0 100 100"</p>
      <p>only shows 100 units of the original 500 units?</p>
      <p>
        no that's not right, well I don't know, because if it's 100, that should
        be the start of the left side of the circle...hmmm
      </p>
      <p>it does look like half a circle, vertically, though</p>
      <p>
        how is the viewbox altering the viewport, I don't get it, like what is
        the proportion
      </p>
      <p>
        oh, I see, maybe because there is only 100 visible units in the viewbox,
        then only half of the circle will show. The circle's center is at 150
        and its radius is 50 so, it should start...see, I'm back again, the 100
        should only catch the left side of the circle if it is only 100 units
      </p>
      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="20"
        viewBox="0 0 100 100"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>width="50" height="20" viewBox="0 0 100 100"</p>

      <p>So this is the shrunken version of the view box 0, 0, 100, 100</p>
      <p>
        so what image elements are being displayed is mostly about the viewbox
        and the elements themselves
      </p>
      <p>
        the viewport is kind of irrelevant outside of providing the final size
        and ratio
      </p>
      <p>
        since viewbox 0, 0, 100, 100 is a square and what is being displayed is
        a rectangle, the final size is really the svg root's width and height
      </p>
      <p>
        Like, the viewport has an obvious role in display, but in terms of
        display, it seems like viewbox plays a bigger role with respect to image
        elements
      </p>
      <p>so how does this work, what coordinate system is at work here?</p>

      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 1000 400"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p> viewBox="0 0 1000 400"</p>
      <p>I doubled the viewbox</p>
      <p>seems like there's extra space</p>
      <p>so viewport width and height is 500 x 200</p>
      <p>viewbox width and height is 1000 x 400</p>
      <p>
        the final output of the embedded svg is 500 x 200 (plus some user agent
        padding I think)
      </p>
      <p>
        however, the viewbox is displaying extra space that wasn't there before
      </p>
      <p>what's happening?</p>
      <p>
        so in a 1:1 world where the width and height of the viewport corresponds
        to the width and height of the viewbox, the elements are positioned as I
        expected them to be
      </p>
      <p>
        the circle starts at 100px, then there is a 100px space between the
        rectangle, then the rectangle is 100px wide and high
      </p>
      <p>
        however, in a world where the viewbox width and height is double that of
        the viewport's width and height
      </p>
      <p>
        the circle is starts at 50px, is 50px wide, then 50px space, then start
        of rectangle, which is 50px wide
      </p>
      <p>afterwards is 50px of space, then 250px of more space</p>
      <p>viewport remains 500 x 200</p>
      <p>however, the displayed elements shrink as the viewbox grows</p>
      <p>why?</p>
      <p>hmmm, maybe viewport isn't as hands off as I initially thought?</p>
      <p>okay, so, in the beginning, there is a coordinate system</p>
      <p>the elements are mapped to their rightful places</p>
      <p>
        the viewbox changed and this change also spurred changes to the shape
        elements
      </p>
      <p>
        so maybe start with a coordinate system where there is 1:1 relationship
        between the viewport and the viewbox
      </p>
      <p>then change how the viewbox scales that 1:1 ideal image</p>
      <p>okay, let's start with that</p>

      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 50 20"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>viewBox="0 0 50 20"</p>
      <p>viewbox is a tenth of the viewport's width and height</p>
      <p>it's only showing a tenth of the ideal image?</p>

      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 333 133"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>viewBox="0 0 333 133"</p>
      <p>viewbox is a third of the viewport's width and height</p>
      <p>it's only showing a third of the ideal image?</p>

      <h2>SVG</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="200"
        viewBox="0 0 200 80"
      >
        <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
        <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
      </svg>
      <p>viewBox="0 0 200 80"</p>
      <p>Okay, so my hypothesis is that it will only show up to the right side of the circle, which is two fifths of the width</p>
      <p>Also, it will only show two fifths of the height</p>
      <p>it's right!</p>
      <p>it may not look it but if the height was larger, it would correpond to the right most side of the circle</p>
      <p>Okay, so what can I glean from this</p>
      <p>You start with the ideal image where the viewport and the viewbox have a 1:1 relationship</p>
      <p>then you modify the viewbox to change what is shown</p>
      <p>if the viewbox is larger than the viewport, more of the 1:1 ideal image will be shown</p>
      <p>think of the 1:1 ideal image to be the picture and outside of that is offscreen</p>
      <p>when the viewbox is larger, it reveals what is offscreen</p>
      <p>when the viewbox is smaller, it only shows parts of the ideal image</p>
      <p>I call it ideal image because if the viewport and viewbox matches up, then there is not much need for thinking</p>
      <p>it is a straightforward coordinate system</p>
      <p>when it does not, adjustments to the ideal image will have to be made</p>
      <p>the viewbox can be doubled to reveal more than the ideal image, expanding the view to the offscreen areas</p>
      <p>the viewbox can shrink to reveal only parts of the ideal image</p>
      <p>the viewbox can move the view to the right and leave behind its left side</p>
      <p>the viewbox can move the view to the bottom and leave behind its upper side</p>

      <p>so you start with the ideal image</p>
      <p>the shape elements are bound to this ideal image</p>
      <p>by that I mean, there are edges and more or less, the coordinate system is more predictable in this 1:1 state</p>
      <p>after that, you can modify the viewbox</p>

      <p>I don't think the width and height of the viewbox have much to do with each other</p>
      <p>I think where they most matter is how they relate to the viewport, and by that, the ideal image</p>
      <p>so a viewbox's width can be double ideal image's, I originally put viewport in place of ideal image but viewport to me corresponds more to the final embedded on the screen. Its properties seem more immutable whereas the ideal image can be deviated from</p>
      <p>so, a viewbox's width can be double the ideal image's width but the viewbox's height doesn't have to have the same relationship to the viewport's height</p>
      <p>so I don't know how that works yet and I'm out of time for today so I'll do it tomorrow</p>

    </div>
  );
}

//  <h2>SVG</h2>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="500"
//         height="200"
//         viewBox="0 0 500 200"
//       >
//         <circle cx="150" cy="100" r="50" fill="hsl(0, 70%, 50%)" />
//         <rect x="300" y="50" width="100" height="100" fill="hsl(0, 0%, 0%)" />
//       </svg>
//       <p>original version</p>
