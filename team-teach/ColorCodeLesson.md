---
layout: base
search_exclude: true
menu: nav/home.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Codes 101 🎨</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #fdfdfd;
      margin: 0;
      padding: 30px;
      color: #222;
    }
    .lesson {
      max-width: 900px;
      margin: auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    h1 {
      font-size: 2.8em;
      color: #6a1b9a;
      text-align: center;
    }
    h2 {
      font-size: 1.9em;
      margin-top: 40px;
      border-bottom: 2px solid #6a1b9a33;
      padding-bottom: 6px;
    }
    .info-block {
      background: #f3e5f5;
      padding: 20px;
      border-left: 6px solid #6a1b9a;
      border-radius: 5px;
      margin: 20px 0;
    }
    .code {
      font-family: monospace;
      background: #eee;
      padding: 10px 15px;
      border-radius: 4px;
      display: inline-block;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 10px;
      border: 1px solid #ddd;
      text-align: center;
    }
    .quiz {
      background: #ede7f6;
      padding: 20px;
      margin-top: 40px;
      border-left: 6px solid #4527a0;
      border-radius: 5px;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      background: #6a1b9a;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .answer {
      display: none;
      background: #d1c4e9;
      padding: 15px;
      margin-top: 15px;
      border-radius: 5px;
    }
    .discussion {
      background: #fff3e0;
      padding: 15px;
      border-left: 5px solid #ff9800;
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="lesson">
    <h1>Color Codes 101 🎨</h1>

    <h2>✨ Why Should You Care?</h2>
    <p>Whether you're building a website, designing an app, or creating digital art, <strong>colors are everywhere</strong>. But how does a computer "know" what a color looks like? That’s where <span class="code">color codes</span> come in!</p>

    <h2>📌 Three Ways to Code a Color</h2>

    <div class="info-block">
      <strong>🔷 Hex Codes</strong><br>
      A 6-digit code starting with <span class="code">#</span> and using numbers and letters (0–9, A–F).<br>
      <strong>Example:</strong> <span class="code">#FF0000</span> = Red
    </div>

    <div class="info-block">
      <strong>🔶 RGB</strong><br>
      Uses Red, Green, and Blue values from 0 to 255.<br>
      <strong>Example:</strong> <span class="code">rgb(255, 0, 0)</span> = Red
    </div>

    <div class="info-block">
      <strong>🔷 RGBA</strong><br>
      Like RGB, but adds Alpha (opacity) from 0 (transparent) to 1 (opaque).<br>
      <strong>Example:</strong> <span class="code">rgba(255, 0, 0, 0.5)</span> = 50% transparent red
    </div>

    <h2>🖥️ How Computers Interpret Colors</h2>
    <p>Computers store colors as a combination of red, green, and blue light values. The higher the value, the more intense that color appears. Mixing these values produces different shades, just like mixing paint.</p>

    <h2>🎨 More Color Formats</h2>
    <div class="info-block">
      <strong>🟡 HSL (Hue, Saturation, Lightness)</strong><br>
      Instead of mixing red, green, and blue, HSL represents colors based on their hue (color type), saturation (intensity), and lightness (brightness).<br>
      <strong>Example:</strong> <span class="code">hsl(120, 100%, 50%)</span> = Pure Green
    </div>

    <div class="info-block">
      <strong>🌈 CMYK (Cyan, Magenta, Yellow, Black)</strong><br>
      Used in printing, CMYK works by subtracting light instead of adding it like RGB. Printers use ink instead of light to create colors.<br>
      <strong>Example:</strong> (0, 100, 100, 0) = Red in CMYK
    </div>

    <h2>🌎 Real-World Uses of Color Codes</h2>
    <ul>
      <li>📱 <b>User Interfaces:</b> Apps and websites use hex or RGBA for text, buttons, and backgrounds.</li>
      <li>🎥 <b>Video Games & Graphics:</b> Game engines use color codes for textures and lighting.</li>
      <li>🖨️ <b>Printing:</b> CMYK colors ensure accurate prints.</li>
      <li>🎞️ <b>Film & TV:</b> Post-production uses color correction with RGB and HSL.</li>
    </ul>

    <h2>🔍 Color Breakdown</h2>
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex</th>
          <th>RGB</th>
          <th>RGBA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🔥 Red</td>
          <td>#FF0000</td>
          <td>rgb(255, 0, 0)</td>
          <td>rgba(255, 0, 0, 1)</td>
        </tr>
        <tr>
          <td>💧 Blue</td>
          <td>#0000FF</td>
          <td>rgb(0, 0, 255)</td>
          <td>rgba(0, 0, 255, 0.4)</td>
        </tr>
        <tr>
          <td>⚪ White</td>
          <td>#FFFFFF</td>
          <td>rgb(255, 255, 255)</td>
          <td>rgba(255, 255, 255, 1)</td>
        </tr>
      </tbody>
    </table>

    <h2>🔑 TL;DR – What to Remember</h2>
    <ul>
      <li><span class="code">#FF0000</span> = Hex code for Red</li>
      <li><span class="code">rgb(0, 255, 0)</span> = RGB format for Green</li>
      <li><span class="code">rgba(0, 0, 255, 0.5)</span> = 50% transparent Blue</li>
      <li>Hex, RGB, and RGBA all represent the same colors, just in different ways!</li>
    </ul>

    <footer style="margin-top: 40px; text-align: center; font-size: 0.9em; color: #666;">
      <p>© 2025 Color Codes 101. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>