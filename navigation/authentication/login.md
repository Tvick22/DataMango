---
layout: base
title: Login
permalink: /login
menu_color: primary
menu_text_color: black
search_exclude: true
menu: nav/mainHeader.html
---

<div class="flex min-h-screen items-center justify-center bg-[{{site.colors.background}}] px-4 py-12">
  <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl z-10">
    <h2 class="text-center text-3xl font-extrabold text-[{{site.colors.primary}}] mb-6">
      Sign in to your account
    </h2>

    <form class="space-y-6" id="pythonForm" onsubmit="pythonLogin(); return false;">
      <!-- Username -->
      <div>
        <label for="username" class="block text-lg font-medium text-gray-700 mb-1">Username</label>
        <input type="text" name="username" id="username" autocomplete="username" required
          class="w-full p-3 rounded-lg border-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[{{site.colors.primary}}] text-base">
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-lg font-medium text-gray-700 mb-1">Password</label>
        <input type="password" name="password" id="password" autocomplete="current-password" required
          class="w-full p-3 rounded-lg border-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[{{site.colors.primary}}] text-base">
      </div>

      <!-- Submit Button -->
      <div>
        <button type="submit"
          class="w-full px-4 py-3 rounded-full bg-[{{site.colors.primary}}] text-white font-semibold shadow-lg hover:bg-[{{site.colors.primary-hover}}] transition-transform duration-300 hover:scale-105">
          Sign In
        </button>
      </div>

      <!-- Message -->
      <p id="message" class="text-[{{site.colors.accent.red}}] text-center"></p>
    </form>
  </div>
</div>

<script type="module">
    import { login, pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    // Function to handle Python login
    window.pythonLogin = function() {
        const options = {
            URL: `${pythonURI}/api/authenticate`,
            callback: pythonDatabase,
            message: "message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("username").value,
                password: document.getElementById("password").value,
            }
        };
        login(options);
    }

    // Function to handle signup
    window.signup = function() {
        const signupButton = document.querySelector(".signup-card button");

        // Disable the button and change its color
        signupButton.disabled = true;
        signupButton.style.backgroundColor = '#d3d3d3'; // Light gray to indicate disabled state

        const signupOptions = {
            URL: `${pythonURI}/api/user`,
            method: "POST",
            cache: "no-cache",
            body: {
                name: document.getElementById("name").value,
                username: document.getElementById("signupUsername").value,
                password: document.getElementById("signupPassword").value,
            }
        };

        fetch(signupOptions.URL, {
            method: signupOptions.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupOptions.body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Signup failed: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("signupMessage").textContent = "Signup successful!";
            // Optionally redirect to login page or handle as needed
            window.location.href = '{{site.baseurl}}/';
        })
        .catch(error => {
            console.error("Signup Error:", error);
            document.getElementById("signupMessage").textContent = `Signup Error: ${error.message}`;
            // Re-enable the button if there is an error
            signupButton.disabled = false;
            signupButton.style.backgroundColor = ''; // Reset to default color
        });
    }

    // Function to fetch and display Python data
    function pythonDatabase() {
        const URL = `${pythonURI}/api/user`;

        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Flask server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                window.location.href = '{{site.baseurl}}/';
            })
            .catch(error => {
                console.error("Python Database Error:", error);
                const errorMsg = `Python Database Error: ${error.message}`;
            });
    }

    // Check for cookies and call relevant database functions on page load
    window.onload = function() {
        // Check if user is authenticated by checking cookies or local storage
        const isAuthenticated = document.cookie.includes('auth_token'); // Example check
        if (isAuthenticated) {
            pythonDatabase();
        }
    };
</script>
