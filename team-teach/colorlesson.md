---
layout: base
search_exclude: true
menu: nav/home.html
---


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Great Lake Image Color Data</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #e6f7f1;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100vh;
      overflow: auto;
      flex-direction: column;
    }
    .container {
      background-color: #A7C7B5;
      padding: 20px;
      border-radius: 10px;
      width: 80%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .meta-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .meta-data h2 {
      margin: 0;
    }
    .meta-data img {
      max-width: 320px;
      height: auto;
      border-radius: 8px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .data-table th, .data-table td {
      padding: 10px 15px;
      text-align: left;
      border: 1px solid #ccc;
    }
    .data-table th {
      background-color: #89b8b6;
      color: white;
      font-size: 18px;
    }
    .data-table td {
      font-size: 16px;
    }
    .hex-code {
      padding: 5px;
      text-align: center;
      font-weight: bold;
      color: white;
    }
    .rgb-color {
      padding: 5px;
      color: white;
      text-align: center;
    }
    .table-container {
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="meta-data">
      <div>
        <h2>Great Lake</h2>
        <p>Image: great-lake.jpg</p>
        <p>Format: JPEG</p>
        <p>Dimensions: (320, 240)</p>
      </div>
      <div>
        <img id="lakeImage" src="great-lake.jpg" alt="Great Lake" />
      </div>
    </div>
    
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>RGB</th>
            <th>Hex Code</th>
            <th>Binary</th>
          </tr>
        </thead>
        <tbody id="colorData">
          <!-- Color data will be populated here -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // JavaScript to extract pixel color data and populate the table
    const image = document.getElementById("lakeImage");
    const tableBody = document.getElementById("colorData");

    // Function to extract pixel color data
    function getImageColors() {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Wait for the image to load
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Get pixel data from the image
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // Loop through each pixel and extract the RGB, Hex, and Binary values
        let rowCount = 1;
        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const rgb = `rgb(${r}, ${g}, ${b})`;
          const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
          const binary = `${r.toString(2).padStart(8, '0')} ${g.toString(2).padStart(8, '0')} ${b.toString(2).padStart(8, '0')}`;

          // Add a new row in the table
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${rowCount}</td>
            <td class="rgb-color">${rgb}</td>
            <td class="hex-code" style="background-color: ${hex};">${hex}</td>
            <td>${binary}</td>
          `;
          tableBody.appendChild(row);
          rowCount++;

          // Optional: Stop after a few rows to improve performance
          if (rowCount > 100) break;
        }
      };
    }

    // Call the function to extract and display colors
    getImageColors();
  </script>
</body>
</html>
