---
layout: base
search_exclude: true
menu: nav/home.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🖼️ Digital Images in Computing</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f7fa;
      color: #333;
    }
    .container {
      max-width: 960px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    h1 {
      text-align: center;
      font-size: 3em;
      color: #1a237e;
    }
    h2 {
      font-size: 2em;
      margin-top: 40px;
      color: #3949ab;
      border-left: 6px solid #ffd54f;
      padding-left: 10px;
    }
    p, li {
      font-size: 1.1em;
      line-height: 1.6;
    }
    .highlight {
      background-color: #ffd54f;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
    }
    .code-section {
      background: #f1f1f1;
      border-radius: 8px;
      padding: 15px;
      font-family: 'Courier New', monospace;
      color: #222;
      margin: 15px 0;
      overflow-x: auto;
    }
    .task {
      background: #f0f4c3;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .note {
      font-style: italic;
      color: #888;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 12px;
      border: 1px solid #ccc;
      text-align: center;
    }
    .mcq {
      background: #e1f5fe;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
    }
    button {
      margin-top: 10px;
      padding: 10px 15px;
      background: #1e88e5;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .answer {
      display: none;
      background: #b3e5fc;
      padding: 15px;
      margin-top: 10px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>🖼️ Digital Images in Computing</h1>

  <h2>🎯 What You'll Learn</h2>
  <ul>
    <li>- What digital images are and how they work.</li>
    <li>- How color is stored using RGB/RGBA.</li>
    <li>- File formats and when to use each one.</li>
  </ul>

  <h2>🔍 What Is a Digital Image?</h2>
  <p>
    A <span class="highlight">digital image</span> is made up of tiny blocks called <strong>pixels</strong>. Each pixel stores color data using values like <span class="code-section">R, G, B</span> (Red, Green, Blue). Together, all the pixels create the full image.
  </p>

  <div class="code-section">
<pre>
Pixel 1: R=255, G=87, B=51   → Orange
Pixel 2: R=0, G=0, B=0       → Black
Pixel 3: R=255, G=255, B=255 → White

As Hex:
[FF5733] [000000] [FFFFFF]
</pre>
  </div>

  <h2>🧪 Pixel Grid Example</h2>
  <p>Here's how a simple 3×1 image might look when broken down:</p>
  <div class="code-section">
<pre>
[ FF5733 ]   [ 000000 ]   [ FFFFFF ]
(Orange)      (Black)      (White)
</pre>
  </div>

  <h2>📦 Types of Image Files</h2>
  <p>Different image file types store pixel data in different ways. Some compress the data, some support transparency, and others are best for animations or graphics.</p>

  <table>
    <thead>
      <tr>
        <th>Format</th>
        <th>Common Use</th>
        <th>Transparency?</th>
        <th>Compression</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>JPEG/JPG</strong></td>
        <td>Photos, Realistic Images</td>
        <td>❌</td>
        <td>Lossy</td>
      </tr>
      <tr>
        <td><strong>PNG</strong></td>
        <td>Web graphics, Icons</td>
        <td>✅</td>
        <td>Lossless</td>
      </tr>
      <tr>
        <td><strong>GIF</strong></td>
        <td>Simple animations</td>
        <td>✅</td>
        <td>Limited colors (256)</td>
      </tr>
      <tr>
        <td><strong>SVG</strong></td>
        <td>Logos, Shapes (Vector)</td>
        <td>✅</td>
        <td>Text-based (no compression)</td>
      </tr>
    </tbody>
  </table>

  <h2>🌈 Color in Images</h2>
  <p>Each pixel typically contains 3 or 4 values:</p>
  <ul>
    <li><strong>R</strong> = Red (0–255)</li>
    <li><strong>G</strong> = Green (0–255)</li>
    <li><strong>B</strong> = Blue (0–255)</li>
    <li><strong>A</strong> = Alpha (0.0 to 1.0) – Opacity level</li>
  </ul>

  <div class="task">
    <strong>Quick Hack:</strong> Can you name a scenario where <span class="highlight">alpha transparency</span> would be helpful? Think: overlays, popups, shadows...
  </div>

  <h2>🌍 Real-World Examples</h2>
  <div class="task">
    <ul>
      <li>🖥️ Websites use <strong>PNG</strong> to show logos without a background.</li>
      <li>📱 GIFs are used for animated stickers in messaging apps.</li>
      <li>🎨 SVGs are used for scalable graphics like icons or charts.</li>
      <li>📸 JPEGs are perfect for vacation photos with lots of color detail.</li>
    </ul>
  </div>

  <h2>📌 Popcorn Hack</h2>
  <div class="task">
    <strong>Turn to a partner and answer:</strong><br>
    Which format would you use for an image with a transparent background that needs to stay sharp on any screen?
  </div>

  <h2>🤔 Practice MCQ</h2>
  <div class="mcq">
    <p><strong>Which file format is best for an image with a transparent background?</strong></p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><input type="radio" name="q1"> A) JPEG</li>
      <li><input type="radio" name="q1"> B) PNG</li>
      <li><input type="radio" name="q1"> C) GIF</li>
      <li><input type="radio" name="q1"> D) BMP</li>
    </ul>
    <button onclick="document.getElementById('image-answer').style.display='block'">Reveal Answer</button>
    <div id="image-answer" class="answer">
      <strong>Correct Answer:</strong> <span class="highlight">B) PNG</span><br>
      PNG supports transparency and doesn't lose image quality.
    </div>
  </div>

  <h2>✅ Key Takeaways</h2>
  <ul>
    <li>Digital images = pixel grids + color data.</li>
    <li>Pixels use RGB or RGBA to store color.</li>
    <li>Choose file formats based on quality, size, and transparency needs.</li>
  </ul>
</div>

</body>
</html>
