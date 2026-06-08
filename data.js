const posts = [
    {
        id: 1,
        title: 'My Morning Skincare Routine for Glowing Skin',
        category: 'Beauty',
        date: 'June 6, 2026',
        image: 'images/skincare.png',
        excerpt: 'Discover the essential products and steps I use every morning to maintain a healthy, radiant complexion all day long.',
        content: `<p>Good morning, lovelies! Today I am so excited to share my holy grail morning skincare routine. Having a solid routine is the foundation for healthy, glowing skin.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Step 1: Gentle Cleansing</h3>
                  <p>I always start with a very gentle milk cleanser. It removes any nighttime products without stripping my skin of its natural oils. Massage it in gently for about 60 seconds.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Step 2: Hydrating Toner</h3>
                  <p>Next, I press a rose-infused hydrating toner into my skin. This preps the skin to absorb all the active ingredients we are about to apply!</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Step 3: Vitamin C Serum</h3>
                  <p>This is non-negotiable for that radiant glow. A good Vitamin C serum brightens the complexion and protects against environmental stressors throughout the day.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Step 4: Moisturizer & SPF</h3>
                  <p>Finally, I lock it all in with a lightweight moisturizer and a broad-spectrum SPF 50. Never skip the sunscreen!</p>
                  <p>What are your morning skincare staples? Let me know!</p>`
    },
    {
        id: 2,
        title: 'Capsule Wardrobe: Summer Essentials',
        category: 'Fashion',
        date: 'June 2, 2026',
        image: 'images/wardrobe.png',
        excerpt: 'How to build the perfect summer capsule wardrobe with versatile, timeless pieces that look effortlessly chic.',
        content: `<p>Summer is almost here, and that means it is time to transition our wardrobes. A capsule wardrobe is all about having a curated collection of versatile, high-quality pieces that you can mix and match effortlessly.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">The Linen Dress</h3>
                  <p>A breezy linen midi dress is a summer essential. It is breathable, elegant, and can be dressed up with heels or down with simple sandals. I prefer neutral tones like cream or soft beige.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Chic Sunglasses</h3>
                  <p>A statement pair of sunglasses instantly elevates any outfit. Tortoiseshell cat-eye frames or classic oversized square frames are my current favorites.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">The Perfect Straw Hat</h3>
                  <p>Not only does it protect you from the sun, but a wide-brimmed straw hat adds a touch of Riviera chic to your look.</p>
                  <p>By focusing on these versatile basics, you will never have a "nothing to wear" moment this summer!</p>`
    },
    {
        id: 3,
        title: 'Creating a Relaxing Evening Unwind Routine',
        category: 'Lifestyle',
        date: 'May 28, 2026',
        image: 'images/evening.png',
        excerpt: 'Simple habits to help you disconnect, de-stress, and prepare for a restful night\'s sleep in a cozy environment.',
        content: `<p>After a long, busy day, how we wind down is crucial for our mental health and the quality of our sleep. Here is how I create a peaceful evening routine.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Digital Detox</h3>
                  <p>An hour before bed, I put my phone away and turn off all screens. The blue light disrupts melatonin production, so this is vital for a good night's rest.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Setting the Mood</h3>
                  <p>I love lighting a luxury candle - usually something with lavender, chamomile, or vanilla notes. Dim the harsh overhead lights and use warm, soft lamps instead.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Reading & Tea</h3>
                  <p>I curl up with a fluffy blanket, a cup of herbal chamomile tea, and a good book. This signals to my brain that it is time to relax and let go of the day's stress.</p>
                  <p>Take time for yourself tonight. You deserve it.</p>`
    },
    {
        id: 4,
        title: 'A Romantic Stroll Through Intramuros',
        category: 'Travel',
        date: 'May 21, 2026',
        image: 'images/intramuros/3e24780e-bf15-45f3-9c74-ad9b077478e4.jpg',
        excerpt: 'Exploring the historic cobblestone streets of Manila\'s walled city during golden hour.',
        content: `<p>There is something undeniably magical about Intramuros just as the sun begins to set. The walled city in the heart of Manila transforms into a romantic, nostalgic dreamscape.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Cobblestone Elegance</h3>
                  <p>Walking through the historic streets, you are surrounded by stunning Spanish colonial architecture. I wore my favorite flowy linen dress, which matched the rustic, warm tones of the stone walls perfectly.</p>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                      <img src="images/intramuros/52e69312-0cb4-4e3d-81d5-3a455dbbb5a1.jpg" style="width: 100%; border-radius: 12px; height: 300px; object-fit: cover;">
                      <img src="images/intramuros/5c14bd1b-dee2-4ac3-b4fb-bcced2832a1e.jpg" style="width: 100%; border-radius: 12px; height: 300px; object-fit: cover;">
                  </div>

                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Cafes and Courtyards</h3>
                  <p>We discovered the most charming hidden courtyards and small cafes tucked away in centuries-old buildings. It is the perfect place to grab an iced latte and just soak in the history.</p>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                      <img src="images/intramuros/8014e882-302e-458d-8e35-50dadf23ec75.jpg" style="width: 100%; border-radius: 12px; height: 300px; object-fit: cover;">
                      <img src="images/intramuros/8309e44e-75a4-4e37-842d-a9d62f1ee15a.jpg" style="width: 100%; border-radius: 12px; height: 300px; object-fit: cover;">
                  </div>

                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Golden Hour Magic</h3>
                  <p>If you are planning to visit, I highly recommend going around 4:30 PM. The golden hour light bouncing off the cobblestones makes for the most incredibly aesthetic and soft photos.</p>
                  <img src="images/intramuros/b87502c5-64e9-40d7-8d20-723b589fc31c.jpg" style="width: 100%; border-radius: 12px; margin: 2rem 0; max-height: 500px; object-fit: cover;">
                  <p>Have you been to Intramuros lately? It truly is Manila's hidden romantic gem!</p>`
    },
    {
        id: 5,
        title: 'A Beautiful Gala with Friends',
        category: 'Lifestyle',
        date: 'March 30, 2026',
        image: 'images/gala/4e4c670d-f8cd-4e3c-8301-b46244669d49.jpg',
        excerpt: 'There is nothing quite like a spontaneous trip and walking around the city with your closest friends to reset your soul.',
        content: `<p>Sometimes the best memories are made during unplanned moments. A simple gala with friends - walking around the city, taking photos, grabbing iced coffee, and laughing about everything - is my favorite way to recharge.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Soft City Moments</h3>
                  <p>We did not follow a strict plan. The day felt light because we moved slowly, stopped when a place looked interesting, and let every small corner become part of the memory.</p>

                  <div class="story-mosaic">
                      <img class="story-mosaic-feature" src="images/gala/d05e8c08-c653-4844-8d86-926d51490c7f.jpg" alt="Gala moment with friends">
                      <img src="images/gala/99c0c09b-d7c0-4090-9284-ec3a228cbc16.jpg" alt="Candid gala photo">
                      <img src="images/gala/6f2b1237-d911-4279-84e2-6d4db52596f9.jpg" alt="City walk during gala">
                  </div>

                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">Photos That Feel Like Us</h3>
                  <p>The best photos were not the most perfect ones. They were the candid shots, the quick poses, and the little pauses between walking and talking where everyone felt comfortable being themselves.</p>

                  <div class="story-strip">
                      <img src="images/gala/37b6ec64-056c-4cdd-a9f8-6fedc1b1f678.jpg" alt="Gala outfit photo">
                      <img src="images/gala/2edbbbea-bacd-4352-936d-68aaec4073d4.jpg" alt="Gala memory with friends">
                  </div>

                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">The Part I Will Remember</h3>
                  <p>What made the day beautiful was the company. In the middle of busy routines, having time to walk, laugh, and talk about random dreams felt like a reset I did not know I needed.</p>
                  <p>Sometimes the most beautiful plans are the ones that barely feel planned at all.</p>`
    },
    {
        id: 6,
        title: 'My Graduation Journey',
        category: 'Lifestyle',
        date: 'April 15, 2025',
        image: 'images/graduation/9050542d-bbe0-4063-a239-13392cf798bf.jpg',
        excerpt: 'Reflecting on years of hard work, late-night study sessions, and the overwhelming joy of finally walking across that stage.',
        content: `<p>I can hardly believe it is finally here! Graduation is such a surreal milestone. It feels like just yesterday I was a nervous freshman trying to find my classes, and now I am closing this beautiful chapter of my life.</p>
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">The Late Nights & Hard Work</h3>
                  <p>It was not always easy. There were countless late nights fueled by coffee and sheer willpower. There were moments of doubt, pressure, and exhaustion, but each challenge quietly shaped me into someone stronger and more patient.</p>

                  <div class="milestone-gallery">
                      <img class="milestone-wide" src="images/graduation/ce697dfa-1e4d-4d83-b50d-877fd9c573f0.jpg" alt="Graduation portrait">
                      <img src="images/graduation/198e6d7e-b611-40c8-ad98-5eb4b925ce2e.jpg" alt="Graduation day memory">
                      <img src="images/graduation/008b9c55-7536-46be-bbe4-01a9ab9ffcb4.jpg" alt="Graduation celebration">
                  </div>

                  <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-primary-dark);">A Day Worth Remembering</h3>
                  <p>There was so much emotion in the air - excitement, nervousness, gratitude, and a little disbelief. Wearing the graduation outfit and taking photos made everything feel real. It was a reminder that all the small steps had finally led to this moment.</p>
                  <p>This is not just an ending, but a beautiful new beginning. Here is to every lesson, every sacrifice, and every person who made this journey meaningful.</p>`
    }
];
