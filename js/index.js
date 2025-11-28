document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

document.querySelectorAll(".timing-faq .faq li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

function goToDetails(id) {
  window.location.href = "detail.html?id=" + id;
}

const attractions = [
  {
    a_id: 1,
    img: "images/attraction-amusement.jpg",
    title: "Amusement Park",
    desc: "Enjoy thrilling rides, fun games, tasty food, and five complimentary attractions for endless excitement.",
    desc_two: `Gravity Gate is a thrilling amusement park packed with adventure, excitement, and unforgettable fun for all ages! From heart-pounding roller coasters and family rides to interactive zones and water attractions, every corner offers something extraordinary. The park features themed zones, delicious food courts, and live entertainment that keep visitors engaged all day. Safety and cleanliness are top priorities, ensuring a worry-free experience. Whether you’re seeking adrenaline or relaxation, Gravity Gate guarantees endless joy and memories. Perfect for families, friends, and school groups, it’s more than a park—it’s a world of laughter, wonder, and pure amusement waiting to be explored!`,
    entry_time: "9:30 AM",
    exit_time: "7:70 PM",
    user_allowed: "01",
    total_ride: "05",
  },

  {
    a_id: 2,
    img: "images/waterpark.jpg",
    title: "Water Park",
    desc: "Dive into fun with wave pools, thrilling slides, lazy rivers, and splash zones for endless enjoyment.",
    desc_two: `The water park offers a refreshing escape filled with splash-packed excitement for all ages. Enjoy thrilling water slides, calm family pools, and a relaxing lazy river that lets you unwind at your own pace. The wave pool recreates a beach-like feel with fun, gentle waves perfect for groups. Kids can enjoy safe splash zones with shallow waters and playful features. Lifeguards and staff ensure top-level safety across all areas. With clean changing rooms, lockers, and food stalls nearby, guests enjoy complete convenience. It’s the perfect destination for families seeking adventure, relaxation, and memorable summer fun.`,
    entry_time: "10:00 AM",
    exit_time: "5:30 PM",
    user_allowed: "01",
    total_ride: "00",
  },

  {
    a_id: 3,
    img: "images/event-venue.jpg",
    title: "Party Venue",
    desc: "Celebrate in style with vibrant décor, music, catering, and spacious halls for any special event.",
    desc_two: `The party venue at Gravity Gate Amusement Park is an exciting and vibrant space designed for unforgettable celebrations. Whether it's a birthday party, school gathering, family celebration, or corporate event, the venue offers a lively atmosphere surrounded by thrilling rides and cheerful park vibes. Guests can enjoy spacious seating arrangements, customizable decorations, and convenient event support to make every moment smooth and enjoyable. Catering options, entertainment add-ons, and activity areas are available to enhance the celebration experience. With easy access, friendly staff, and a fun-filled environment, Gravity Gate makes every event special, turning your celebration into a joyful and memorable occasion.`,
    entry_time: "12:30 AM",
    exit_time: "11:30 PM",
    user_allowed: "100",
    total_ride: "00",
  },

  {
    a_id: 4,
    img: "images/attraction-fooding.jpg",
    title: "Fooding",
    desc: "Savor delicious meals, quick bites, and refreshing drinks throughout Gravity Gate Park.",
    desc_two: `Our food court offers a delightful mix of flavors, ensuring every visitor finds something to enjoy. From quick snacks like fries and burgers to full meals including Indian, Chinese, and continental dishes, the variety suits all tastes. Beverage counters provide refreshing juices, shakes, soft drinks, and chilled desserts perfect for hot days. Clean seating areas make dining comfortable and relaxing. Each food station follows strict hygiene and quality standards, ensuring safe and fresh meals. Whether you're taking a short break or enjoying a family meal, the food court delivers a satisfying and enjoyable dining experience within the park.`,
    entry_time: "10:30 AM",
    exit_time: "7:30 PM",
    user_allowed: "01",
    total_ride: "00",
  },

  {
    a_id: 5,
    img: "images/attraction-children.jpg",
    title: "Children Ride",
    desc: "Gentle, safe rides like carousels, mini trains, and teacups made for kids.",
    desc_two: `Our children’s zone is specially designed to offer young visitors a joyful, safe, and engaging experience. Kids can enjoy gentle rides such as mini trains, carousels, bumper cars, and spinning teacups, each crafted with secure seating and slow, child-friendly motion. The area includes colorful themes, playful decorations, and soft-ground sections for added safety. Trained staff supervise the rides to ensure smooth operations and assist parents whenever needed. With shaded seating for families and nearby snack counters, the children’s zone provides comfort and convenience. It’s the perfect spot for little ones to create happy, memorable moments.`,
    entry_time: "10:00 AM",
    exit_time: "7:30 PM",
    user_allowed: "01",
    total_ride: "10",
  },

  {
    a_id: 6,
    img: "images/attraction-family.jpg",
    title: "Family Ride",
    desc: "Enjoy Ferris wheels, river rapids, and adventure trains for perfect family fun.",
    desc_two: `Our family ride zone is designed to offer enjoyable experiences for guests of all ages. From peaceful Ferris wheel rides providing scenic park views to adventurous river rapids and exciting train journeys, every attraction brings families closer together. The rides balance fun and comfort, making them suitable for children, adults, and elders alike. Safety systems and trained operators ensure smooth, worry-free enjoyment for everyone. Clean resting areas and photo spots are located nearby, allowing families to relax between rides. Whether you’re seeking light adventure or bonding time, these attractions create lasting memories for the whole family.`,
    entry_time: "10:00 AM",
    exit_time: "7:30 PM",
    user_allowed: "04",
    total_ride: "10",
  },

  {
    a_id: 7,
    img: "images/attraction-thrill.jpg",
    title: "Thrill Ride",
    desc: "Experience roller coasters, drop towers, and spinning rides made for adventure lovers.",
    desc_two: `Our thrill rides are crafted for visitors seeking adrenaline, excitement, and heart-pounding adventure. High-speed roller coasters, giant pendulum swings, drop towers, and spinning rides deliver intense fun from start to finish. Each attraction follows strict safety standards, including secure harness systems and professional monitoring. The thrill zone’s dramatic lighting, sound effects, and towering structures enhance the overall experience. Rest zones and water counters nearby ensure comfort between rides. Whether it's your first adventure or you’re a thrill enthusiast, these rides promise unforgettable moments, elevated excitement, and the ultimate rush you won’t find anywhere else.`,
    entry_time: "10:00 AM",
    exit_time: "7:30 PM",
    user_allowed: "01",
    total_ride: "20",
  },

  {
    a_id: 8,
    img: "images/attraction-shows.jpg",
    title: "Shows & Attractions",
    desc: "Enjoy stunt shows, musical parades, magic acts, and character performances.",
    desc_two: `Our shows and attractions bring the park to life with energy, color, and entertainment suitable for all ages. Watch thrilling stunt shows, magical performances, musical parades, and character meet-and-greets throughout the day. Each show is choreographed to deliver excitement, laughter, and engagement for the audience. Comfortable seating areas, clear stage visibility, and scheduled timings ensure a smooth viewing experience. Visitors can capture photos with performers and enjoy interactive moments that add extra joy to their trip. With diverse themes and performances, the entertainment zone guarantees memorable experiences beyond the rides and attractions.`,
    entry_time: "10:00 AM",
    exit_time: "7:30 PM",
    user_allowed: "01",
    total_ride: "05",
  },
];

const container = document.getElementById("attraction-container");

if (container) {
  attractions.forEach((item) => {
    container.innerHTML += `
       <div class="col-xxl-3 col-md-4 col-sm-6 col-xs-12">
        <div class="attraction-card">
          <img src="${item.img}" alt="${item.title}" loading="lazy"/>
          <div class="text-box">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
           <button onclick="goToDetails(${item.a_id})">Know more</button>
        </div>
      </div>
    `;
  });
}

const detailPage = document.getElementById("detailPage");

if (detailPage) {
  const urlParams = new URLSearchParams(window.location.search);
  const a_id = urlParams.get("id");

  const findData = attractions.find((fi) => fi.a_id == a_id);

  document.querySelector("#detailPage h1").textContent = findData.title;
  document.querySelector("#detailPage img").src = findData.img;
  document.querySelector("#desc").textContent = findData.desc_two;
  document.querySelector("#entry_time").textContent = findData.entry_time;
  document.querySelector("#exit_time").textContent = findData.exit_time;
  document.querySelector("#guest").textContent = findData.user_allowed;
  document.querySelector("#total_ride").textContent = findData.total_ride;
}

document.querySelectorAll("#detailPage li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const dateSelect = document.getElementById("date");

if (dateSelect) {
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    const option = document.createElement("option");
    option.value = `${yyyy}-${mm}-${dd}`;
    option.textContent = `${dd}-${mm}-${yyyy}`;

    dateSelect.appendChild(option);
  }
}
