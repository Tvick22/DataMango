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

    <h2>🛠️ Where You See This IRL</h2>
    <ul>
      <li>🎨 Websites use hex codes in CSS files to style text and backgrounds.</li>
      <li>🖌️ Photo editors use RGBA to layer images with transparency.</li>
      <li>📱 Mobile apps use all three formats to keep UI consistent.</li>
    </ul>

    <div class="discussion">
      <strong>🧠 Partner Prompt:</strong><br>
      If you wanted to make a button that slowly fades in, which format would you use and why?
    </div>

    <h2>😬 Common Confusions</h2>
    <ul>
      <li>⚠️ <strong>Hex vs RGB:</strong> Same color, just different formats. You can convert between them.</li>
      <li>⚠️ <strong>RGBA doesn't mean a different color:</strong> It just controls the transparency!</li>
      <li>⚠️ <strong>#FFFFFF is white, not blank:</strong> It just means full red + green + blue.</li>
    </ul>

    <h2>✅ Quick Quiz</h2>
    <div class="quiz">
      <p><strong>Which of these is the correct RGBA format for a 50% transparent green?</strong></p>
      <ul>
        <li>A) rgba(0, 255, 0, 1)</li>
        <li>B) rgba(255, 255, 0, 0.5)</li>
        <li>C) rgba(0, 255, 0, 0.5)</li>
        <li>D) rgba(0, 0, 255, 0.5)</li>
      </ul>
      <button onclick="document.getElementById('correct').style.display='block'">Show Answer</button>
      <div id="correct" class="answer">
        ✅ Correct! <strong>C) rgba(0, 255, 0, 0.5)</strong> is bright green with 50% transparency.
      </div>
    </div>

    <h2>🔑 TL;DR – What to Remember</h2>
    <ul>
      <li><span class="code">#
