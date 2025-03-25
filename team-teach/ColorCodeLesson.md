---
layout: base
search_exclude: true
menu: nav/home.html
---

*Learning Objectives*

- Understand what color codes are and why they are important in web development.

- Learn the different types of color codes: Hexadecimal (Hex), RGB, and HSL.

- Apply color codes in a web page using HTML and CSS.

***Introduction To Color Codes:***

**What are Color Codes?**

- Color codes are used in web development to define colors for HTML elements like text, backgrounds, and borders.

- In HTML and CSS, colors are often defined using different color code formats (Hex, RGB, HSL).

**Why Use Color Codes?**

- Color codes ensure consistency in design, making sure the same colors are used throughout the website.

- They make it easier for developers to communicate and work with colors programmatically.

**Types Of Color Codes** 

Hexidecimal Color Codes:

- Hexadecimal color codes are six-character strings representing colors in a base-16 system (using numbers 0-9 and letters A-F).

- The format is #RRGGBB, where:

- RR represents red (00 to FF),
- GG represents green (00 to FF),
- BB represents blue (00 to FF).


**RGB**

RGB is represented in intensities of color. For example, out of a 255 color scale, ranging from RR,GG,BB. 
In the RGB model, each of the three primary colors can have an intensity value ranging from 0 to 255.

0 means the color is absent (no light).
255 means the color is at full intensity (maximum brightness).

Example: 

- rgb(255, 0, 0): This means full red with no green or blue. It will appear as a pure red.

- rgb(0, 255, 0): This means full green with no red or blue. It will appear as a pure green.

- rgb(0, 0, 255): This means full blue with no red or green. It will appear as a pure blue.

**Example**

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hexadecimal Color Example</title>
  <style>
    body {
      background-color: #FF5733;  /* Reddish-orange color */
    }
  </style>
</head>
<body>
  <h1>Welcome to the Color Codes Lesson!</h1>
  <p>This page uses a hexadecimal color code for the background color.</p>
</body>
</html>

**Explanation of the Example:**

- The background color of the page is set to #FF5733 (a reddish-orange color).

- #FF5733: FF is the red component (255), 57 is the green component (87), and 33 is the blue component (51).

Converting RGB to Hex:

- To convert rgb(255, 87, 51) into its Hex equivalent #FF5733, we need to convert each of the RGB components from decimal (base-10) to hexadecimal (base-16):

- In order to convert from RBG to Hex, you need to divide the RGB by 16 and the resulting numbers will correspond to letters/numbers

**For Example:**

- To convert 255 to hexadecimal, divide 255 by 16:
- 255 ÷ 16 = 15 remainder 15.
- The quotient 15 is written as F in Hex.
- The remainder 15 is also written as F in Hex.


The second component is green, which has a value of 87 in decimal.

- Decimal to Hex Conversion:
- To convert 87 to hexadecimal, divide 87 by 16:
- 87 ÷ 16 = 5 remainder 7.
- The quotient 5 is written as 5 in Hex.
- The remainder 7 is written as 7 in Hex.

and so on and so on...

**Summary:**


- RGB (255, 87, 51) is a way of saying:

- 100% red intensity, 34% green intensity, and 20% blue intensity.
- #FF5733 is the Hexadecimal representation of the same color, where:
- FF represents red, 57 represents green, and 33 represents blue.

**Popcorn Hack #1**

<img src="{{site.baseurl}}/images/Screenshot 2025-03-20 at 9.26.44 AM.png" alt="DataMango" style="width:100%; max-width:600px;">

Analyze 5 likely color combinations for the image above, explain which colors and sets you chose. 

Convert First into RGB, Then Hexidecimal Code.

**Homework Hack #1**

Choose any image you like, and then create data for RGB, Hexidecimal Code, 

IF you add Binary you get extra credit 

Example From Mr Mort.

<img src="{{site.baseurl}}/images/Screenshot 2025-03-20 at 6.01.52 PM.png" alt="DataMango" style="width:100%; max-width:600px;">

