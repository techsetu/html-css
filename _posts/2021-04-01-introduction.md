---
layout: episode
title: Introduction
date: 2021-04-04 01:01:01 +0530
teaching: 45
exercises: 15
questions:
- What is HTML/HTML5 and why it is important?
- What is inline and block level elements?
objectives:
- Understand the basics of HTML
- Understand the commonly used HTML tags
keypoints:
- HTML is one of the building block of Web.
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
> > __Instructor:__ Explain what is HTTP methods, status codes, user-agent and other important details.
> > {: .output}
> {: .solution}
{: .challenge}

## What is URL

A URL stands for _Uniform Resource Locator_, also termed a _Web Address_, is a reference to a web resource that represents its location on a internet. [Read more.](https://en.wikipedia.org/wiki/URL){:target="_blank"}

<img class="embed-img" src="./assets/img/url.jpg" alt="URL">

__Instructor:__ Explain _protocol, domain, tld and path.

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
  </body>
</html>
~~~
{: .language-html}

Open the `hello.html` file in browser. This can be done in two ways:
  - Directly go to the file through `File Explorer` and locate the folder `html-css-workshop` and right click to file `hello.html` and click on `open in browser` (see _Open With_).
  - Use the `Live Server` extension to open the file.

  __NOTE:__ Using `Live Server` to open file has benefit as the web page will be updated as we type.
