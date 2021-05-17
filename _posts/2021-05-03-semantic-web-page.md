---
layout: episode
title: Semantic Web Page
date: 2021-05-03 01:01:01 +0530
teaching: 5
exercises: 10
questions:
- How to make the web page semantic?
- What kind of benefits does semantic web page have?
keypoints:
- A semantic element describes its meaning to both the browser and the developer.
- Help in building better web page structures and make the website readable and easier to maintain.
- Improve websites accessibility (gives context to screen readers)
---

The term _Semantic element_ means _an element with a meaning_.

A _semantic element_ clearly describes its meaning to both the browser and the developer.

Example: `<form>`, `<table>`, `<article>`, `<main>` tags clearly defines what its content will be.

However, the non-semantic elements like `<div>`, `<span>` tell nothing about its content.

## Structure of Semantic web page

<img class="embed-img" src="./assets/img/html5.jpg" alt="HTML5" style="max-width: 600px;height:auto;">

## Important semantic elements

- The `<header>` element represents introductory content, or set of navigational links.
- The `<nav>` element defines a set of navigation links.
- The `<main>` specifies the main content of a document.
- The `<section>` element defines a section in a document.
- The `<aside>` element defines some content separate from the main content(like a sidebar).
- The `<article>` element specifies independent, self-contained content.
- The `<footer>` element defines a footer for a document or section.
- The `<figure>` tag specifies self-contained content, like _illustrations, diagrams, photos_ etc.

## Example

> ## Example Snippets
>
> Show example of Semantic web page using following code snippets.
>
> > ## Code Snippets
> >
> > ~~~html
> > <nav>
> >  <a href="#">Home</a> |
> >  <a href="#about">About</a> |
> >  <a href="#blogs">Blogs</a>
> > </nav>
> >
> > <section id="<section-id>">
> >   <h1>Section Name</h1>
> >
> >  <article>
> >    <div class="about-details">
> >      This is an example of Semantic Weg Page. Lorem ipsum dolor sit amet consectetur adipisicing
> >      elit. Nostrum voluptates magni velit eos nulla dolor,
> >      laborum quod in minima vero.
> >    </div>
> >  </article>
> > </section>
> > ~~~
> >
> > - Add `header` and `footer` as necessary
> > {: .language-html}
> {: .solution}
{: .challenge}

## Why Semantic elements?

- Help in building better web page structures and make the website readable and easier to maintain.
- Improve websites accessibility (gives context to screen readers)
- Help improve the performance in search engines.

## Exercises

> ## Exercise: Semantic Web Page
>
> 1. Open the <a href="https://codepen.io/brgurukul/pen/MWpjYvy" target="_blank">CodePen link</a>.
> 2. Click on `Fork` link at the bottom right corner.
> 3. Update the HTML panel as per the instructions given to update required `div` tags to its equivalent semantic tags.
>
> __NOTE:__ The web page preview should be same even after updating tags.
{: .challenge}
