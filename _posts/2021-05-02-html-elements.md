---
layout: episode
title: HTML Elements
date: 2021-05-02 01:01:01 +0530
teaching: 20
exercises: 10
questions:
- What kind of HTML elements make the web page?
- What is inline and block level elements?
objectives:
- Understand the commonly used elements of HTML.
keypoints:
- HTML tags are case insensitive.
- Spaces get trimmed in while rendering in the web page.
- There are two types of elements, inline and block level.
- Image is an inline element.
- User-agent or browser add default margin or padding to heading and paragraph.
- List tags help to display group of related items.
- Table tag display the items into tabular format.
---

In this milestone, we will quickly go through important HTML tags which
are widely used.

## Headings

- Heading tags are used for titles and subtitles.
- Headings are used by search engines to index the structure and content of web pages.

  __NOTE:__ Avoid using headings to make text _Large or Bold_. Use only for page headings only.

  ~~~html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  ~~~

  > ## Exercise: Heading Sizes
  >
  > ~~~html
  > <h1>Heading 1</h1>
  > <h2>Heading 2</h2>
  > <h3>Heading 3</h3>
  > <h4>Heading 4</h4>
  > <h5>Heading 5</h5>
  > <h6>Heading 6</h6>
  > ~~~
  >
  > Check the sizes of each heading.
  >
  > > ## Result
  > >
  > > | h1 | 2em | 32px |
  > > | h2 | 1.5em | 24px |
  > > | h3 | 1.17em | 18.72px |
  > > | h4 | 1em | 16px |
  > > | h5 | 0.83em | 13.28px |
  > > | h6 | 0.67em | 10.72px |
  > > {: .output}
  > {: .solution}
  >
  > __NOTE:__ The margin around headings is added by _user-agent(browser)_.
  {: .challenge}

## Paragraph

- Paragraph tag (`<p>`) is used to define the paragraph.
- Browsers automatically add margin around `<p>` element.
- Default font size is 1em.
- `<p>` tag takes the whole width of the screen.

  ~~~html
  <p>
  This is paragraph and
  contains multiple lines.
  </p>
  ~~~

  __NOTE:__ The line in the output will be in one line although we have used two lines inside `<p>` element.

## Pre and Code tags

- The `<pre>` tag is used to define the preformatted text.
- The text will be displayed exactly as written in the HTML source code.
- The `<code>` tag is used to define a piece of computer code.
- `<pre>` tag takes the whole width of the screen while `<code>` tag width is determined by its content.

  ~~~html
  <pre style="background-color: #eee">
    <code>
      // hello.c
      #include <stdio.h>

      int main() {
        printf("Hello, World!\n");
        return 0;
      }
    </code>
  </pre>
  ~~~

## Div and span

- `<div>` is used to define a division or a section in Web page.
- `<span>` is used as an inline container to format or phrase part of a text, or a part of a document.
- Both can _styled with CSS or manipulated with JavaScript_.
- There is no effect on the content or layout until styled using CSS.
- The `<div>` element takes the whole width of page while `<span>` element width is equal to the content inside it.

  ~~~html
  <div style="background-color: #eee">
    <h1>Section heading</h1>
    <p>
      This para is inside a 'div' and has span with
      <span style="color:blue">blue</span> word
      and nothing else.
    </p>
  </div>
  ~~~

## Text formatting

Following are different kind of text formatting one can used in HTML.

### Bold

- Both `<b>` and `<strong>` tags are used for making text bold.
- `<strong>` has semantic meaning and indicates that its contents have strong importance.
- `<b>` is used to make text bold without any importance.

  ~~~html
  <p>This text is normal.</p>

  <p><b>This text is bold.</b></p>

  <p><strong>This text is important.</strong></p>
  ~~~

### Italic

- Both `<i>` and `<em>` tags are used for making text italic.
- `<i>` tag is used to make the text italic. Used for technical term or phrase etc.
- `<em>` tag is used to emphasize the text.

  ~~~html
  <p>This text is normal.</p>

  <p><i>This text is italic.</i></p>

  <p><em>This text is emphasized.</em></p>
  ~~~

### Mark, Del and Insert

- `<mark>` tag is used to mark or highlight the text.
- `<del>` tag is used to strike-through the text marking the part as deleted.
- `<ins>` is used to underline a text marking the part as inserted or added.

  ~~~html
  <p>This text is <mark>marked</mark> here.</p>

  <p>
    <del>Blue</del> color deleted and
    <ins>Red</ins> is inserted.
  </p>
  ~~~

### Small, Sub and Sup

- `<small>` element is used to make the text smaller.
- `<sub>` element is used to defines a subscript text. Subscript text appears half a character below the normal line.
- `<sup>` element is used to defines a superscript text. Superscript text appears half a character above the normal line.

  ~~~html
  <p>This line has <small>this phrase</small> small.</p>

  <p>H<sub>2</sub>O Formula has subscript</p>

  <p>Date 5<sup>th</sup> Nov 2021 has superscript</p>
  ~~~

### Hyperlink

- `<a>` tag is used to define hyperlink and it is a connection between one web resource to another.
- Syntax: `<a href="url" target="type">link text</a>`

  where:

  - `href` attribute indicates link's destination represented by `url`.
  - `url` can be any Web resource such _image, audio, video, an HTML document or an element within an HTML document_.
  - Click on `link text` will redirect the user to destination `url`.
  - The `target` attribute specifies where to open the linked document.

- Example: `<a href="https://itgurukula.org">IT Gurukula</a>`

  > ## Exercise: Open link in new tab
  >
  > 1. Create a link and set url as `https://itgurukula.org/html-css/`.
  > 2. Give the `link text` as `HTML & CSS Workshop`.
  > 3. See what happens.
  > 4. Now, give `target="_blank"` attribute and see the behavior.
  {: .challenge}

## Image tag

- `<img>` tag is used to embed (or insert) image in the HTML page.
- Syntax: `<img src="image-path.extension-name" alt="some text">`

  where:

  - `src` represents the path to the image (relative or absolute).
  - `alt` represents an alternate text which would be displayed if the image cannot be displayed.

  __NOTE:__ It is recommended to give styling of image through CSS. However, we can specify `height` and `width` for the image.

- Example: `<img src="images/html.png" alt="HTML" width="100">`

  > ## Exercise: Clickable image
  >
  > 1. Create a link and set url as `https://itgurukula.org/html-css/`.
  > 2. Download the HTML logo image (<a href="./assets/img/html.png" download>Click <i class='bx bxs-cloud-download' ></i> to download)</a> and place inside `images` folder.
  > 3. Instead of giving `link text`, create a image inside the link and use above image.
  >
  > > ## Solution
  > >
  > > ~~~html
  > > <a href="https://itgurukula.org/html-css">
  > >   <img src="images/html.png" alt="HTML" width="100">
  > > </a>
  > > ~~~
  > >
  > {: .solution}
  {: .challenge}

## Inline vs Block element

- Two basic display types: `block` and `inline`.
- Block level elements:
  - Always starts on a new line.
  - Always takes up the full width available until specified.
  - Has a top and a bottom margin.
  - Examples: `<div>, <p>, <h1>...<h6>, <hr>, <nav>, <main>, <section>, <audio>, <video> etc`
- Inline level element:
  - Doesn’t not start from new line
  - Only takes up width as necessary
  - Examples: `<a>, <b>, <br>, <cite>, <code>, <small>, <span>, <img>, <input> etc`

  ~~~html
  <div style="border: 1px solid black">
    This "div" is a block level element.
  </div>

  Line after "div".
  <p style="border: 1px solid black">
    This "p" is also a block level element.
  </p>

  Line after "p".
  ~~~

  __NOTE:__ Element `<p>` add margin around it. See through _Developer Tools_. Also, the empty line after `<div>` will not be displayed by browser.

## List

- List tags are used to a group related items in lists.
- Two common list tags are:
  - Unordered List ( `<ul>` )
    - Each list item starts with `<li>` tag and displayed as bullets by default.
    - Available list styles: `disc(default)`, `circle`, `square`

    ~~~html
    <ul style="list-style-type: square">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    ~~~

  - Ordered List ( `<ol>` )
    - Each list item starts with `<li>` tag and displayed as numbers by default.
    - Common list styles: `decimal(default)`, `upper-alpha(A,B,C,..)`, `lower-alpha(a,b,c,…)`, `lower-roman(i,ii,iii,…)` etc.

    ~~~html
    <ol style="list-style-type: upper-alpha">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ol>
    ~~~

## Table

- `<table>` element helps to arrange data into rows and columns.
- Table row is defined with a `<tr>` tag.
- Table header is defined with a `<th>` tag and the text are _bold and centered_.
- Table data/cell is defined with a `<td>` tag and the text are _regular and left-aligned_.
- `<td>` can contain all sorts of HTML elements: text, images, lists, other tables, etc.

  ~~~html
  <table style="width: 300px;">
    <tr>
      <th>Language</th>
      <th>First Release</th>
    </tr>
    <tr>
      <td>C</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>1996</td>
    </tr>
  </table>
  ~~~

- `colspan` attribute is used to make a cell span more than one column.
- `rowspan` attribute is used to make a cell span more than one row.
- `<caption>` tag is used to add a caption to a table.

  ~~~html
  <table style="width:300px">
    <caption>Language Details</caption>
    <tr>
      <th>Name</th>
      <th colspan="2">Contact</td>
    </tr>
    <tr>
      <td>BRG</td>
      <td>1234567890</td>
      <td>01 98765</td>
    </tr>
  </table>
  ~~~

## Exercises

> ## Developer Profile
>
> Create a simple developer profile shown as below:
> <img class="embed-img" src="./assets/img/dev-profile.jpg" alt="Dev Profile" >
>
> > ## Starter Code
> >
> > ~~~
> > <!DOCTYPE html>
> > <html lang="en">
> >   <head>
> >     <title>Developer Profile</title>
> >   </head>
> >   <body>
> >     <div class="container">
> >       <div class="header">
> >          <!-- h2 -->
> >          <!-- p -->
> >       </div>
> >
> >       <div class="main">
> >         <!-- img (set width to 100) -->
> >         <!-- h4 -->
> >         <!-- ul -->
> >       </div>
> >     </div>
> >   </body>
> > </html>
> > ~~~
> > {: .language-html}
>  __NOTE__: Download user image here (<a href="./examples/images/user.png" download>Click <i class='bx bxs-cloud-download' ></i> to download).
> {: .solution}
{: .challenge}

> ## Daily Tracker
>
> Create a simple daily tasks tracker as below:
> <img class="embed-img" src="./assets/img/daily-tracker.jpg" alt="Daily Tracker" >
>
> > ## Starter Code
> >
> > ~~~html
> > <!DOCTYPE html>
> > <html lang="en">
> >   <head>
> >     <title>Daily Tracker</title>
> >   </head>
> >   <body>
> >     <div class="container">
> >       <div class="header">
> >         <!-- h2-->
> >         <!-- p-->
> >       </div>
> >
> >       <div class="main">
> >         <!-- h2-->
> >         <!-- table -->
> >         <!--
> >           - Set style of table as 'background-color: #eee; width: 300px; text-align: center;'
> >           - Set th and td style s 'border: 1px solid #555;'
> >           - Set width of th as necessary
> >         -->
> >       </div>
> >     </div>
> >   </body>
> > </html>
> > ~~~
> > {: .language-html}
> {: .solution}
{: .challenge}
