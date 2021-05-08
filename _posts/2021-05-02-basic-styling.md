---
layout: episode
title: Basic Styling
date: 2021-05-02 02:01:01 +0530
teaching: 35
exercises: 15
questions:
- What are different ways of selecting elements in CSS?
- How to change the size of elements?
- What do you mean by inline-block elements?
- How to use the _Developer Tools_ to update the CSS?
objectives:
- Understand how to style the web page.
- Understand the usage of developer tools.
keypoints:
- HTML tags are case insensitive.
- Spaces get trimmed in while rendering in the web page.
---

In this episode, we will quickly go through basics of CSS.

As mentioned in the [Introduction](./introduction) episode, CSS adds styling to the web page.

There are three types of ways of adding CSS to web page:

- Inline CSS
- Internal CSS
- External CSS

## CSS Syntax

<img class="embed-img" src="./assets/img/css-syntax.jpg" alt="CSS Syntax" />

## Inline CSS

- Used to apply a unique style for a single element.

  ~~~html
  <h1 style="color:blue;text-align:center;">
    Section heading
  </h1>

  <p style="color:red;">
    Section paragraph.
  </p>
  ~~~

  > ## Result
  >
  > {% raw %}
  >   <h1 style="color:blue;text-align:center;">
  >     Section heading
  >   </h1>
  >
  >   <p style="color:red;">
  >     Section paragraph.
  >   </p>
  > {% endraw %}
  {: .solution }
## Internal CSS

- Include CSS rules for single HTML page and has effect within that page. It is defined in the `<head>` section using `<style>` element.

  ~~~html
  <head>
    <style>
      h1 {
        color: blue;
        text-align: center;
      }
      p { color: red; }
    </style>
  </head>

  <body>
    <h1> Section heading </h1>
    <p> Section paragraph One. </p>
    <p> Section paragraph Two. </p>
  </body>
  ~~~

  > ## Result
  >
  > {% raw %}
  >   <h1 style="color:blue;text-align:center;"> Section heading </h1>
  >   <p style="color: red;"> Section paragraph One. </p>
  >   <p style="color: red;"> Section paragraph Two. </p>
  > {% endraw %}
  > __NOTE:__ The benefit of _Internal CSS_ here is that we avoid writing separate CSS for 2nd `<p>` tag.
  {: .solution }

## External CSS

- The CSS rules are defined in separate file with extension `.css`.
- Each HTML page must include a reference to the external stylesheet file (`.css`) using the `<link>` element, inside the `<head>` section.
- Following line include `style.css` style sheet file in the web page.

  ~~~html
  <link href="style.css" rel="stylesheet" type="text/css">
  ~~~

- The content of `style.css` will contain the CSS rules for the elements.
- Example:

  ~~~css
  h1 {
    color: blue;
    text-align: center;
  }
  p {
    color: red;
  }
  ~~~

## Comment

- Comment is used to explain the code which might be useful for self or for others.
- These are not displayed or rendered in the web page.
- Syntax:

  ~~~css
  /* Write your comments here */
  ~~~

## CSS Selectors

- A CSS selector is used to select the HTML element(s) that we can style.
- Common CSS categories:
  - Simple selectors (name, id, class)
  - Combinator selectors (relation between two selector)
    - Descendant selector (space)
    - Child selector ( > )
    - Normal sibling selector ( ~ )
    - Adjacent sibling selector ( + )
  - Pseudo-class selectors (based on certain state)
  - Pseudo-elements selectors (select and style a part of an element)
  - Attribute selectors (based on an attribute or attribute value)

## Simple Selectors

  ~~~css
  /* element selector */
  p {
    color: red;
  }

  /* ID selector */
  #para {
   color: red;
  }

  /* class selector */
  .red {
    color: red;
  }

  /* specific class selector */
  /* select all <p> elements with class 'red'. */
  p.red {
    color: red;
  }
  ~~~

## multiple selectors

- We can specify more than one selectors to select group of elements.

  ~~~css
  #para .red {
    color: red;
  }

  #about h1 .center {
    text-align: center;
  }
  ~~~

  __NOTE:__ We can have any type of selector (id, class or element) in above places.

## Universal Selector

- Selects all HTML elements on the page.

  ~~~css
  * {
    color: blue;  /* Set the color of whole page as blue */
  }

  /* Widely used Reset CSS */
  * {
    /* Include padding and border in the element's total width and height */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ~~~

  > ## Exercise: 'border-box' case
  >
  > Create two boxes with same width, height, padding and border.
  >
  > - Set height as 300px and width as 100px.
  > - Padding as 30px.
  > - Set border of Box 1 as `10px solid blue` and other as `10px solid red`.
  > - Set `box-sizing` of Box 1 as `content-box(default)` while other as `border-box`.
  >
  > > ## Solution
  > >
  > > ~~~
  > > <head>
  > >   <style>
  > >     .box1 {
  > >       box-sizing: content-box;
  > >       width: 300px;
  > >       height: 100px;
  > >       padding: 30px;
  > >       border: 10px solid blue;
  > >     }
  > >     .box2 {
  > >       box-sizing: border-box;
  > >       width: 300px;
  > >       height: 100px;
  > >       padding: 30px;
  > >       border: 10px solid red;
  > >     }
  > >   </style>
  > > </head>
  > >
  > > <body>
  > >   <div class="box1">Box 1</div>
  > >   <div class="box2">Box 2</div>
  > > </body>
  > > ~~~
  > >
  > > {: .language-html}
  > > __NOTE:__ Hence `box-sizing: border-box` has become one of important reset CSS.
  > {: .solution}
  {: .challenge}

## Colors

Following are popular ways of specifying colors in CSS:

- Color names

  - These are specific color name like `red`, `aqua`, `chocolate`, `gold` etc.
  - [Know more](https://www.w3schools.com/Colors/colors_names.asp){:target="_blank"}

- RGB (Red, Green and Blue)
  - Color value is specified with combination of `rgb(red, green, blue)`.
  - Each parameter defines the intensity of the color as an integer between `0` and `255`.
  - Example:  `rgb(0, 0, 255)` is `blue`, `rgb(255, 0, 0)` is `red` etc
  - [Know more](https://www.w3schools.com/Colors/colors_rgb.asp){:target="_blank"}

- HEX (Hexadecimal values)
  - Color is specified with hexadecimal value in the format: `#RRGGBB`.
  - `RR(red)`, `GG(green)` and `BB(blue)` are hexadecimal integers between `00` and `FF` specifying the intensity of the color.
  - [Know more](https://www.w3schools.com/Colors/colors_hexadecimal.asp){:target="_blank"}

- RGBA (RGB with Alpha)
  - Color value is specified with: `rgba(red, green, blue, alpha)`
  - `alpha` specifies the opacity of the color.
  - [Know more](https://www.w3schools.com/cssref/func_rgba.asp){:target="_blank"}

  ~~~css
  h1 {
    color: #ff0000;
  }
  h2 {
    color: rgb(255, 0, 0);
  }
  h3 {
    color: red;
  }

  /* above are same way of getting red color */
  ~~~

## CSS Units

- CSS has several different units for expressing a length.
- Following are popular units which are widely used:
  - `px`: Pixels (1px = 1/96th of 1 inch)
  - `em`: Relative to the font-size of the element.
  - `rem`: Relative to font-size of the root element.
  - `vw`:	Relative to 1% of the width of the viewport.
  - `vh`:	Relative to 1% of the height of the viewport.
  - `%`:	Relative to the parent element.

  >> ## Instructor
  >>
  >> Show the demo of different CSS units. Also, explain concepts like _Viewport_ etc.
  {: .instructor}

## CSS Background

- The `background` properties are used to add background effects for html elements.
- The `background` property is shorthand for following properties:

  - `background-color`
  - `background-image`
  - `background-position`
  - `background-size`
  - `background-repeat`
  - `background-attachment`

- Shorthand syntax:

  ~~~css
  background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
  ~~~

  ~~~css
  div {
    background-color: #333;
    background-image: url("images/background.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  /* shorthand */
  div {
    background: #333 url("images/background.jpg") center center/cover no-repeat fixed;
  }
  ~~~

- `opacity` property specifies the transparency of an element. It can take a value from `0.0` to `1.0`. Lower the value of `opacity`, more transparent it is.
- [Know more](https://www.w3schools.com/cssref/css3_pr_background.asp){:target="_blank"}

## Border

- The `border` property allow you to specify the _style, width, and color_ of an element's border.
- The `border` property is a shorthand property for the following individual border properties:
  - `border-width`
  - `border-style` (required)
  - `border-color`

  ~~~css
  p {
    border: 5px solid red;
  }
  ~~~

- Left border can be easy created using below:

  ~~~css
  p {
    border-left: 6px solid blue;
    background-color: #ddffff;
  }
  ~~~

- [Know more](https://www.w3schools.com/css/css_border.asp){:target="_blank"}

## Margin

- `margin` property is used to create space _around all sides of element_ and defined outside of any borders.

  ~~~css
  p {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    margin-left: 10px;
  }

  /* Short hand notation */
  p {
    margin: 20px 10px;
  }

  /* Same margin on all sides */
  p {
    margin: 20px;
  }
  ~~~

- _Special case:_ Setting margin value to `auto` will let the browser calculate the margin. See `margin: auto`.
- Negative values are allowed in margin.

## Padding

- `padding` property is used to create space _around element's content_ and defined inside of any borders.

  ~~~css
  p {
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 10px;
  }

  /* Short hand notation */
  p {
    padding: 20px 10px;
  }

  /* Same padding on all sides */
  p {
    padding: 20px;
  }
  ~~~

  __NOTE:__ Negative values are not allowed in padding.

## CSS Box Model

- Everything in CSS has a box around it.
- This concept is key to being able to create layouts with CSS, or to align items with other items.
- It consists of: _margins, borders, padding, and the actual content_.

  <img class="embed-img" src="./assets/img/box-model.jpg" alt="Box Model" />

  ~~~css
  div {
    width: 300px;
    border: 15px solid green;
    padding: 50px;
    margin: 20px;
  }

  /* Create an empty div in body */
  ~~~

## Developer Tools

>> ## Instructor
>>
>> Give the demo of __Developer Tools__ and its usage.
{: .instructor}

## Text formatting through CSS

- The `color` is used to give text color.
- The `text-align` property is used to set the horizontal alignment of a text. It can be `center`, `left`, `right` or `justify`.
- The `vertical-align` property sets the vertical alignment of an element. The values can be `top`, `middle` or `bottom`.
- The `text-decoration` property is used to set or remove decorations from text.
- The `text-transform` property is used to specify uppercase and lowercase letters in a text. The values are `uppercase`, `lowercase` or `capitalize`.
- The `line-height` property is used to specify the space between lines.

  ~~~css
  p {
    text-decoration: underline;
    text-indent: 50px;
    letter-spacing: 2px;
    line-height: 30px;
    white-space: nowrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .underline {
    text-decoration: underline;
  }
  .no-underline {
    text-decoration: none;
  }
  ~~~

## Font

- The font adds value to your text and has huge impact on how the users experience the web page.
- It is also important to choose the correct color and text size for the font.
- Following are common font families:

  - `Serif` fonts have a small stroke at the edges of each letter. (formality and elegance)
  - `Sans-serif` fonts have clean lines (no small strokes attached). (modern and minimalistic look)
  - `Monospace` has all the letters having the same fixed width.
  - `Cursive` fonts imitate human handwriting.

- The `font-family` property to specify the font of a text.
- The `font-family` should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems.

  ~~~
  {% raw %}
  <p style="font-family: 'Georgia'">
    The Serif Font
  </p>
  <p style="font-family: 'Verdana'">
    The Sans-Serif Font
  </p>
  <p style="font-family: 'Lucida Console'">
    The Monospace Font
  </p>
  <p style="font-family: 'Brush Script MT'">
    The Cursive Font
  </p>
  {% endraw %}
  ~~~
  {: .output}
  > ## Exercise: Different Fonts
  >
  > {% raw %}
  > ~~~html
  > <p style="font-family: 'Georgia'">
  >   The Serif Font
  > </p>
  > <p style="font-family: 'Verdana'">
  >   The Sans-Serif Font
  > </p>
  > <p style="font-family: 'Lucida Console'">
  >  The Monospace Font
  > </p>
  > <p style="font-family: 'Brush Script MT'">
  >   The Cursive Font
  > </p>
  > ~~~
  > {% endraw %}
  >
  > > ## Result
  > >
  > > {% raw %}
  > > <p style="font-family: 'Georgia'">
  > >   The Serif Font
  > > </p>
  > > <p style="font-family: 'Verdana'">
  > >   The Sans-Serif Font
  > > </p>
  > > <p style="font-family: 'Lucida Console'">
  > >  The Monospace Font
  > > </p>
  > > <p style="font-family: 'Brush Script MT'">
  > >   The Cursive Font
  > > </p>
  > > {% endraw %}
  > {: .solution}
  {: .challenge}

- The `font-style` property is mostly used to specify italic text.
- The `font-size` property sets the size of the text.
- The `font` shorthand property has following:
  - font-style
  - font-variant
  - font-weight
  - font-size/line-height
  - font-family

  ~~~html
  p {
    font: italic small-caps bold 16px/30px Georgia, serif;
  }
  ~~~

## Styling Link

- Links can be styled with any CSS property like `color`, `font`, `background` etc.
- There are following four states of links:
  - `a:link` - a normal, unvisited link
  - `a:visited` - a link the user has visited
  - `a:hover` - a link when the user mouses over it
  - `a:active` - a link the moment it is clicked

  ~~~html
  a:link {
    color: blue;
  }
  a:visited {
    color: brown;
  }
  a:hover {
    color: red;
  }
  a:active {
    color: darkblue;
  }
  ~~~

- Google Font
  - We can use Google hosted fonts which are free to use.
  - Just add a special style sheet link in the `<head>` section and then refer to the font in the CSS.

  ~~~html
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">

    <style>
    body {
      font-family: "Poppins", sans-serif;
    }
    </style>
  </head>
  ~~~

## CSS layout using 'display' property

- The `display` property specifies how an element is displayed in the web page.
- It is the most important CSS property for controlling layout.

  ~~~css
  display: block;  /* make the element block */
  display: inline;  /* make the element inline */
  display: none;  /* hide element */
  ~~~

  > ## Exercise: Inline Nav items
  >
  > Give the code below make the nav items horizontally
  >
  > {% raw %}
  > ~~~html
  > <ul>
  >   <li><a href="#" target="_blank">HTML</a></li>
  >   <li><a href="#" target="_blank">CSS</a></li>
  >   <li><a href="#" target="_blank">JavaScript</a></li>
  > </ul>
  > ~~~
  > __NOTE:__ `#` in `href` indicate that it points to nowhere.
  > {% endraw %}
  >
  > > ## Solution Hint
  > >
  > > Just add CSS to `li` element as below:
  > >
  > > ~~~
  > > li {
  > >   display: inline;
  > > }
  > > ~~~
  > > {: .language-css}
  > {: .solution}
  {: .challenge}

## Inline Block display layout

- `display: inline-block` allows user to set a width and height on the element.

  __NOTE:__ We cannot set `height` and `width` property in `display: inline` layout.

- Check the [example by W3school.](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1){:target="_blank"}

## Centering element, text and image

- `margin: auto` is used to center HTML element.
- `text-align: center` is used to center text.
- `display: block, margin-left/right and width` are used to center an image.

  ~~~css
  img {
    display: block;     /* required since img is inline element */
    margin-left: auto;
    margin-right: auto;
    width: 300px;       /* required if width size is greater than screen width */
  }
  ~~~

## width and max-width

- `width` property will prevent the block-level element from stretching to whole screen width.
- `margin: auto` is used to horizontally center the element.

  > ## Example
  >
  > Here the first box has width of 600px while second box has max-width of 600px.
  > Check by reducing the screen width.
  >
  > ~~~html
  > <div style="width: 600px; margin: auto; background: lightgreen; margin-bottom: 1rem;">
  >   Fixed Width Box
  > </div>
  > <div style="max-width: 600px; margin: auto; background: yellow; margin-bottom: 1rem;">
  >   Flexible Width Box
  > </div>
  > ~~~
  {: .example}

## Float and clear property

- The `float` property specifies how an element should float in the web page.
- It is used for positioning content.
- The values for `float` can be `left`, `right`, `none` or `inherit`.
- The `clear` property specifies what elements can float beside the cleared element and on which side.

  > ## Example
  >
  > ~~~html
  > <style>
  >   img {
  >     float: right;
  >   }
  > </style>
  > <p>
  >   <img src="images/html.png" alt="User" style="width:150px;height:150px;margin-left:15px;">
  >   This is a nice paragraph with HTML logo image on the right.
  > </p>
  > ~~~
  >
  {: .example}

- The values for `clear` can be `left`, `right`, `none`, `both`, or `inherit`.
- When clearing floats, you should match the clear to the float i.e if an element is floated to the left, then you should clear to the left.
- Check the [example by w3school](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clear){:target="_blank"}.

## position property

- The `position` property specifies the type of positioning method used for an element.
- There are five different position values:

  ### 1. static

  - It is always positioned according to the normal flow of the page.
  - Static positioned elements are not affected by the _top, bottom, left, and right_ properties.

  ### 2. relative

  - Element is positioned relative to its normal position.
  - The _top, right, bottom, and left_ properties will decided the movement of element.

    > ## Example
    >
    > {% raw %}
    > <style>
    >  #position-relative {
    >    border: 1px solid #555;
    >  }
    >  #position-relative .relative {
    >    position: relative;
    >    max-width: 600px;
    >    top: 20px;
    >    border: 3px solid #73AD21;
    > }
    > </style>
    >
    > <div id="position-relative">
    >   <p>This is normal text and has default position which is 'static'</p>
    >   <div class="relative">
    >     This div element is positioned 20px from top side of its normal position.
    >   </div>
    > </div>
    > {% endraw %}
    >
    {: .example}

    ### 3. absolute

    - Positioned relative to the nearest positioned ancestor.
    - Uses document body if there is no positioned ancestors.

    __NOTE:__ A "positioned" element is one whose position is anything except static

    > ## Example
    >
    > {% raw %}
    > <style>
    >  #position-absolute-parent {
    >    border: 1px solid #555;
    >    position: relative;
    >    height: 300px;
    >  }
    >  #position-absolute-parent .absolute {
    >    position: absolute;
    >    bottom: 50px;
    >    right: 10px;
    >    width: 300px;
    >    border: 3px solid #73AD21;
    > }
    > </style>
    >
    > <div id="position-absolute-parent">
    >   This div element has position 'relative'.
    >   <div class="absolute">
    >     This div element has position 'absolute'.
    >   </div>
    > </div>
    > {% endraw %}
    >
    {: .example}

  ### 4. fixed

  - Positioned relative to the viewport
  - It always stays in the same place even if the page is scrolled.
  - The _top, right, bottom, and left_ properties are used to position the element.
  - Check the [example in w3school.](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_fixed){:target="_blank"}

  ### 5. sticky

  - Positioned based on the user's scroll position.
  - Element toggles between relative and fixed, depending on the scroll position.
  - It is positioned relative until a given offset position is met in the viewport and then it "sticks" in place like fixed element.
  - Check the [example in w3school.](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_sticky){:target="_blank"}

## Overlapping Element (z-index)

- The `z-index` property controls the vertical stacking order of elements that overlap.
- It controls which element should appears physically closer to you.
- It only affects elements that have a position value other than static (the default).
- Following image will help you understand the _overlapping concept_.

  <img class="embed-img" src="./assets/img/z-index.jpg" alt="Z-index" >

- The higher the value of `z-index`, closer it will to your eyes.
- It is possible that two elements can overlap each other like in below case:

  ~~~html
  <style>
  img {
    position: absolute;
    left: 0px;
    top: 0px;
    /* CSS here */
  }
  </style>

  <h1>This is a heading</h1>
  <img src="images/user.png" width="100" height="140">
  <p>
    This is paragraph and the image get overlap to it.
    To fix it, you need to add 'z-index; -1' to 'img' tag.
  </p>
  ~~~

## Exercises

> ## Exercise: Sample Web Page
>
> 1. Open the <a href="https://codepen.io/itgurukula/pen/QWpwMpx" target="_blank">CodePen link</a>.
> 2. Click on `Fork` link at the bottom right corner.
> 3. Update the CSS panel as per the instructions given.
>
> > ## Output preview
> >
> > The web page should look like below:
> > <img class="embed-img" src="./assets/img/sample-page.jpg" >
> >
> {: .solution}
{: .challenge}

> ## Exercise: Bootstrap like buttons
>
> 1. Open the <a href="https://codepen.io/itgurukula/pen/JjWoxNN" target="_blank">CodePen link</a>.
> 2. Click on `Fork` link at the bottom right corner.
> 3. Update the CSS panel as per the instructions given.
>
> > ## Output preview
> >
> > The web page should look like below:
> > <img class="embed-img" src="./assets/img/bootstrap-like-btns.jpg" >
> >
> {: .solution}
{: .challenge}
