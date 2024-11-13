export const TitleBar_data = [
  "All",
  "Music",
  "Mixes",
  "Trailers",
  "Gaming",
  "Sitcom",
  "One Piece",
  "Live",
  "News",
  "Comic Books",
  "SuperHero",
  "GOT",
  "HOTD",
  "Movies",
  "Series",
];
const API_KEY=process.env.REACT_APP_API_KEY;
export const Youtube_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const suggestion_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  { API_KEY };
export function New_format(count) {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + "M";
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
}
export const Comments_Data = [
  {
    name: "1Dracula",
    comment: "The king of vampires,King of night",
    replies: [
      {
        name: "2Dracula",
        comment: "The king of vampires,King of night",
        replies: [{
        name: "3Dracula",
        comment: "The king of vampires,King of night",
        replies: [
          {
            name: "4Dracula",
            comment: "The king of vampires,King of night",
            replies: [
              {
                name: "5Dracula",
                comment: "The king of vampires,King of night",
                replies: [
                  {
                    name: "6Dracula",
                    comment: "The king of vampires,King of night",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },],
      },
      
    ],
  },
];

var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export const generate_name=()=> {
var finalName = nameList[Math.floor(Math.random() * nameList.length)];
     return finalName;
    };
