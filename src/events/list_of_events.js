
import easter_hunt from '../images/event_posters/2025_EasterHunt.jpg';
import mothers_day from '../images/event_posters/Mothersday2025-poster-2.jpg';

// Example of an event with photo  ["March 3, 2023", "First day of the season we are back to being open!", pavilion_photo]
// Example of an event without photo  ["March 3, 2023", "First day of the season we are back to being open!"]
// Example of href ["December 1, 2023", ["Description of event", <a href="./events/warren-miller">Click here!</a>], some_photo],

export const events = [
  ["April 19, 2025",
    ["Easter Egg Hunt - Kids hunt starts at 4 pm and adult hunt starts at 6 pm.",
      <a target="_blank" href='https://square.link/u/P2qRh79U'> Click Here for Tickets!</a>
    ],
    easter_hunt
  ],
  ["May 11, 2025",
    ["Mother's day brunch 1:00 PM - 4 PM with Chef Alex Stein.",
      <a target="_blank" href='https://square.link/u/MAu0iOmP'> Click here to buy tickets!</a>
    ],
    mothers_day
  ]
];



