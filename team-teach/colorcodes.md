---
layout: base
search_exclude: true
menu: nav/home.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataMango Presentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #ffb347, #ffcc33);
            background-size: 300% 300%;
            animation: gradientBG 8s infinite;
            margin: 0;
            overflow: hidden;
        }
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .slide {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: absolute;
            transition: transform 1s ease-in-out, opacity 1s ease-in-out;
        }
        .title {
            font-size: 3.5rem;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
            animation: fadeInScale 3s ease-in-out;
            position: absolute;
            top: 5%;
            left: 50%;
            transform: translateX(-50%);
        }
        @keyframes fadeInScale {
            0% { opacity: 0; transform: translateX(-50%) scale(0.9); }
            100% { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        .mango {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            max-width: 450px;
            cursor: pointer;
        }
        .hidden {
            display: none;
        }
        .voxel {
            width: 150px;
            height: 150px;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            transition: transform 0.5s ease-out, opacity 0.5s, box-shadow 0.5s;
            background: linear-gradient(45deg, #ffb347, #d98c00);
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.3rem;
            text-align: center;
            border-radius: 10px;
        }
        .voxel:hover {
            transform: scale(1.1);
            box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <div class="slide visible" id="slide1">
        <div class="title" id="title">Color-codes, Images, Base64</div>
        <img src="{{site.baseurl}}/images/mango+against+white+copy.png" alt="Mango" class="mango" id="mango">
        <div id="voxels-container"></div>
    </div>
    
    <script>
        document.getElementById("mango").addEventListener("click", function() {
            let mango = document.getElementById("mango");
            let title = document.getElementById("title");
            mango.classList.add("hidden");
            title.classList.add("hidden");
            createVoxels();
        });

        function createVoxels() {
            const container = document.getElementById("voxels-container");
            const positions = [
                { top: "35%", left: "30%", label: "Images", font: "'Georgia', serif", link: "./ImagesLesson.html" },
                { top: "45%", left: "45%", label: "Base64", font: "'Comic Sans MS', cursive", link: "./Base64Lesson.html" },
                { top: "55%", left: "60%", label: "Color Codes", font: "'Times New Roman', Times, serif", link: "./ColorCodesLesson.html" }
            ];
            
            positions.forEach((pos, index) => {
                let voxel = document.createElement("div");
                voxel.classList.add("voxel");
                voxel.style.top = pos.top;
                voxel.style.left = pos.left;
                voxel.style.fontFamily = pos.font; // Apply unique font
                voxel.innerText = pos.label;

                voxel.addEventListener("click", function() {
                    window.location.href = pos.link; // Navigate to the .html file
                });
                
                setTimeout(() => {
                    voxel.style.opacity = "1";
                    voxel.style.transform = `translate(${index * 50 - 50}px, ${index * 50 - 50}px) rotate(${Math.random() * 20 - 10}deg)`;
                }, 100);
                
                container.appendChild(voxel);
            });
        }
    </script>



<!-- Images Lesson -->
<a href="./ImagesLesson.md"></a>

<!-- Base64 Lesson -->
<a href="./Base64Lesson.md"></a>

<!-- Color Codes Lesson -->
<a href="./ColorCodesLesson.md"></a>

</body>
</html>
