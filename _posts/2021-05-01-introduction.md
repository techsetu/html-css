---
layout: episode
title: Introduction
date: 2021-05-01 01:01:01 +0530
teaching: 5
exercises: 5
questions:
- What is HTML/HTML5 and why it is important?
- What happen when you enter the url in browser.
objectives:
- Understand the basics of Client/Server model.
- Understand the basic structure of Web page.
keypoints:
- HTML stands for _HyperText Markup Language_ and is one of the building block of Web.
- Client request web page to the server and server sent the page as response.
- Currently, the HTML5 is the default HTML version.
- The `<html>` tag is the root element and defines the whole HTML document.
- HTML tags can be nested i.e tags can contain other tags.
- HTML tag is Not Case Sensitive i.e `<P>` means the same as `<p>`.
- Never skip the closing tag else one will get unexpected results.
- HTML tags with no content and closing tag are called empty tags. Eg - `<br>`, `<img>` etc
---

We will be starting by understanding where HTML is used. First of all, let's perform
this simple exercises

> ## Exercise: Load the URL
>
> 1. Open the browser.
> 2. Enter url [https://itgurukula.org](https://itgurukula.org){:target="_blank"}
> 3. Open the _Developer tools_. (See how instructor is doing or Google it)
> 4. Under the `Network` tab, click on row(mostly 1st row) having `Name` as `itgurukula.org`.
> 5. Notice the details under `Headers` tab.
>
> > ## Result
> >
> > ~~~
> > // General
> > Request URL: https://itgurukula.org/
> > Request Method: GET
> > Status Code: 304
> > Remote Address: 185.199.110.153:443
> > Referrer Policy: strict-origin-when-cross-origin
> >
> > // Response Headers
> > ...
> > content-length: 3732
> > content-type: text/html; charset=utf-8
> > server: GitHub.com
> > ...
> >
> > // Request Headers
> > :authority: itgurukula.org
> > :method: GET
> > :path: /
> > :scheme: https
> > accept: text/html
> > ...
> > user-agent: Mozilla/5.0
> > ~~~
> >
> > {: .output}
> {: .solution}
{: .challenge}

>> ## Instructor
>>
>> Explain basic of Client-Server model, HTTP methods, status codes, user-agent and other important details.
{: .instructor}

## What is URL

A URL stands for _Uniform Resource Locator_, also termed a _Web Address_, is a reference to a web resource that represents its location on a internet. [Read more.](https://en.wikipedia.org/wiki/URL){:target="_blank"}

<img class="embed-img" src="./assets/img/url.jpg" alt="URL">

>> ## Instructor
>>
>> Explain _protocol, domain, TLD and path_.
{: .instructor}

## What is HTML

- HTML stands for _HyperText Markup Language_.
- It is the standard markup language for creating Web pages.
- It describes the structure of a Web page.
- HTML elements tell the browser how to display the content.

## What is CSS

- CSS stands for _Cascading Style Sheets_.
- It is the standard markup language for creating Web pages.
- It describes how the web page should be displayed(UI).
- It describes how elements should be rendered on screen, on paper, in speech, or on other media.
- HTML elements tell the browser how to display the content.
- Simply saying, CSS adds styling to the web page.

__NOTE:__ The word _Cascading_ means that a style applied to a parent element will also apply to all children elements within the parent.
## Hello World

Type the following code in your editor and give the file name as `hello.html`.

__NOTE:__ It is recommended to create a folder (say `html-css-workshop`) and keep all the examples
codes in it.

~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p style="color: blue;">This is the first web page.</p>
  </body>
</html>
~~~
{: .language-html}

Open the `hello.html` file in browser. This can be done in two ways:
  - Directly go to the file through `File Explorer` and locate the folder `html-css-workshop` and right click to file `hello.html` and click on `open in browser` (see _Open With_).
  - Use the `Live Server` extension to open the file.

  __NOTE:__ Using `Live Server` to open file has benefit as the web page will be updated as we type.

>> ## Instructor
>>
>> Explain the layout of the HTML web page, `lang="en"`, `DOCTYPE`, element and tag.
{: .instructor}

<img class="embed-img" src="./assets/img/element.jpg" alt="Element and Tag">

