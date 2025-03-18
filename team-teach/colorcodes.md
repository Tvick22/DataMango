---
layout: base
search_exclude: true
menu: nav/home.html
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            cursor: pointer;
        }
        .hidden {
            display: none;
        }
        .voxel {
            width: 100px;
            height: 100px;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            transition: transform 0.5s ease-out, opacity 0.5s;
            background: linear-gradient(45deg, #ffb347, #d98c00);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="slide visible" id="slide1">
        <img src="{{site.baseurl}}/images/mango+against+white+copy.png" alt="Mango" class="mango" id="mango">
        <div id="voxels-container"></div>
    </div>
    
    <script>
        document.getElementById("mango").addEventListener("click", function() {
            let mango = document.getElementById("mango");
            mango.classList.add("hidden");
            createVoxels();
        });

        function createVoxels() {
            const container = document.getElementById("voxels-container");
            const positions = [
                { top: "40%", left: "40%", url: "https://example.com/page1" },
                { top: "50%", left: "50%", url: "https://example.com/page2" },
                { top: "60%", left: "60%", url: "https://example.com/page3" }
            ];
            
            positions.forEach((pos, index) => {
                let voxel = document.createElement("div");
                voxel.classList.add("voxel");
                voxel.style.top = pos.top;
                voxel.style.left = pos.left;
                
                setTimeout(() => {
                    voxel.style.opacity = "1";
                    voxel.style.transform = `translate(${index * 50 - 50}px, ${index * 50 - 50}px) rotate(${Math.random() * 20 - 10}deg)`;
                }, 100);
                
                voxel.addEventListener("click", function() {
                    window.open(pos.url, "_blank");
                });
                
                container.appendChild(voxel);
            });
        }
    </script>
</body>