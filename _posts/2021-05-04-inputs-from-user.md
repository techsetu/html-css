---
layout: episode
title: Inputs from User
date: 2021-05-04 01:01:01 +0530
teaching: 10
exercises: 15
questions:
- How to get inputs from users in Web page?
keypoints:
- The `<form>` element is used to get input or information from user.
- The `action` attribute indicate where the form data will be processed.
- The `method` attribute indicate which HTTP method form will use to send information to server.
- The `<input>` element has different variant which depends on the `type` attribute.
- The `<label>` element defines a label for many form elements.
- The `<select>` element is used to define a drop-down list.
- The `<textarea>` element defines a multi-line input field.
---

In this episode, we will learn common input elements that can be used to accept information from user.

These elements adds interactivity in the web page.

## Forms

- The `<form>` element is used to get input or information from user.
- The user inputs are often sent to a server for processing.
- The `<form>` element is used to create an HTML form in the web page.
- The `<form>` element acts as a container for different types of input elements like text fields, checkboxes, submit buttons etc.
- The `action` attribute is used to specify the form handler.
- The `method` attribute specifies the HTTP method to be used when submitting the form data.
- Syntax looks like below:

  ~~~html
  <form action="some url" method="method name">
    <!-- other form elements -->

    <input type="submit">
  </form>
  ~~~

Following are different types of common input elements used in web page.

## input element

- An `<input>` element can be displayed in many ways which depends on the `type` attribute.
- It is the most used form element.

  | Type | Description |
  | `<input type="text">` | Displays a single-line text input field |
  | `<input type="radio">` | Displays a radio button (for selecting one of many choices) |
  | `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
  | `<input type="submit">` | Displays a submit button (for submitting the form) |
  | `<input type="reset">` | Reset all form values to its default |
  | `<input type="button">` | Displays a clickable button |

  > ## Example Snippets
  >
  > Show example of different input types.
  > Take help of following code snippets.
  >
  > > ## Code Snippets
  > >
  > > ~~~html
  > > <form action="/action" method=”post”>
  > >   <h3>Choose Language</h3>
  > >   <input type="radio" id="c" name="language" value="c">
  > >   <label for="c">C</label><br>
  > >
  > >   <input type="radio" id="js" name="language" value="js">
  > >   <label for="js">JavaScript</label><br>
  > >
  > >   <input type="radio" id="ruby" name="language" value="ruby">
  > >   <label for="ruby">Ruby</label><br><br>
  > >
  > >   <h3>Choose Course</h3>
  > >   <input type="checkbox" id="web" name="web" value="web">
  > >   <label for="web">Web Development</label><br>
  > >   <input type="checkbox" id="prog" name="prog" value="prog">
  > >   <label for="prog">Programming</label><br><br>
  > >
  > >   <input type="reset">
  > >   <input type="submit" value="Submit">
  > > </form>
  > > ~~~
  > >
  > > {: .language-html}
  > {: .solution}
  {: .challenge}

- Check more about input elements in [w3school](https://www.w3schools.com/html/html_form_input_types.asp){:target="_blank"}.

## label element

- The `<label>` element defines a label for many form elements.
- The `<label>` element is useful for screen-reader users, as the screen-reader will read out loud the label when the user focus on the input element.
- The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the `<input>` element to bind them together.

  > ## Example
  >
  > Login Page
  >
  > ~~~html
  > <form action="/login" method="post">
  >  <label for="username">Username:</label><br>
  >  <input type="text" id="username" name="username"><br>
  >  <label for="pwd">Password:</label><br>
  >  <input type="password" id="pwd" name="pwd">
  >  <input type="submit" value="Submit">
  > </form>
  > ~~~
  >
  > __NOTE:__ The `name` attribute is must in `input` element else the value of input field will not be sent to server.
  {: .example}

## Select element

- The `<select>` element is used to define a drop-down list.
- The `<option>` elements defines an option that can be selected.
- By default, the first item in the drop-down list is selected.
- Use selected attribute to define a pre-selected option.
- `size` attribute can be used to specify the number of visible values at once.
- `multiple` attribute can be used to allow the user to select more than one value.

  > ## Example Snippets
  >
  > Show example of different kind of select element.
  > Take help of following code snippets.
  >
  > > ## Code Snippets
  > >
  > > ~~~html
  > > <select name="language">
  > >   <option value="c">C</option>
  > >   <option value="ruby">Ruby</option>
  > >   <option value="javascript">JavaScript</option>
  > > </select>
  > >
  > > <select name="language">
  > >   <option value="c">C</option>
  > >   <option value="ruby" selected>Ruby</option>
  > >   <option value="javascript">JavaScript</option>
  > > </select>
  > >
  > > <select name="language" size="3">
  > >   <option value="c">C</option>
  > >   <option value="ruby">Ruby</option>
  > >   <option value="javascript">JavaScript</option>
  > >   <option value="java">Python</option>
  > >   <option value="java">Java</option>
  > > </select>
  > > ~~~
  > >
  > > {: .language-html}
  > > __NOTE:__ Use `multiple` attribute in the last example and notice what happens.
  > {: .solution}
  {: .challenge}

## Textarea

- `<textarea>` element defines a multi-line input field.
- `rows` attribute specifies the number of lines in a text area.
- `cols` attribute specifies the width of a text area.

  ~~~html
  <textarea name="message" rows="10" cols="30"> The web is awesome.</textarea>
  ~~~

- It is recommended to use CSS to define the styling of `textarea`. We can define `width` and `height` through CSS.

## Exercises

> ## Exercise: Sign Up Styling
>
> 1. Open the <a href="https://codepen.io/itgurukula/pen/bGqNzRZ" target="_blank">CodePen link</a>.
> 2. Click on `Fork` link at the bottom right corner.
> 3. Update the CSS panel as per the instructions given.
>
> > ## Output preview
> >
> > The web page should look like below:
> > <img class="embed-img" src="./assets/img/sign_up.jpg" >
> >
> {: .solution}
{: .challenge}
