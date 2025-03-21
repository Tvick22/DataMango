---
layout: base
search_exclude: true
menu: nav/home.html
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crowdsourcing in Computing</title>
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
            font-size: 2.5em;
            color: #2c3e50;
        }
        h2 {
            border-left: 5px solid #ffdd57;
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
    <h1>📢 Crowdsourcing in Computing</h1>

    <h2>🌍 What is Crowdsourcing?</h2>
    <p>
        <span class="highlight">Crowdsourcing</span> is a method of **gathering contributions from a large group of people**, 
        typically over the internet, to **solve problems, generate data, or complete complex tasks**.  
        Instead of relying on a **small group of experts**, crowdsourcing **breaks tasks into smaller pieces** 
        and distributes them to **many participants**, making it **faster, cheaper, and more diverse**.  
    </p>

    <h3>🔹 AP CSP Connections</h3>
    <ul>
        <li><strong>Big Idea 5: Impact of Computing</strong> – Crowdsourcing **expands access to information & collaboration**.</li>
        <li><strong>Data Aggregation</strong> – User-generated data **improves AI, machine learning, and predictive models**.</li>
        <li><strong>Computing Innovations</strong> – Examples include **Wikipedia, AI training, medical research, and citizen science**.</li>
    </ul>

    <h2>📺 Video: How Gamers Solved a Medical Mystery</h2>
    <div class="video-section">
        <iframe src="https://www.youtube.com/embed/RBuy6C_B1N0" title="How Gamers Solved a Medical Mystery"></iframe>
        <p><strong>How It Relates to Crowdsourcing:</strong></p>
        <ul>
            <li>Gamers using **Foldit** solved a **scientific mystery in 10 days** that experts couldn’t solve for **15 years**.</li>
            <li>Scientists **struggled** to determine an HIV enzyme structure crucial for drug development.</li>
            <li>By **gamifying protein folding**, Foldit players **outperformed AI models** in finding an accurate structure.</li>
        </ul>
    </div>

    <h2>🔍 Real-World Examples</h2>
    <div class="flex-container">
        <div class="box">
            <h3>🧠 Wikipedia</h3>
            <p>Volunteers worldwide edit articles.</p>
            <p><strong>Pros:</strong> Free knowledge, constantly updated.</p>
            <p><strong>Cons:</strong> Can be biased, fact-checking required.</p>
        </div>
        <div class="box">
            <h3>🎵 Spotify Playlists</h3>
            <p>Users collaborate to build shared playlists.</p>
            <p><strong>Pros:</strong> Diverse, community-driven curation.</p>
            <p><strong>Cons:</strong> Lack of control, potential for spam.</p>
        </div>
        <div class="box">
            <h3>🧪 Foldit</h3>
            <p>Gamers helped solve a real-world **HIV enzyme mystery**.</p>
            <p><strong>Pros:</strong> Human problem-solving aids science.</p>
            <p><strong>Cons:</strong> Requires expert validation.</p>
        </div>
    </div>

    <h2>📝 MCQ Practice</h2>
    <div class="mcq">
        <p><strong>Which of the following best describes crowdsourcing?</strong></p>
        <ol type="A">
            <li>Hiring one expert for a task.</li>
            <li>Using AI to generate data.</li>
            <li>Collecting contributions from a large group of people.</li>
            <li>Outsourcing work to another company.</li>
        </ol>
        <button class="reveal-btn" onclick="document.getElementById('answer1').style.display='block'">Reveal Answer</button>
        <div id="answer1" class="reveal-answer">✅ Correct Answer: C – Crowdsourcing involves obtaining input from a large group.</div>
    </div>

    <h2>📚 Homework Hack: Crowdsourcing a Playlist</h2>
    <div class="homework">
        <p><strong>Task:</strong> We will create a **crowdsourced Spotify playlist** to experience **collaborative computing**.</p>
        <ol>
            <li>Click <a href="#">here</a> to join the class playlist.</li>
            <li>Add at least **2 songs** that fit a chosen theme.</li>
            <li>Discuss: How does **crowdsourcing** improve or harm the playlist quality?</li>
        </ol>
    </div>

    <h2>🚀 Final Thoughts</h2>
    <p>
        Crowdsourcing makes solutions **faster, cheaper, and more inclusive**.  
        However, it raises **challenges in reliability, ethics, and quality control**.  
        The key to responsible crowdsourcing is **ensuring accuracy, fairness, and ethical use of data**.
    </p>

</div>
</body>
</html>