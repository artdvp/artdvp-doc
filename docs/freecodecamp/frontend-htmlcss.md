# FreeCodeCamp - HTML5 and CSS3

## Say Hello to HTML Elements

Welcome to Free Code Camp's first coding challenge.

You can edit code in your text editor, which we've embedded into this web page.

Do you see the code in your text editor that says `<h1>`Hello`</h1>`? That's an HTML element.

Most HTML elements have an opening tag and a closing tag.

Opening tags look like this:

`<h1>`

Closing tags look like this:

`</h1>`

> Practice

```html
<h1>Hello World</h1>
```

## Headline with the h2 Element

Over the next few challenges, we'll build an HTML5 app that will look something like this:

A screen shot of our finished Cat Photo App

The `h2` element you enter will create an `h2` element on the website.

This element tells the browser about the structure of your website. `h1` elements are often used for main headings, while `h2` elements are generally used for subheadings. There are also `h3`, `h4`, `h5` and `h6` elements to indicate different and new sections.

Add an `h2` tag that says "CatPhotoApp" to create a second HTML `element` below your "Hello World" `h1` element.

> Practice

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

## Inform with the Paragraph Element

`p` elements are the preferred element for normal-sized paragraph text on websites. P is short for "paragraph".

You can create a `p` element like this:

`<p>I'm a p tag!</p>`

Create a `p` element below your `h2` element, and give it the text "Hello Paragraph".

> Practice

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

## Uncomment HTML

Commenting is a way that you can leave comments within your code without affecting the code itself.

Commenting is also a convenient way to make code inactive without having to delete it entirely.

You can start a comment with `<!--` and end a comment with `-->`

Uncomment your `h1`, `h2` and `p` elements.

> Practice

```html
<!-- -->
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
<!-- -->
```

## Comment out HTML

Remember that in order to start a comment, you need to use `<!--` and to end a comment, you need to use `-->`

Here you'll need to end the comment before your `h2` element begins.

Comment out your `h1` element and your `p` element, but leave your `h2` element uncommented.

> Practice

```html
<!--<h1>Hello World</h1> -->

<h2>CatPhotoApp</h2>

<!--<p>Hello Paragraph</p>-->
```

## Fill in the Blank with Placeholder Text

Web developers traditionally use `lorem ipsum text` as placeholder text. The 'lorem ipsum' text is randomly scraped from a famous passage by Cicero of Ancient Rome.

Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.

Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called `kitty ipsum text.`

Replace the text inside your `p` element with the first few words of this `kitty ipsum text: Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

> Practice

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Delete HTML Elements

Our phone doesn't have much vertical space.

Let's remove the unnecessary elements so we can start building our CatPhotoApp.

Delete your `h1` element so we can simplify our view.

> Practice

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Change the Color of Text

Now let's change the color of some of our text.

We can do this by changing the `style` of your `h2` element.

The style that is responsible for the color of an element's text is the "color" style.

Here's how you would set your `h2` element's text color to blue:

`<h2 style="color: blue">CatPhotoApp</h2>`

Change your `h2` element's style so that its text color is red.

> Practice

```html
<h2 style="color:red">CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Join a freeCodeCamp Study Group in Your City

fb group bangkok > [free.code.camp.bangkok](https://www.facebook.com/groups/free.code.camp.bangkok)

## Become a Supporter

supporter > [https://donate.freecodecamp.org/](https://donate.freecodecamp.org/)

## Use CSS Selectors to Style Elements

With CSS, there are hundreds of CSS `properties` that you can use to change the way an element looks on your page.

When you entered `<h2 style="color: red">CatPhotoApp</h2>`, you were giving that individual `h2` element an inline style.

That's one way to add style to an element, but a better way is by using CSS, which stands for `Cascading Style Sheets.`

At the top of your code, create a `style` element like this:

```html
<style>
</style>
```

Inside that style element, you can create a `CSS selector` for all `h2` elements. For example, if you wanted all `h2` elements to be red, your style element would look like this:

```html
<style>
  h2 {color: red;}
</style>
```

Note that it's important to have both opening and closing curly braces (`{` and `}`) around each element's style. You also need to make sure your element's style is between the opening and closing style tags. Finally, be sure to add the semicolon to the end of each of your element's styles.

Delete your `h2` element's style attribute and instead create a CSS `style` element. Add the necessary CSS to turn all h2 elements blue.

> Practice

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Use a CSS Class to Style an Element

Classes are reusable styles that can be added to HTML elements.

Here's an example CSS class declaration:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

You can see that we've created a CSS class called `blue-text` within the `<style>` tag.

You can apply a class to an HTML element like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

Note that in your CSS `style` element, classes should start with a period. In your HTML elements' class declarations, classes shouldn't start with a period.

Inside your `style` element, change the `h2` selector to `.red-text` and update the color's value from `blue` to `red`.

Give your `h2` element the `class` attribute with a value of `'red-text'`.

> Practice

```html
<style>
  h2 {
    color: blue;
  }

  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Style Multiple Elements with a CSS Class

Remember that you can attach classes to HTML elements by using `class="your-class-here"` within the relevant element's opening tag.

Remember that CSS class selectors require a period at the beginning like this:

```css
.blue-text {
  color: blue;
}
```

But also remember that class declarations don't use a period, like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

Apply the `red-text` class to your `h2` and `p` elements.

> Practice

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Change the Font Size of an Element

Font size is controlled by the `font-size` CSS property, like this:

```css
h1 {
  font-size: 30px;
}
```

Create a second `p` element after the existing `p` element with the following kitty ipsum text: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Inside the same `<style>` tag that contains your `red-text` class, create an entry for `p` elements and set the `font-size`to 16 pixels (`16px`).

**Note**
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

Also, please do not add a class attribute to your new `p` element.

> Practice

```html
<style>
  .red-text {
    color: red;
  }
  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

<p>
Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
</p>
```

## Set the Font Family of an Element

You can set an element's font by using the `font-family` property.

For example, if you wanted to set your `h2` element's font to `Sans-serif`, you would use the following CSS:

```css
h2 {
  font-family: Sans-serif;
}
```

Make all of your `p` elements use the `Monospace` font.

> Practice

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Import a Google Font

Now, let's import and apply a Google font (note that if Google is blocked in your country, you will need to skip this challenge).

First, you'll need to make a `call` to Google to grab the `Lobster` font and load it into your HTML.

Copy the following code snippet and paste it into the top of your code editor:

`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

Now you can set `Lobster` as a font-family value on your `h2` element.

Apply the `font-family` of Lobster to your `h2` element.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  h2 {
    font-family: Lobster
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Specify How Fonts Should Degrade

There are several default fonts that are available in all browsers. These include `Monospace`, `Serif` and `Sans-Serif`

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the `Helvetica` font, but also degrade to the `Sans-Serif` font when `Helvetica` wasn't available, you could use this CSS style:

```css
p {
  font-family: Helvetica, Sans-Serif;
}
```

Now comment out your call to Google Fonts, so that the `Lobster` font isn't available. Notice how it degrades to the `Monospace` font.

> Practice

```html
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Images to your Website

You can add images to your website by using the `img` element, and point to a specific image's URL using the `src` attribute.

An example of this would be:

`<img src="https://www.your-image-source.com/your-image.jpg">`

All `img` elements must have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

Lets add an `alt` attribute to our `img` example above:

`<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up. ">`

Note that in most cases, `img` elements are self-closing.

Try it with this image:

https://bit.ly/fcc-relaxing-cat

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>

<img src="https://bit.ly/fcc-relaxing-cat" alt="cat" />
```

## Size your Images

CSS has a property called `width` that controls an element's width. Just like with fonts, we'll use `px` (pixels) to specify the image's width.

For example, if we wanted to create a CSS class called `larger-image` that gave HTML elements a width of 500 pixels, we'd use:

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

Create a class called `smaller-image` and use it to resize the image so that it's only 100 pixels wide.

**Note**
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Borders Around your Elements

CSS borders have properties like `style`, `color` and `width`

For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

Create a class called `thick-green-border` that puts a 10-pixel-wide green border with a style of `solid` around an HTML element, and apply that class to your cat photo.

Remember that you can apply multiple classes to an element by separating each `class` with a space within its class attribute. For example:

`<img class="class1 class2">`

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .smaller-image {
    width: 100px;
  }

  .thick-green-border {
    border: 10px solid green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Rounded Corners with a Border Radius

Your cat photo currently has sharp corners. We can round out those corners with a CSS property called `border-radius`.

You can specify a `border-radius` with pixels. Give your cat photo a `border-radius` of `10px`.

Note: this waypoint allows for multiple possible solutions. For example, you may add `border-radius` to either the `.thick-green-border` class or `.smaller-image` class.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
    border-radius: 10px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Make Circular Images with a Border Radius

In addition to pixels, you can also specify a `border-radius` using a percentage.

Give your cat photo a `border-radius` of `50%`.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
    border-radius: 50%;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Link to External Pages with Anchor Elements

`a` elements, also known as `anchor` elements, are used to link to content outside of the current page.

Here's a diagram of an `a` element. In this case, the `a` element is used in the middle of a paragraph element, which means the link will appear in the middle of a sentence.

Here's an example:

`<p>Here's a <a href="http://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>`

Create an `a` element that links to `http://freecatphotoapp.com` and has "cat photos" as its `anchor text`.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<a href="http://freecatphotoapp.com">cat photos</a>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Nest an Anchor Element within a Paragraph

Again, here's a diagram of an `a` element for your reference:

Here's an example:

`<p>Here's a <a href="https://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>`

`Nesting` just means putting one element inside of another element.

Now nest your existing `a` element within a new `p` element (just after the existing `h2` element) so that the surrounding paragraph says "View more cat photos", but where only "cat photos" is a link, and the rest of the text is plain text.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>
  View more
<a href="http://www.freecatphotoapp.com">cat photos</a>
</p>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Make Dead Links using the Hash Symbol

Sometimes you want to add `a` elements to your website before you know where they will link.

This is also handy when you're changing the behavior of a link using `jQuery`, which we'll learn about later.

Replace the value of your `a` element's `href` attribute with a `#,` also known as a hash symbol, to turn it into a dead link.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Turn an Image into a Link

You can make elements into links by nesting them within an `a` element.

Nest your image within an `a` element. Here's an example:

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera. "></a>`

Remember to use `#` as your `a` element's `href` property in order to turn it into a dead link.

Place the existing image element within an anchor element.

Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#">
<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. "></a>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Create a Bulleted Unordered List

HTML has a special element for creating `unordered lists`, or bullet point-style lists.

Unordered lists start with a `<ul>` element. Then they contain some number of `<li>` elements.

For example:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

would create a bullet point-style list of "milk" and "cheese".

Remove the last two `p` elements and create an unordered list of three things that cats love at the bottom of the page.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. "></a>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>

<ul>
  <li>milk</li>
  <li>cheese</li>
  <li>ball</li>
</ul>
```

## Create an Ordered List

HTML has a special element for creating `ordered lists`, or numbered-style lists.

Ordered lists start with a `<ol>` element. Then they contain some number of `<li>` elements.

For example:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

would create a numbered list of "Garfield" and "Sylvester".

Create an ordered list of the top 3 things cats hate the most.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
  <li>Dog</li>
</ol>
```

## Create a Text Field

Now let's create a web form.

Text inputs are a convenient way to get input from your user.

You can create one like this:

`<input type="text">`

Note that `input` elements are self-closing.

Create an `input` element of type `text` below your lists.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>

<input type="text" />
```

## Add Placeholder Text to a Text Field

Your placeholder text is what appears in your text `input` before your user has input anything.

You can create placeholder text like so:

`<input type="text" placeholder="this is placeholder text">`

Set the `placeholder` value of your text `input` to "cat photo URL".

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<input type="text" placeholder="cat photo URL">
```

## Create a Form Element

You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on `your` form element.

For example:

`<form action="/url-where-you-want-to-submit-form-data"></form>`

Nest your text field in a `form` element. Add the `action="/submit-cat-photo"` attribute to this form element.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>

<form action="/submit-cat-photo">
<input type="text" placeholder="cat photo URL">
</form>
```

## Add a Submit Button to a Form

Let's add a `submit` button to your form. Clicking this button will send the data from your form to the URL you specified with your form's action attribute.

Here's an example submit button:

`<button type="submit">this button submits the form</button>`

Add a submit button to your `form` element with type `submit` and "Submit" as its text.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
  <button type="submit">Submit</button>
</form>
```

## Use HTML5 to Require a Field

You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the word `required` within your `input` element, you would use: `<input type="text" required>`

Make your text `input` a `required` field, so that your user can't submit the form without completing this field.

Then try to submit the form without inputing any text. See how your HTML5 form notifies you that the field is required?

**Note**: This field does not work in Safari.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Create a Set of Radio Buttons

You can use `radio buttons` for questions where you want the user to only give you one answer.

Radio buttons are a type of `input`

Each of your radio buttons should be nested within its own `label` element.

All related radio buttons should have the same `name` attribute.

Here's an example of a radio button:

`<label><input type="radio" name="indoor-outdoor"> Indoor</label>`

Add a pair of radio buttons to your form. One should have the option of `indoor` and the other should have the option of outdoor.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL" required>
 <br><label><input type="radio" name="indoor-outdoor" /> indoor</label>
   <label><input type="radio" name="indoor-outdoor" /> outdoor</label>
  <button type="submit">Submit</button>
</form>
```

## Create a Set of Checkboxes

Forms commonly use `checkboxes` for questions that may have more than one answer.

Checkboxes are a type of `input`

Each of your checkboxes should be nested within its own `label` element.

All related checkbox inputs should have the same `name` attribute.

Here's an example of a checkbox:

`<label><input type="checkbox" name="personality"> Loving</label>`

Add to your form a set of three checkboxes. Each checkbox should be nested within its own `label` element. All three should share the `name` attribute of `personality`.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <br>
  <label><input type="checkbox" name="personality">Skittishness</label>
    <label><input type="checkbox" name="personality">Outgoingness</label>
    <label><input type="checkbox" name="personality">Domminance</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Check Radio Buttons and Checkboxes by Default

You can set a checkbox or radio button to be checked by default using the `checked` attribute.

To do this, just add the word "checked" to the inside of an input element. For example:

`<input type="radio" name="test-name" checked>`

Set the first of your `radio buttons` and the first of your `checkboxes` to both be checked by default.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Nest Many Elements within a Single Div Element

The `div` element, also known as a division element, is a general purpose container for other elements.

The `div` element is probably the most commonly used HTML element of all. It's useful for passing the CSS of its own class declarations down to all the elements that it contains.

Just like any other non-self-closing element, you can open a `div` element with `<div>` and close it on another line with `</div>`.

Try putting your opening `div` tag above your "Things cats love" `p` element and your closing `div` tag after your closing ol tag so that both of your lists are within one `div`.

Nest your "Things cats love" and "Things cats hate" lists all within a single `div` element.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<div>
<p>Things cats love:</p>
</div>
<div>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
</div>
<div>
<p>Top 3 things cats hate:</p>
</div>
<div>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
</div>

<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Give a Background Color to a Div Element

You can set an element's background color with the `background-color` property.

For example, if you wanted an element's background color to be `green`, you'd put this within your `style` element:

```css
.green-background {
  background-color: green;
}
```

Create a class called `silver-background` with the `background-color` of silver. Assign this class to your `div` element.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
</div>

<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Set the ID of an Element

In addition to classes, each HTML element can also have an `id` attribute.

There are several benefits to using `id` attributes, and you'll learn more about them once you start using jQuery.

`id` attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same `id` attribute.

Here's an example of how you give your `h2` element the id of `cat-photo-app`:

`<h2 id="cat-photo-app">`

Give your `form` element the id `cat-photo-form`.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
</div>

<form id="cat-photo-form" action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Use an ID Attribute to Style an Element

One cool thing about `id` attributes is that, like classes, you can style them using CSS.

Here's an example of how you can take your element with the `id` attribute of `cat-photo-element` and give it the background color of green. In your style element:

```
#cat-photo-element {
  background-color: green;
}
```

Note that inside your `style` element, you always reference classes by putting a `.` in front of their names. You always reference ids by putting a `#` in front of their names.

Try giving your form, which now has the `id` attribute of `cat-photo-form`, a green background.

> Practice

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }

  #cat-photo-form {
    background-color: green
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
</div>

<form action="/submit-cat-photo" id="cat-photo-form">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Adjusting the Padding of an Element

Now let's put our Cat Photo App away for a little while and learn more about styling HTML.

You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element: `padding`, `margin`, and `border`.

An element's `padding` controls the amount of space between the element and its `border`.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more `padding` than the green box.

When you increase the green box's `padding`, it will increase the distance between the text `padding` and the border around it.

Change the `padding` of your green box to match that of your red box.

**Note**: padding in border

> Practice

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: red;
    padding: 20px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

## Adjust the Margin of an Element

An element's `margin` controls the amount of space between an element's `border` and surrounding elements.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more `margin` than the green box, making it appear smaller.

When you increase the green box's `margin`, it will increase the distance between its border and surrounding elements.

Change the `margin` of the green box to match that of the red box.

**Note**: margin out of border

> Practice

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    padding: 20px;
    margin: 20px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
