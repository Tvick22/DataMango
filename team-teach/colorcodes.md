---
layout: base
search_exclude: true
menu: nav/home.html
---


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=dev(ice-width, initial-scale=1.0">
    <title>DataMango Presentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #ffb347, #ffcc33);
            margin: 0;
            overflow: hidden;
        }
        .slide {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            position: absolute;
            transition: transform 1s ease-in-out, opacity 1s ease-in-out;
        }
        .mango {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            max-width: 300px;
            animation: floatMango 3s infinite ease-in-out alternate;
        }
        @keyframes floatMango {
            from { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
            to { transform: translate(-50%, -50%) translateY(20px) rotate(5deg); }
        }
        .hidden {
            transform: translateX(-100%);
            opacity: 0;
        }
        .visible {
            transform: translateX(0);
            opacity: 1;
        }
        .controls {
            position: absolute;
            bottom: 20px;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .btn {
            background: white;
            color: #ff8800;
            border: none;
            padding: 10px 20px;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 50px;
            transition: 0.3s;
        }
        .btn:hover {
            background: #ff6600;
            color: white;
        }
        .quotes {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        .quote {
            position: absolute;
            color: white;
            font-size: 1.2rem;
            font-style: italic;
            width: 200px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="slide visible" id="slide1">
        <img src="{{site.baseurl}}/images/mango+against+white+copy.png" alt="Cantella Image" class="mango">
    </div>
    <div class="slide hidden" id="slide2">
        <img src="{{site.baseurl}}/images/mango+against+white+copy.png" alt="Cantella Image" class="mango">
    </div>
    <div class="slide hidden" id="slide3">
        <img src="{{site.baseurl}}/images/mango+against+white+copy.png" alt="Cantella Image" class="mango">
    </div>
    <div class="controls">
        <button class="btn" onclick="prevSlide()">◀ Prev</button>
        <button class="btn" onclick="nextSlide()">Next ▶</button>
    </div>

    <div class="quotes">
        <div class="quote" style="top: 10%; left: 20%;">"The best way to predict the future is to invent it." - Alan Kay</div>
        <div class="quote" style="top: 70%; left: 15%;">"Simplicity is the soul of efficiency." - Austin Freeman</div>
        <div class="quote" style="top: 30%; right: 10%;">"Code is like humor. When you have to explain it, it’s bad." - Cory House</div>
        <div class="quote" style="top: 80%; right: 20%;">"Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson</div>
    </div>

    <script>
        let currentSlide = 1;
        const totalSlides = 3;

        function showSlide(slideNumber) {
            for (let i = 1; i <= totalSlides; i++) {
                const slide = document.getElementById(`slide${i}`);
                if (i === slideNumber) {
                    slide.classList.add("visible");
                    slide.classList.remove("hidden");
                } else {
                    slide.classList.add("hidden");
                    slide.classList.remove("visible");
                }
            }
        }

        function nextSlide() {
            if (currentSlide < totalSlides) {
                currentSlide++;
                showSlide(currentSlide);
            }
        }

        function prevSlide() {
            if (currentSlide > 1) {
                currentSlide--;
                showSlide(currentSlide);
            }
        }
    </script>
</body>
