const jsonData = [
  {
    "id": 1,
    "place": "roadsurfer Los Angeles | RV Rentals",
    "Location": "13600 S Inglewood Ave, Hawthorne, CA 90250",
    "experience": "Hollywood Sign",
    "eat": "Korean restaurant",
    "mood": "Exciting",
    "music": "beautiful things,Benson Boone",
    "posterImage": "images/1rv.png"
    
  },
  {
    "id": 2,
    "place": "Santa Fe Park RV Resort",
    "Location": "5707 Santa Fe St, San Diego, CA 92109",
    "experience": "exploring historic Santa Fe",
    "eat": "MADE KOREAN FOOD",
    "mood": "Relaxing",
    "music": "texas hold'en,beyonce",
    "posterImage": "images/2rv.png"
  },
  {
    "id": 3,
    "place": "Black Rock Canyon Campground",
    "Location": "9800 Black Rock Canyon Rd, Yucca Valley, CA 92284",
    "experience": "camping under the stars at Black Rock Canyon",
    "eat": "BBQ",
    "mood": "Adventurous",
    "music": "too sweet,Hozier",
    "posterImage": "images/3rv.png"
  },
  {
    "id": 4,
    "place": "Rio Verde RV Park",
    "Location": "3420 AZ-89A, Cottonwood, AZ 86326",
    "experience": "rested",
    "eat": "made korean food",
    "mood": "Serene",
    "music": "water,Tyla",
    "posterImage": "images/4rv.png"
  },
  {
    "id": 5,
    "place": "Page Lake Powell Campground",
    "Location": "849 Coppermine Rd, Page, AZ 86040",
    "experience": "hiking",
    "eat": "bibimbap",
    "mood": "Peaceful",
    "music": "fake love,Drake",
    "posterImage": "images/5rv.png"
  },
  {
    "id": 6,
    "place": "Zion River Resort RV Park & Campground",
    "Location": "551 UT-9, Virgin, UT 84779",
    "experience": "Trekking through Zion National Park",
    "eat": "make pasta",
    "mood": "Natural",
    "music": "love n hennessy,A.chal",
    "posterImage": "images/6rv.png"
  },
  {
    "id": 7,
    "place": "Orange Grove RV Park & Resort",
    "Location": "1452 S Edison Rd, Bakersfield, CA 93307",
    "experience": "rested",
    "eat": "ramen",
    "mood": "Family",
    "music": "icon,Jaden",
    "posterImage": "images/7rv.png"
  },
  {
    "id": 8,
    "place": "Yosemite Lakes Base Camp Lodge",
    "Location": "31191 Hardin Flat Rd, Groveland, CA 95321",
    "experience": "Yosemite National Park",
    "eat": "korean food",
    "mood": "Scenic",
    "music": "4ever,Clairo",
    "posterImage": "images/8rv.png"
  },
  {
    "id": 9,
    "place": "North Rim Campground",
    "Location": "Campground in North Rim, Arizona",
    "experience": "walking",
    "eat": "make korean food",
    "mood": "Tranquil",
    "music": "goodie bag, Still Woozy",
    "posterImage": "images/9rv.png"
  },
  {
    "id": 10,
    "place": "Pismo Coast Village",
    "Location": "165 S Dolliver St, Pismo Beach, CA 93449",
    "experience": "going to Pismo Beach",
    "eat": "Splash Café",
    "mood": "Coastal",
    "music": "fool for you,Snoh aalegra",
    "posterImage": "images/10rv.png"
  },
  {
    "id": 11,
    "place": "Las Vegas RV Resort",
    "Location": "3890 S Nellis Blvd, Las Vegas, NV 89121",
    "experience": "casino",
    "eat": "restaurant",
    "mood": "Vibrant",
    "music": "buzzin,Alina baraz",
    "posterImage": "images/11rv.png"
  },
  {
    "id": 12,
    "place": "Trailer Village RV Park",
    "Location": "100 Trailer Village Rd, Grand Canyon Village, AZ 86023",
    "experience": "rested",
    "eat": "korean ramen",
    "mood": "Rustic",
    "music": "drunk,Dijon",
    "posterImage": "images/12rv.png"
  },
  {
    "id": 13,
    "place": "Cottonwood Campground",
    "Location": "Cottonwood Campground",
    "experience": "Thousand Trails Yosemite Lakes",
    "eat": "korea food",
    "mood": "Charming",
    "music": "puppet, Tyler",
    "posterImage": "images/13rv.png"
  },
  {
    "id": 14,
    "place": "Oceanside RV Resort",
    "Location": "1510 S Coast Hwy, Oceanside, CA 92054",
    "experience": "Buccaneer Beach",
    "eat": "make korean food",
    "mood": "Coastal",
    "music": "unravel me,Sabrina claudio",
    "posterImage": "images/14rv.png"
  },
  {
    "id": 15,
    "place": "San Francisco RV Resort",
    "Location": "700 Palmetto Ave, Pacifica, CA 94044",
    "experience": "meet friends",
    "eat": "korean BBQ restaurant",
    "mood": "Urban",
    "music": "if you let me,Alina Baraz",
    "posterImage": "images/15rv.png"
  },
  {
    "id": 16,
    "place": "Joshua Tree National Park",
    "Location": "California",
    "experience": "hiking",
    "eat": "make korean food",
    "mood": "Majestic",
    "music": "alone with you,Ashlee",
    "posterImage": "images/16rv.png"
  },
  {
    "id": 17,
    "place": "Golden Shore RV Resort",
    "Location": "101 Golden Shore, Long Beach, CA 90802",
    "experience": "take a rest",
    "eat": "Coastal Bites",
    "mood": "Relaxed",
    "music": "TMW,Avenoir",
    "posterImage": "images/17rv.png"
  },
  {
    "id": 18,
    "place": "Village RV Park",
    "Location": "100 Trailer Village Rd, Grand Canyon Village, AZ 86023",
    "experience": "rested, movie",
    "eat": "made korean BBQ",
    "mood": "Cozy",
    "music": "in the stars,Benson boone",
    "posterImage": "images/18rv.png"
  },
  {
    "id": 19,
    "place": "Mather Campground",
    "Location": "1 Mather Campground Rd, Grand Canyon Village, AZ 86023",
    "experience": "Mather Point",
    "eat": "korean ramen",
    "mood": "Natural",
    "music": "cruel summer,Taylor swift",
    "posterImage": "images/19rv.png"
  },
  {
    "id": 20,
    "place": "Grand Canyon Railway RV Park",
    "Location": "Williams, AZ 86046",
    "experience": "See the Grand Canyon",
    "eat": "made korean food",
    "mood": "Historic",
    "music": "vampire, Olivia Rodrigo",
    "posterImage": "images/20rv.png"
  },
  {
    "id": 21,
    "place": "Hilton San Diego Bayfront",
    "Location": "1 Park Blvd, San Diego, CA 92101",
    "experience": "look around San Diego",
    "eat": "pasta",
    "mood": "Luxurious",
    "music": "yes and,Ariana Grande",
    "posterImage": "images/21rv.png"
  },
  {
    "id": 22,
    "place": "DoubleTree by Hilton Hotel Los Angeles Downtown",
    "Location": "120 S Los Angeles St, Los Angeles, CA 90012",
    "experience": "rested",
    "eat": "Korean restaurant",
    "mood": "Stylish",
    "music": "satellite,Harry styles",
    "posterImage": "images/22rv.png"
  },
  {
    "id": 23,
    "place": "Hoover Dam",
    "Location": "2786+CW Boulder City, Nevada",
    "experience": "I crossed the high bridge.",
    "eat": "cafe",
    "mood": "Cultural",
    "music": "love like this,Zayn",
    "posterImage": "images/23rv.png"
  },
  {
    "id": 24,
    "place": "Loves Country Stores, Inc.",
    "Location": "14414 S Cross L Rd, Mayer, AZ 86333",
    "experience": "guess, restroom",
    "eat": "Dunkin Donuts",
    "mood": "Casual",
    "music": "moonlight,Kali uchis",
    "posterImage": "images/24rv.png"
  },
  {
    "id": 25,
    "place": "In-N-Out Burger",
    "Location": "10370 Friars Rd, San Diego, CA 92120",
    "experience": "eat",
    "eat": "In-N-Out Burger",
    "mood": "Classic",
    "music": "favorite crime,Olivia rodrigo",
    "posterImage": "images/25rv.png"
  }
];



function displayData() {
  const output = document.getElementById('output');

  jsonData.forEach(function(item) {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>${item.place}</h2>
      <p><strong>Location:</strong> ${item.Location}</p>
      <p><strong>Experience:</strong> ${item.experience}</p>
      <p><strong>Eat:</strong> ${item.eat}</p>
      <p><strong>Mood:</strong> ${item.mood}</p>
      <p><strong>Music:</strong> ${item.music}</p>
     
    `;
    output.appendChild(div);
  });
}

