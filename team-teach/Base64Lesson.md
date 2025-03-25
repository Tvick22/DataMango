---
layout: base
search_exclude: true
menu: nav/home.html
---

<head>
    <title>Base64 Encoding in Computing</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            font-size: 3em;
            color: #2c3e50;
        }
        h2 {
            border-left: 5px solid #ffdd57;
            font-size: 2.5em;
            padding-left: 10px;
            color: #2c3e50;
        }
        .highlight {
            background-color: #ffdd57;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: bold;
        }
        .flex-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        .box {
            flex: 1;
            min-width: 280px;
            padding: 15px;
            background: #e3f2fd;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .box img {
            max-width: 100%;
            border-radius: 5px;
        }
        .mcq, .popcorn, .homework, .video-section {
            background: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .reveal-answer {
            display: none;
            background: #2ecc71;
            color: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
        }
        .reveal-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background: #2c3e50;
            color: white;
        }
        iframe {
            width: 100%;
            height: 400px;
            border-radius: 8px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🔑 Base64 Encoding</h1>

    <h2>🎯 What You'll Learn</h2>
    <ul>
        <li>What Base64 is.</li>
        <li>How to encode and decode with Base64 in Python.</li>
        <li>Where Base64 is used.</li>
    </ul>

    <h2>💡 What is Base64?</h2>
    <p>
        <span class="highlight">Base64</span> converts binary data into text. It turns things like images or files into text characters that can be sent safely.
    </p>
    <p>
        It’s not for security, just for safe data transfer.
    </p>

    <h2>🔑 Why Use Base64?</h2>
    <ul>
        <li>Safe transmission of binary data over text-only systems (e.g., email, web). </li>
        <li>Ensures non-printable characters don't break systems.</li>
    </ul>

    <h2>🔄 Base64 Types</h2>
    <ul>
        <li><strong>Standard</strong> – A-Z, a-z, 0-9, +, /, with = padding.</li>
        <li><strong>URL-Safe</strong> – Uses - and _ instead of + and /.</li>
        <li><strong>Without Padding</strong> – No = for smaller size.</li>
    </ul>

    <h2>🔄 Base64 Example</h2>
    <p>Here's how "Hello" looks in Base64:</p>
    <h3>Base64 Encoding of "Hello"</h3>
    <pre>
Original: Hello
Binary: 01001000 01100101 01101100 01101100 01101111
Base64: SGVsbG8=
    </pre>

    <h2>🌍 Real-World Uses</h2>
    <div class="flex-container">
        <div class="box">
            <h3>📸 Social Media</h3>
            <p>Embed profile pictures directly in code.</p>
        </div>
        <div class="box">
            <h3>💌 Sending Files</h3>
            <p>Send images in emails or messages.</p>
        </div>
        <div class="box">
            <h3>🔐 Data Security</h3>
            <p>Store passwords or credentials in text format.</p>
        </div>
        <div class="box">
            <h3>🎥 Streaming</h3>
            <p>Embed video thumbnails or metadata.</p>
        </div>
    </div>

    <h2>⚙️ Base64 in Python</h2>
    <p>Use Python's <code>base64</code> module to encode and decode. Here's how:</p>
    <pre>
import base64

# Encode
original = "Hello"
encoded = base64.b64encode(original.encode('utf-8'))
print(encoded)  # Output: b'SGVsbG8='

# Decode
decoded = base64.b64decode(encoded).decode('utf-8')
print(decoded)  # Output: Hello
    </pre>

    <h2>🔍 Popcorn Hack: Base64 Drawbacks</h2>
    <div class="homework">
        <p><strong>Task:</strong> Discuss with a partner one potential downside of Base64. Discuss for 30 seconds and then share!</p>
    </div>

    <h2>📚 Homework Hack: Convert Your Name to Base64</h2>
    <div class="homework">
        <p><strong>Task:</strong> Convert your name into Base64. Use an online tool or write a Python script.</p>
    </div>

    <h2>📌 Key Takeaways</h2>
    <ul>
        <li>Base64 makes binary data safe to send as text.</li>
        <li>It’s used in web apps, APIs, and authentication.</li>
        <li>It’s simple with Python’s <code>base64</code> module.</li>
        <li>Base64 is not for encryption, don’t use it to secure data.</li>
    </ul>
</div>

</body>
