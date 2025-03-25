---
layout: base
search_exclude: true
menu: nav/home.html
---

<head>
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
    <h1>📢 Crowdsourcing in Computing</h1>

    <h2>Rate the Mango Introduction (1-10)!</h2>
    <p>
      Using the data gathered from the class, we can determine what needs to be improved on our mango. Our audience is the class, and our goal is to get a better introduction to our website, so using <strong>crowdsourcing</strong>, we can improve our introduction!
    </p>

    <h2>🌍 What is Crowdsourcing?</h2>
    <p>
        <span class="highlight">Crowdsourcing</span> is a method of <strong>gathering contributions from a large group of people</strong>,
        typically over the internet, to <strong>solve problems, generate data, or complete complex tasks</strong>.
        Instead of relying on a <strong>small group of experts</strong>, crowdsourcing <strong>breaks tasks into smaller pieces</strong>
        and distributes them to <strong>many participants</strong>, making it <strong>faster, cheaper, and more diverse</strong>.
    </p>

    <h3>🔹 AP CSP Connections</h3>
    <ul>
        <li><strong>Big Idea 5: Impact of Computing</strong> – Crowdsourcing <strong>expands access to information & collaboration</strong>.</li>
        <li><strong>Data Aggregation</strong> – User-generated data <strong>improves AI, machine learning, and predictive models</strong>.</li>
        <li><strong>Computing Innovations</strong> – Examples include <strong>Wikipedia, AI training, medical research, and citizen science</strong>.</li>
    </ul>

    <h2>📺 Video: How Gamers Solved a Medical Mystery</h2>
    <div class="video-section">
        <iframe src="https://www.youtube.com/embed/RBuy6C_B1N0" title="How Gamers Solved a Medical Mystery"></iframe>
        <p><strong>How It Relates to Crowdsourcing:</strong></p>
        <ul>
            <li>Gamers using <strong>Foldit</strong> solved a <strong>scientific mystery in 10 days</strong> that experts couldn’t solve for <strong>15 years</strong>.</li>
            <li>Scientists <strong>struggled</strong> to determine an HIV enzyme structure crucial for drug development.</li>
            <li>By <strong>gamifying protein folding</strong>, Foldit players <strong>outperformed AI models</strong> in finding an accurate structure.</li>
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
            <p>Gamers helped solve a real-world <strong>HIV enzyme mystery</strong>.</p>
            <p><strong>Pros:</strong> Human problem-solving aids science.</p>
            <p><strong>Cons:</strong> Requires expert validation.</p>
        </div>
    </div>

    <h2>📌 Types of Crowdsourcing</h2>
    <div class="flex-container">
        <div class="box">
            <h3>🧠 Wisdom of the Crowd</h3>
            <p>Collective opinion of a group used for decision-making.</p>
            <p><strong>Example:</strong> Companies analyze customer feedback for strategy improvements.</p>
        </div>
        <div class="box">
            <h3>🎨 Crowd Creation</h3>
            <p>Companies ask consumers for new product ideas.</p>
            <p><strong>Example:</strong> McDonald’s lets customers design and vote on new burgers.</p>
        </div>
        <div class="box">
            <h3>📊 Crowd Voting</h3>
            <p>Users vote on the best option from multiple choices.</p>
            <p><strong>Example:</strong> Consumers vote on new product designs or flavors.</p>
        </div>
        <div class="box">
            <h3>💰 Crowdfunding</h3>
            <p>People donate to fund projects, startups, or charities.</p>
            <p><strong>Example:</strong> Kickstarter helps creators raise money for new ideas.</p>
        </div>
    </div>
    <h2>📚 Popcorn Hack 1: Quick Brainstorm</h2>
<div class="popcorn">
    <p><strong>Turn to a partner:</strong> Discuss an example of crowdsourcing you’ve used in your daily life. It could be a website, app, or platform. Take 30 seconds each to share!</p>
</div>

<h2>📚 Popcorn Hack 2: Debate It!</h2>
<div class="popcorn">
    <p><strong>Pair up and discuss:</strong> Do you think crowdsourcing is always reliable? Why or why not? Each person takes a side and debates for one minute!</p>
</div>s


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

    <h2>📚 Popcorn Hack 3: Real World Crowdsourcing</h2>
    <div class="homework">
        <p><strong>Task:</strong> Crowdsourcing is found almost everywhere online. Find an example of crowdsourcing, and briefly explain how it uses crowdsourcing.</p>
        <ol>
          <li><strong>Example</strong>: Wikipedia

          Wikipedia is a crowdsourced online encyclopedia where anyone can contribute by writing, editing, or updating articles. It uses crowdsourcing by relying on volunteers worldwide to provide and verify information, ensuring the content is continuously improved and expanded.</li>
        </ol>
    </div>

    <h2>📚 Homework Hack: Crowdsourcing a Playlist</h2>
    <div class="homework">
        <p><strong>Task:</strong> We will create a <strong>crowdsourced Spotify playlist</strong> to conduct a crowdsourcing experiment!</p>
        <ol>
            <li>Click <a href="#">here</a> to join the class playlist.</li>
            <li>Add at least <strong>2 songs</strong> that fit a chosen theme.</li>
            <li>Discuss: How does <strong>crowdsourcing</strong> improve or harm the playlist quality?</li>
        </ol>
    </div>

    <h2>🚀 Final Thoughts</h2>
    <p>
        Crowdsourcing makes solutions <strong>faster, cheaper, and more inclusive</strong>. However, it raises <strong>challenges in reliability, ethics, and quality control</strong>.
        The key to responsible crowdsourcing is <strong>ensuring accuracy, fairness, and ethical use of data</strong>.
    </p>
</div>

</body>
  