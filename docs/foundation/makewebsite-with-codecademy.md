# Make a Website by Codecademy

ref : [link](https://www.codecademy.com/learn/make-a-website)

# 1 - Site Structure

## 1. What are HTML and CSS?
All websites use HTML and CSS. After learning both of these languages, you will be ready to build your own website!

- HTML stands for Hyper Text Markup Language. It is used to give websites structure with text, links, images, and other fundamental elements.

- CSS stands for Cascading Style Sheets. It is used to change the appearance of HTML elements.

## 2. Anatomy of an HTML Element
Let's explore the basic anatomy of an HTML element. Line 9 of index.html contains a heading element:

```html
<h1>You're Building a Website!</h1>
```

All HTML elements begin with an opening tag. In this case, the opening tag is `<h1>`.

Most elements require a closing tag, denoted by a `/`. In this case, the closing tag is `</h1>`.

The website user only sees the content between the opening and closing tags.

## 3. Add a Heading
Now, let's learn more about the heading element.

Headings are a frequently used HTML element. You can think of them like headlines in a newspaper. Your eyes may notice headings first because the words are large and bold compared to other text on the webpage.

There are six heading elements: `h1`, `h2`, `h3`, `h4`, `h5`, and `h6`. `h1` is the largest heading and `h6` is the smallest.

## 4. Add a Paragraph
The webpage now has a heading and a tagline. Next, we will add a description of the company.

The HTML paragraph element, p, is used to hold one or more sentences, just like paragraphs in an essay or a book.

```html
<p>Paragraph text here</p>
```

## 5. Anchor Elements
Nice work! The webpage is starting to come together.

What if you wanted to link users to a different webpage? The HTML anchor element makes it possible to do this with a single click.

```html
<a href="http://google.com"> Click here for Google!</a>
```

Anchor elements use an attribute to link users to websites. Attributes customize the behavior or appearance of HTML elements. Anchor elements use the href attribute, which specifies the webpage to link to. In the example above, the text "Click here for Google!" links to http://google.com.

## 6. A Closer Look

Good job! Creating links with the anchor element is a fundamental web development skill.

The diagram to the right illustrates the different parts of the anchor element syntax. In the diagram, notice the following:

Any valid URL can be used for the value of the href attribute.

The URL must be enclosed with quotation marks.

Text between the `<a>` and `</a>` tags can be as few or as many words as you would like.

## 7. Adding Images
To add images to a webpage, use the HTML image element:

```html
<img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/bikes1.jpg"/>
```

Just like websites have URLs, images on the web also have URLs. Image URLs typically end with the .jpg or .png file extension. The src attribute sets the source for an image element.

Image elements are self-closing, which means they do not need a closing tag.

## 8. Add a Video
Awesome! The photo makes the webpage much cooler. What's cooler than a photo? A video!

The HTML video element can add video to a webpage.

```html
<video width="320" height="240" controls>
  <source src="video-url.mp4" type="video/mp4">
</video>
```

The video element uses a number of attributes. Let's take a look at them:

1. `width` and `height`: Set the size of the screen that displays the video.

2. `controls`: Adds play, pause and volume control.

3. `source src`: Sets the URL of the video to play.

4. `type`: Specifies different video formats.


## 9. Create an Unordered List
Impressive! With just five page elements, you've already created an interesting website!

Another essential HTML element is the unordered list. Items in an unordered list are referred to as list items. Each item is bulleted, not numbered. For example:

A list item
A second list item
A third list item
The HTML code for the list above:

```html
<ul>
  <li>A list item</li>
  <li>A second list item</li>
  <li>A third list item</li>
</ul>
```

About unordered lists:

1. `ul` tags create the unordered list.

2. `li` tags contain each list item.
Unordered list elements can be used to organize content on a webpage in a number of ways. Below we will use one to organize our website's navigation menu, sometimes called a navbar.

## 10. Parent and Child Elements

With the video and unordered list elements, you may have noticed something interesting: these HTML elements had other HTML elements nested inside of them.

For example, in unordered lists, `li` elements are nested inside the `ul`.

```html
<ul>
  <li>First item</li> 
  <li>Second item</li>
</ul>
```

Web developers refer to the enclosing element as the parent element and the enclosed elements as children.

## 11. Add a Div
Now that we know about HTML element nesting and parent/child relationships, let's see another way these concepts are applied on a real-life webpage.

Div elements divide your page by enclosing other elements. These enclosed groups of elements can then be organized, moved and styled independently from one another.

Div elements are often used with the class attribute. Here's an example:

```html
<div class="main">
 ...
</div>
```

Note: The `...` indicates where other HTML elements would normally be enclosed by the div.

## 12. Metadata: The Brains

The last HTML elements we will explore are involved in metadata processes. You can think of these elements as the "brains" of a webpage because they communicate vital information to the web browser, but are not visible to a webpage visitor.

1. `<!DOCTYPE html>`: Tells the web browser to expect an HTML document.

2. `<html>...</html>`: The root of the HTML document and parent of all other HTML elements on the webpage.

3. `<head>...</head>`: Enclose other metadata about the site, such as its title.

4. `<title>...</title>`: Contains the site's title, which is one way users can find your site through a search engine, like Google.

5. `<meta charset="utf-8"/>`: Tells the web browser which character set to use. In this case, the character set is "utf-8".

## 13. HTML Review


### LANGUAGES

`html`: stands for hypertext markup language, and is used to give a webpage structure.

`css`: stands for cascading style sheets, and is used to style HTML elements.

### HTML ELEMENTS

- `h1` - `h6`: indicate text headings on a webpage. h1 is the largest heading; `h6` is the smallest.

```html
<h1>Heading</h1>
```

- `p`: used for non-heading text, such as the bodies of articles or company descriptions.

```html
<p>Description of company here.</p>
```

- `a`: short for anchor and used to add links to other webpages. Anchor elements typically have an href attribute:

```html
<a href="http://codecademy.com">Click here</a> to learn how to make a website!
```

- `img`: used to add an image to a webpage. Image elements are self-closing and do not require a closing tag:

```html
<img src="https://images.com/favorite.png">
```

- `video`: used to add videos to a webpage, and uses multiple attributes and a nested source element:

```html
<video width="320" height="240" controls>
  <source src="https://movies.io/great-clip.mp4" type="video/mp4">
</video>
```

- `unordered list`: used to create lists on a webpage and requires `li` elements inside a `ul`:

```html
<ul>
  <li>list item</li>
  <li>another item</li>
  <li>yet another</li>
</ul>
```

- `div`: used to organize HTML elements into different groups, which can be given a class attribute:

```html
<div class="main">
  <h2>Subheading!</h2>
</div>
```

- `metadata tags`: provide metadata about a webpage.

### WEB CONCEPTS

parent/child elements: used to describe HTML elements that enclose or are enclosed by other elements. For example, below the ul is the parent and the li items are children:

```html
<ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>
```

# 2 - A Closer Look at CSS

## 1. Why Use CSS?

CSS is a language used to style websites. Colors, fonts, and page layouts for a site can all be managed using CSS. The more comfortable you are with CSS, the better equipped you will be to create stylish and contemporary-looking websites.

## 2. Link to Stylesheet

Take a look at the web browser. Technically, this is the same site you saw in the previous exercise. It contains the exact same HTML elements and content as before. What's missing? The CSS that was used to previously style the site has been unlinked.

The HTML link element links a CSS file to an HTML file so that CSS styling can be applied. Here's an example of the link element:

```html
<link rel="stylesheet" type="text/css" href="main.css"/>
```

#### About link:

The link element uses three attributes:

- **rel**: Specifies the relationship between the current file and the file being linked to: in this case, the rel attribute is "stylesheet".

- **type**: Specifies the type of file linked to.

- **href**: Provides the URL of the file being linked to.

Like the HTML image element, link is self-closing. It does not need a closing tag. 

In the example above, **main.css** is an external style sheet. Using external stylesheets is one of the most popular ways to write CSS. Inline CSS is another method.

## 3. Anatomy of a CSS Rule
Awesome job! Now **main.css** is linked to **index.html**. Before we start writing our own CSS, let's take a look at how CSS code works.

The diagram to the right shows the anatomy of a CSS rule:

1. rule: a list of CSS instructions for how to style a specific HTML element or group of HTML elements.

2. selector: specifies exactly which HTML elements to style. Here **h1** is the selector.

3. properties and values: located inside the **{ }** brackets, properties and values specify what aspect of the selector to style. In the diagram's example, the **color** property is set to **red**, which will display all **h1** elements in red.

<img src="http://www.clipular.com/c/5670473272918016.png?k=7xEXpoTnc6-Lj2A9SLM0q0EzXW8" alt="alt text" title="Title" />

## 4. Font-family
One of the most effective ways to enhance the look and feel of a website is by changing the font. In CSS, font is managed using the font-family property:

```css
h1 {
  font-family: Georgia, serif;
}
```

Above, the **font-family** property of the **h1** selector is set to the value of **Georgia**, with **serif** as a fallback font. Fallback fonts are included in case a visitor's web browser does not support the first font. Sometimes, more than one fallback font is included.

## 5. Color 

The new font looks great! However, black is not your only option when it comes to font color.

In CSS, the color property sets the color of a CSS selector's font:

```css
h1 {
  color: red;
}
```

CSS comes equipped with 140 named colors, such as **red**, used above. For many situations, these named colors will suffice. However, web developers who want to get even more exact with their color choices can use hexadecimal and RGB color values.

1. Hexadecimal color **(#RRGGBB)** : Hexadecimal values that represent mixtures of red, green and blue. For example, red can be expressed with the hexadecimal value of **#FF0000:** the value **ff** represents red, **00** represents green, and **00** represents blue.

2. RGB (Red, Green, Blue) colors: Color created by three numbers representing red, green, and blue. When mixed together, the three values create a specific color. For example: purple can be represented as **rgb(128,0,128);**

## 6. CSS Class Selectors

Up to this point, we've used CSS to select an HTML element by its tag name only. However, we can use class selectors to target classes of HTML elements.

Consider the HTML below:

```html
<div class="header">
  <h2>Heading</h2>
  <p>Paragraph</p>
</div>
```

Here, the **div** is the parent element and the **h2** and **p** are children. CSS styles applied to the **header** class selector will automatically apply to the **h2** and the **p**.

Here's a refresher on parent and child elements.

In CSS, class selectors can be identified by a dot **.** followed by the class name, as seen below:

```css
.header {
  color: #ffffff; 
}
```

As a result of this code, child elements of divs with the **header** class will have a font color of **#ffffff** (white).

Below, we will use a CSS class selector to style more than one HTML element at once.

## 7. font-size

The size of text has an impact on how users experience a website. The font-size property sets the size of an HTML element's text.

```css
h1 {
  font-size: 60px; 
}
```

In the CSS above, **font-size** is set to **60px.** In CSS, size can be assigned in pixels (px), rems, or ems.

1. pixel (px): Standard unit of measurement for sizing fonts and other HTML elements.

2. rem: Represents the default font size for the web browser. Rems can be used to ensure that HTML elements scale in proportion to each other on various web browsers and screen sizes. On most web browsers, **1rem** is equivalent to **16px**, **2rem** is equivalent to **32px** (a doubling), 3rem is equivalent to **48px** (a tripling) and so on.

3. em: A relative value that changes in proportion to the size of the parent element. For example, if a parent element has **font-size: 20px;**, child elements with **font-size: 1em**; would be equivalent to 20px. Child elements with **font-size: 0.5em;** would be equivalent to **10px** (a halving) and so on.

## 8. A Background Image

In CSS, the background-image property sets a background image of your choice for a given selector, as seen below.

```css
.hero {
  background-image: url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
}
```

The CSS rule above assigns the image hosted at

```css
https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg
```

to elements that have a class attribute set to **hero.**

To control the size of the chosen background image, use the property background-size as seen below:

```css
.hero {
  background-image: url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
  background-size: cover;
}
```

Here, we have specified that we want the image to completely cover elements with the **.hero** class.

## 9. CSS id Selectors

The background image makes a big difference. Nice work!

A previous exercise introduced CSS class selectors to style HTML elements of specific classes. What if a webpage design calls for an individual page element to be styled uniquely, but all other elements of that kind to be styled a different way?

For example, to style one anchor element differently than all the others on a webpage, you could use the HTML id attribute:

```html
<a id="learn-code" href="https://www.codecademy.com">Click here to learn to code!</a>
```

Then in the CSS file, you would create a rule for the id selector, using a **#** symbol:

```css
#learn-code {
  color: #2e69a3;  
}
```

About using id:

1. An id attribute can only be used once because the id is unique to the element it is assigned to.

2. Ids have greater specificity than classes. If an HTML element is using both id and class attributes, the CSS rule for the id will take precedence over that of the class.

## 10. CSS-review

WEB CONCEPTS

- CSS: Language used to style websites. Colors, fonts, and page layouts for a site are managed using CSS.
- CSS Selectors: specifies exactly which HTML elements to style

 - class selectors: used to target classes of HTML elements
 - id selectors: used to style an HTML element which has an id attribute.
- External Stylesheet: CSS file that styles an HTML file externally via the HTML link element.

CSS PROPERTIES

- font-family: sets font for a CSS selector.
- color: sets font color for the CSS selector.
- font-size: sets font size for text.
- background-image: sets a background image of your choosing for a given selector.

[Link](https://embed.plnkr.co/zzJYvIgJV4kywnvPEdgG/)


-----
# 3 - Boundaries and Space
## 1. The Box Model

Observe the CSS box model diagram to the right:

1. content: Includes text, images, or other media contained within an HTML element.

2. padding: The space between the content and the border. You can think of this like inner space.

3. border: The outline of an HTML page element. You can think of it like a picture frame that contains the element.

margin: The space between the HTML page element and the next nearest element(s).

<img src="http://www.clipular.com/c/5247829700509696.png?k=l-W8ImNglq4EyZ1QBFOzd4KPU64" alt="alt text" title="Title" />

## 2. Create Border

The border property can be used to visually define a page element's outer edge.

In CSS, the border property's value requires three parts:

1. thickness: Sets the thickness of the border, using pixels, ems, or rems.
2. type: Sets the border type. Common options are **solid**, **dotted**, and **dashed**. There are many others.
color: sets the border's color, using named colors, HEX, or RGB values.
The CSS below gives a paragraph element a solid black border that is 2 pixels thick:

```css
p {
  border: 2px solid black; 
}
```

## 3. Working with Padding

The CSS padding property controls the empty space between the page element's content and its border. Increasing a page element's padding makes the space around the content more spacious, while decreasing it makes the space more compact.

```css
p {
  padding: 20px; 
}
```

The CSS above would give paragraph elements a padding of **20px**.

## 4. Working with Margin

The CSS margin property controls the space between different HTML elements on a webpage. Use margin to bring page elements closer together or to move them further apart.

The CSS below ensures **2rems** of space between elements with the class **answer** and surrounding page elements.

```css
.answer {
  margin: 2rem;
}
```

## 5. More Margins

The **margin** property creates space on all sides of a page element. It's also possible to set separate margin spacings on each side of an element.

Additional margin properties:

margin-top: Sets the top margin.
margin-bottom: Sets the bottom margin.
margin-left: Sets the left margin.
margin-right: Sets the right margin.
Note: Below we will change margin properties for a div that encloses HTML figure elements. Figures are used to organize visuals, such as photos and diagrams.

## 6. Understanding Display

Using borders, padding, and margins allows us to control boundaries and space for individual HTML elements.

But what CSS properties are available to move elements around on the page and create unique page layouts? The CSS display and position properties help accomplish this.

DISPLAY

Not all HTML elements are displayed on a page in the same way. Display types determine how HTML elements will be arranged in relation to each other.

The diagram to the right illustrates the block and inline display types.

<img src="http://www.clipular.com/c/5097705024258048.png?k=57mqppdEqc9FHBK4pwNezt9OXdI" alt="alt text" title="Title" />

## 7. Keep it Inline

Display types can be overwritten in CSS by using the display property.

For example, we can make list items appear on the same line by setting display to **inline**:

```css
li {
  display: inline;
}
```
Note: Below, we will encounter an HTML nav element. Navs are used to organize site navigation menus on a webpage.

## 8. Using Float

Nice work! The navbar is starting to come together nicely. It would be even better if we could get the **Contact** button to fill in the empty corner on the bottom right.

To achieve this, we can use the CSS float property. By using float, we have the option of floating elements left or right.

Consider the example code below. The class selector, **.logo**, floats **left**, and the id selector **#search-bar** floats **right**:

```css
.logo {
  float: left; 
}

#search-bar {
  float: right; 
}
```

Let's arrange the Contact button using float

## 9. Display : Flex

In the web browser, the gallery images that were arranged neatly in rows are now stacked on the left side of the webpage.

The CSS display value that arranged the images, flex, has been removed. In addition to other capabilities, flex can be used to easily align multiple page elements horizontally.

In the example code below, there is a div with class **parent**:

```css
<div class="parent">
   ...
</div>
```
To make children of the div align horizontally on the webpage, in CSS we can use:

```css
.parent {
  display: flex;
}
```
Children elements of the div with class **parent** will now align horizontally. We can make sure no child element moves off the page by using **flex-wrap: wrap;**:

```css
.parent {
  display: flex;
  flex-wrap: wrap;
}
```
Finally, to center rows of children elements, we can use **justify-content: center;**:

```css
.parent {
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;
}
```

## 10.Working with Position

The CSS position property enables you to position HTML elements in exact locations on a webpage. One useful value for this property is relative. This value positions page elements on a webpage relative to where they would normally appear.

By first setting **position: relative;**, you can then use the CSS properties **top**, **left**, **bottom**, and **right** to shift an element away from where it would have normally appeared on the page.

The code snippet below moves a div with the class **container** **10px** away from the up and **20px** away from the left side of the page.

```css
.container {
  position: relative; 
  top: 10px; 
  left: 20px;
}
```

Ever click a button on a webpage that seemed to move down and then back up like a real-life button? We can implement this trick using the **position** property.

-------
# 4 - Building with Bootstrap
## 1. CSS Frameworks

Bootstrap is a popular CSS framework with prewritten CSS rules designed to help you build webpages faster.

Take a look at the web browser. In this lesson, we will build this webpage up from scratch using a combination of Bootstrap and custom CSS.

Also in this lesson, we will encounter three new HTML elements:

- `header`: Used to organize headers on a webpage.

- `footer`: Used to organize footers on a webpage.

- `section`: Defines sections on a webpage.

## 2. Connecting to Bootstrap

Before Bootstrap can work for us, we need to link to it.

In earlier lessons, we linked only to **main.css.** Now, in addition to **main.css,** we will link to a URL that hosts Bootstrap.

The HTML link element makes Bootstrap available to us. Remember that the link element is typically contained within HTML head tags.

```html
<head>
  ... 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
  ...
</head>
```

Above, the **href** attribute is set to the URL **https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css.**

Let's explore what Bootstrap can do for us.

## 3. On the Grid

One of the reasons Bootstrap and frameworks like it are so popular is because they offer grids. A grid makes it possible to organize HTML elements using preconfigured columns. Using a grid, you can customize responsive page layouts quickly and reliably.

The Bootstrap grid contains 12 equal-sized columns, as seen in the diagram on the right. HTML elements are arranged to span different numbers of columns in order to create custom page layouts.

In the diagram, observe the following:

1. Bootstrap's grid columns are represented by 12 vertical bars. The boxes represent HTML elements.

2. The words `"container"`, `"jumbotron"`, "col-sm-6" and "col-sm-3" refer to Bootstrap classes. 

3. The element with class `"jumbotron"` spans the entire width of the webpage, beyond the borders of the grid. 

4. Elements inside the second `"container"`, such as "col-sm-6" and `"col-sm-3"` are contained within the grid columns. 

5. Elements labeled `"col-sm-3"` take up three grid columns; elements labeled `"col-sm-6"` take up six grid columns.

<img src="http://www.clipular.com/c/6537072850763776.png?k=h2eoo7RuypHQwgdwqTDPMnXjnWE" alt="alt text" title="Title" />

## 4. Header/Navigation

Let's use Bootstrap's grid to create a simple header with navbar.

In the example code below, an HTML header element with Bootstrap's predefined **container** class is used:

```html
<header class="container">
 ...
</header>
```

Inside the header, a row is created by using a div with Bootstrap's **row** class:

```html
<header class="container">
  <div class="row">
  </div> 
</header>
```

Finally, the row is cut into two parts:

```html
<header class="container">
  <div class="row">
   <h1 class="col-sm-4">Heading</h1>
   <nav class="col-sm-8 text-right">
    <p>nav item 1</p>
    <p>nav item 2</p>
    <p>nav item 3</p>
   </nav> 
 </div>
</header>
```

The first part consists of the **h1** with Bootstrap's class **col-sm-4.** It will take up the first four columns on the grid. The second part consists of the **nav** element with class **col-sm-8.** It will take up the remaining eight grid columns. **text-right** indicates that text will be arranged on the right side of the **nav.**


## 5. The Jumbotron

In addition to a header/navigation, many websites have a large showcase area featuring important content. Bootstrap refers to this as a jumbotron. Below is an example implementation of a jumbotron.

First, a new section element is created and assigned the jumbotron class:

```html
<section class="jumbotron">

</section>
```

Next a div with the Bootstrap class container is used:

```html
<section class="jumbotron">
  <div class="container">
  ... 
  </div>
</section>
```

A div with the Bootstrap class row text-center can center subsequent child elements which will contain text:

```html
<section class="jumbotron">
  <div class="container">
    <div class="row text-center">
       ...
    </div>
  </div>
</section>
```

The ... is a placeholder for HTML elements containing text, such as h2, p or anchor elements.

Let's explore the jumbotron feature by creating our own below!

## 6. Supporting Content

Many websites have a supporting content area. Supporting content can be arranged using Bootstrap's grid. Below is an example implementation of a supporting content area.

First, an HTML section element with the **container** class is used:

```html
<section class="container">

</section>
```

Next, div elements with the **ow** class are added:

```html
<section class="container">
  <div class="row">
  </div>
  <div class="row">
  </div>
</section>
```

Finally, the rows are divided by using divs with Bootstrap's **col-sm-...** class.


```html
<section class="container">
  <div class="row">
    <div class="col-sm-6">
     
    </div>
    <div class="col-sm-6">
     
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
     
    </div>
    <div class="col-sm-6">
     
    </div>
  </div>
</section>
```

Above, two rows are divided into two equal parts. Each part takes up 6 of bootstrap's 12 columns. Using the **col-sm-6** class ensures that this layout will appear when the user's screen is the width of a tablet device(768 pixels). On narrower screens, such as an iPhone, only one image per row will appear.

## 7. Footers

Congratulations! You've made it to the bottom of the webpage: the footer!

Footers display copyright information, social media links and sometimes site navigation.

Below is one possible implementation for a footer section using Bootstrap:

First, a footer element with Bootstrap's **container** class is used:

```html
<footer class="container">

</footer>
```

Inside the footer, a div with Bootstrap's **row** class is added to hold footer content:

```html
<footer class="container">
  <div class="row">
  ... 
  </div>
</footer>
```

Finally, the row is divided into parts using Bootstrap's grid. Here is one suggestion:

```html
<footer class="container">
  <div class="row">
    <p class="col-sm-4">...</p>
    <ul class="col-sm-8">
      <li class="col-sm-1">...</li>
      <li class="col-sm-1">...</li>
      <li class="col-sm-1">...</li>
    </ul>
  </div>
</footer>
```

Above, the row is broken into three parts: a **p** element that takes up four columns, a **ul** which takes up 8 columns, and **li** items which take up 1 column each. The **lis** could hold navigation menu items or social media icons.

Again, because the **col-sm-...** class is used, this layout will appear on tablet-width screens and wider. Screen sizes smaller than tablet-width (768 pixels), will not maintain this layout.

Now let's write the code for












