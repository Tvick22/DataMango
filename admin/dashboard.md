---
layout: base
title: Dashboard
search_exclude: true
menu: nav/mainHeader.html
menu_color: primary
menu_text_color: black
---

<div class="flex min-h-screen bg-[{{site.colors.background}}]">
  <!-- Sidebar -->
  <aside class="w-64 bg-white border-r border-gray-200 p-6 shadow-lg">
    <h2 class="text-3xl font-semibold text-[{{site.colors.primary}}] mb-10">Admin Dashboard</h2>
    <nav class="flex flex-col space-y-4">
      <button
        class="text-left px-5 py-3 bg-[{{site.colors.secondary}}] hover:bg-[{{site.colors.secondary-hover}}] text-white font-semibold rounded-md shadow-md transition-all"
        onclick="showSection('road-management')"
      >
        Road Management
      </button>
      <button
        class="text-left px-5 py-3 bg-[{{site.colors.secondary}}] hover:bg-[{{site.colors.secondary-hover}}] text-white font-semibold rounded-md shadow-md transition-all"
        onclick="showSection('resident-reviews')"
      >
        Citizen Reviews
      </button>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 p-10 overflow-y-auto bg-[{{site.colors.background}}]">
    <!-- Road Management Section -->
    <section id="road-management" class="hidden">
      <h2 class="text-4xl font-semibold text-[{{site.colors.secondary}}] mb-6">Road Management</h2>
      <p class="text-lg text-gray-600 mb-8">Manage infrastructure and maintenance operations for city roadways. Below are the available actions.</p>
      <div class="flex flex-wrap gap-8 justify-start">
        <button class="w-full md:w-[300px] px-6 py-4 bg-[{{site.colors.primary}}] hover:bg-[{{site.colors.primary-hover}}] text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
          Add New Road
        </button>
        <button class="w-full md:w-[300px] px-6 py-4 bg-[{{site.colors.accent.green}}] hover:bg-[{{site.colors.accent.green-hover}}] text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
          Update Road Status
        </button>
        <button class="w-full md:w-[300px] px-6 py-4 bg-[{{site.colors.red}}] hover:bg-[{{site.colors.red-hover}}] text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
          Schedule Maintenance
        </button>
      </div>
    </section>
    <section id="resident-reviews" class="hidden">
      <h2 class="text-4xl font-semibold text-[{{site.colors.secondary}}] mb-6">Citizen Road Reviews</h2>
      <p class="text-lg text-gray-600 mb-8">Recent feedback from community members regarding traffic and road quality.</p>
      <div id="reviews-section" class="space-y-6 max-h-[700px] overflow-y-auto pr-6">
        <!-- Reviews will be inserted here dynamically -->
      </div>
    </section>
  </main>
</div>

<script>
  const reviews = [
    {
      comment: "I love driving on this road!",
      road: "Rancho Bernardo Road",
      rating: 5,
      author: "Jackson"
    },
    {
      comment: "Light takes too long to turn green.",
      road: "Rancho Bernardo Road",
      rating: 3,
      author: "Wyatt"
    },
    {
      comment: "Too many people speeding!",
      road: "Rancho Bernardo Road",
      rating: 4,
      author: "Vincent"
    },
    {
      comment: "My car feels slow on all these roads.",
      road: "Camino Del Norte",
      rating: 1,
      author: "Aranya"
    },
    {
      comment: "I take this road everyday when I go to study AP Chem!",
      road: "Rancho Bernardo Road",
      rating: 5,
      author: "Nolan"
    },
    {
      comment: "My sister drives me on this road to school and there is always traffic!",
      road: "Camino Del Norte",
      rating: 2,
      author: "Brandon"
    },
    {
      comment: "I drive my lambo here!",
      road: "Rancho Bernardo Road",
      rating: 5,
      author: "Trevor"
    }
  ];

 function renderReviews() {
     const reviewsList = document.getElementById('reviews-section');
     reviewsList.innerHTML = ''; // Clear existing reviews

     reviews.forEach(review => {
         const reviewElement = document.createElement('div');
         reviewElement.classList.add('bg-white', 'p-6', 'rounded-xl', 'border', 'border-gray-200', 'mb-4');

         // Road Name
         const roadname = document.createElement('p');
         roadname.classList.add('text-[{{site.colors.secondary}}]', 'font-extrabold', 'text-xl');
         roadname.textContent = review.road;
         reviewElement.appendChild(roadname);

         // Review Comment
         const comment = document.createElement('p');
         comment.classList.add('text-gray-800', 'italic', 'text-lg', 'mb-3');
         comment.textContent = review.comment;
         reviewElement.appendChild(comment);

         // Author
         const author = document.createElement('p');
         author.classList.add('text-sm', 'text-gray-500', 'text-right');
         author.textContent = `— ${review.author}`;
         reviewElement.appendChild(author);

         reviewsList.appendChild(reviewElement);
     });
 }

  // Show the appropriate section
  function showSection(sectionId) {
    document.getElementById("road-management").classList.add("hidden");
    document.getElementById("resident-reviews").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
  }

  // Show road management by default
  showSection("road-management");

  // Initial render of reviews
  renderReviews();
</script>
