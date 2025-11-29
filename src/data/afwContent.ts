import type { AfwContent } from "../types/afw";

export const afwContent: AfwContent = {
  intro: {
    text: "In a world increasingly filled with passive consumption, we invite you to rediscover the art of active listening. This isn't just about appreciating sound—it's about creating moments of collective resonance, fostering connections between island communities, and elevating the everyday through intentional sonic environments.",
  },

  listeningExperiences: {
    title: "Four Unique Listening Experiences",
    experiences: [
      {
        title: "Café Mode | Daytime Hours",
        description:
          "Throughout the day, our space offers thoughtfully curated ambient soundscapes perfect for conversation, work, or quiet reflection. Quality sound becomes a subtle enhancement to daily island life.",
      },
      {
        title: "Community Curation | 4:00-6:30 PM",
        description:
          "Early evenings transform into platforms for local collectors and musical storytellers. Experience Salt Spring's diverse musical culture as community members share their collections and personal journeys through sound. Each curator brings their unique perspective, creating intimate connections between music and memory.",
      },
      {
        title: "Dark Mode | 9:00 PM - 12:00 AM",
        description:
          "As night falls, the space evolves into a sophisticated listening environment. Guest selectors and renowned DJs guide sonic journeys that balance deep listening with movement. This isn't loud, generic nightlife—it's an immersive, quality-focused musical experience featuring high-fidelity sound and carefully curated sets.",
      },
      {
        title: "Deep Listening Sessions | Sundays, 3:00-5:00 PM",
        description:
          "Dedicated sessions where complete albums are experienced without interruption. In our age of shuffled playlists and fragmented attention, rediscover the meditative power of hearing a musical work in its entirety, surrounded by fellow listeners in shared contemplation.",
      },
    ],
  },

  eventSchedule: {
    title: "Event Schedule",
    weekends: [
      {
        title: "Dec 5 - 7",
        days: [
          {
            date: "Friday, Dec 5",
            // images: [
            //   "src/assets/afwAssets/new/AFW_002_Profile_Meredith-Bates_1.0.png",
            // ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "5:30 PM",
                    host: "Robert Kraft",
                    hostLinks: {
                      web: "https://www.meredithbates.com/",
                      instagram:
                        "https://www.instagram.com/meredith_bates_music",
                      facebook: "https://www.facebook.com/meredithbates79",
                    },
                    description:
                      "Robert Kraft is an Academy Award, Grammy, and Golden Globe nominated songwriter, film composer, recording artist, and record producer. As President of Music at 20th Century Fox Studios from 1994-2012, he oversaw scores and soundtracks for over 300 feature films—including Titanic, Avatar, Moulin Rouge!, Walk the Line, Once, Slumdog Millionaire, and Life of Pi.\n\nAs a record producer, Robert co-produced The Little Mermaid soundtrack, including 'Under The Sea,' which won both the Oscar and Grammy for Best Song. As a songwriter, he earned nominations for an Academy Award and two Golden Globes for 'Beautiful Maria of My Soul' from The Mambo Kings and 'How Can I Not Love You' co-written with Babyface for Anna and the King.\n\nMore recently, Robert produced the award-winning SCORE: A Film Music Documentary and hosts the premiere film music podcast SCORE: The Podcast. He currently serves as SOCAN's Ambassador to Hollywood, supporting Canadian film and TV composers.\n\nThis evening, Robert steps away from the industry to share something more personal: the records that have shaped his own listening life. A rare invitation into the collection of someone who has spent decades at the intersection of music and storytelling.",
                  },
                ],
              },
            ],
          },
          {
            date: "Saturday, Dec 6",
            images: [
              "src/assets/afwAssets/new/AFW_002_Profile_Andrew-Ross-Collins_1.1.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Rave-Coach_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Kozue_1.3.png",
            ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "4:00-5:00 PM",
                    host: "Andrew Ross Collins",
                    hostLinks: {
                      web: "https://interchill.bandcamp.com",
                    },
                    description:
                      "Music that takes you somewhere, with a number of stops being in Africa.",
                  },
                  {
                    time: "5:30-6:30 PM",
                    host: "Rave Coach",
                    hostLinks: {
                      instagram: "https://www.instagram.com/ravecoach",
                      facebook: "https://www.facebook.com/ravecoach5/",
                      web: "https://www.honestfarms.ca",
                    },

                    description:
                      "My set will feature an hour of 90s-inspired house music. A genre that sparked my passion for DJing. These sounds have shaped my style and continue to echo through many of my performances.",
                  },
                ],
              },
              {
                type: "Dark Mode",
                sessions: [
                  {
                    host: "Eddie C w/ Somethin' Else",
                  },
                ],
              },
            ],
          },
          {
            date: "Sunday, May 25",
            images: [
              "src/assets/afwAssets/AFW_002_Profile_Matt-Robertson_1.0.png",
            ],
            events: [
              {
                type: "Deep Listening (3:00-5:00 PM)",
                sessions: [
                  {
                    host: "Matt Roberson & Tea Mistress",
                    albums: ["Matt Robertson - Aequora"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  eventDetails: {
    title: "Location & Admission",
    location: "Cassette Cafe, 106 Lower Ganges Rd, Salt Spring Island",
    duration: "May 23 - June 1, 2025",
    admission:
      "Community Curation and Deep Listening sessions are free and first come, first served (space limited).  For Dark Mode events (evening dance parties) follow GET TICKETS links.",
  },

  conclusion: {
    text: "Join us for this unique cultural experiment that celebrates Salt Spring Island's creative spirit while introducing new perspectives on how we experience music together. Whether you're an audiophile, a casual listener, or simply curious about mindful cultural experiences, the Salt Spring Listening Space offers something transformative.",
    note: "Limited capacity ensures an intimate experience. Stay tuned for ticketing information and updates.",
  },

  ticketButtonText: "Get Tickets",
};
