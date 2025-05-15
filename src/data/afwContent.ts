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
        title: "Weekend 1",
        days: [
          {
            date: "Friday, May 23",
            images: [
              "src/assets/afwAssets/new/AFW_002_Profile_Meredith-Bates_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Sophia-Danai_1.1.png",
              "src/assets/afwAssets/new/AFW_002_Profile_ContinentalBreakfast_1.1.png",
            ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "4:00-5:00 PM",
                    host: "Meredith Bates",
                    hostLinks: {
                      web: "https://www.meredithbates.com/",
                      instagram:
                        "https://www.instagram.com/meredith_bates_music",
                      facebook: "https://www.facebook.com/meredithbates79",
                    },
                    description:
                      "Meredith will be sharing a selection of her own compositions and improvisations, the music of bands that she's played in over the last twenty years, and music by other great artists that have affected her profoundly along the way.",
                  },
                  {
                    time: "5:30-6:30 PM",
                    host: "Sophia Danai",
                    hostLinks: {
                      web: "https://SOPHIADANAI.com",
                      instagram: "https://www.instagram.com/sophiadanai",
                      youtube: "https://youtube.com/@sophiadanaimusic",
                    },
                    description:
                      "An intimate, empowering and sensual collection of songs that dive into the relationship to self and others, from Sophia Danai’s unreleased album 'Let’s talk about it'.",
                  },
                ],
              },
              {
                type: "Dark Mode",
                sessions: [
                  {
                    host: "Continental Breakfast (The Mole + Anja)",
                    ticketLink:
                      "https://www.eventbrite.ca/e/a-friendly-wave-presents-dark-mode-tickets-1359709270029?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
                  },
                ],
              },
            ],
          },
          {
            date: "Saturday, May 24",
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
                    host: "Kozue & Guest",
                    ticketLink:
                      "https://www.eventbrite.ca/e/a-friendly-wave-presents-dark-mode-tickets-1359709270029?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
                  },
                ],
              },
            ],
          },
          {
            date: "Sunday, May 25",
            // images: [
            //   "src/assets/afwAssets/new/AFW_002_Profile_Wolfgang_1.1.png",
            // ],
            events: [
              {
                type: "Deep Listening (3:00-5:00 PM)",
                sessions: [
                  {
                    host: "Graham Van Pelt",
                    albums: [
                      "Alice Coltrane - Journey in Satchidananda",
                      "Nala Sinephro - Space 1.8",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Weekend 2",
        days: [
          {
            date: "Friday, May 30",
            images: [
              "src/assets/afwAssets/new/AFW_002_Profile_Connie-Kuhns_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_David-Wilson_1.1.png",
              "src/assets/afwAssets/new/SE.png",
            ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "4:00-5:00 PM",
                    host: "Connie Kuhns",
                    hostLinks: {
                      instagram: "https://www.instagram.com/rubymusicradio",
                    },
                    description:
                      "May the Bridges I Burn Light the Way: a subjective selection of women artists from RubymusicRadio who burned bright.",
                  },
                  {
                    time: "5:30-6:30 PM",
                    host: "David Wisdom",
                    description:
                      "Music For Art Galleries -1,000 Recordings In Alphabetical Order (For Enhanced Viewing) (Excerpt)",
                  },
                ],
              },
              {
                type: "Dark Mode",
                sessions: [
                  {
                    host: "SOMETHIN' ELSE",
                  },
                ],
              },
            ],
          },
          {
            date: "Saturday, May 31",
            images: [
              "src/assets/afwAssets/new/AFW_002_Profile_Matt-Robertson_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Chris_Arnett_1.1.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Teen-Daze_1.2.png",
            ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "4:00-5:00 PM",
                    host: "Matt Robertson",
                    hostLinks: {
                      web: "https://www.mattrobertsonmusic.com",
                    },
                    description:
                      "A selection of music that has been inspirational, and loosely demonstrates how changing technology has shaped the creation of music and production.",
                  },
                  {
                    time: "5:30-6:30 PM",
                    host: "Chris Arnett",
                    hostLinks: {
                      youtube: "https://www.youtube.com/watch?v=P1PDHh0E0XI",
                    },
                    description:
                      '" I\'LL BE PLAYING THE GREATEST HITS YOU NEVER HEARD OF ... "',
                  },
                ],
              },
              {
                type: "Dark Mode",
                sessions: [
                  {
                    host: "Pacific Coliseum (Teen Daze) + DJ Dampfnudel",
                    ticketLink:
                      "https://www.eventbrite.ca/e/a-friendly-wave-presents-dark-mode-tickets-1359709270029?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
                  },
                ],
              },
            ],
          },
          {
            date: "Sunday, June 1",
            // images: [
            //   "src/assets/afwAssets/new/AFW_002_Profile_Wolfgang_1.1.png",
            // ],
            events: [
              {
                type: "Deep Listening (3:00-5:00 PM)",
                sessions: [
                  {
                    host: "Ben Frey",
                    albums: [
                      "Steely Dan - Aja",
                      "Stevie Wonder - Talking Book",
                    ],
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
    title: "Experience Details",
    location: "Cassette Cafe, 106 Lower Ganges Rd, Salt Spring Island",
    duration: "May 23 - June 1, 2025",
    admission: "Details coming soon",
  },

  conclusion: {
    text: "Join us for this unique cultural experiment that celebrates Salt Spring Island's creative spirit while introducing new perspectives on how we experience music together. Whether you're an audiophile, a casual listener, or simply curious about mindful cultural experiences, the Salt Spring Listening Space offers something transformative.",
    note: "Limited capacity ensures an intimate experience. Stay tuned for ticketing information and updates.",
  },

  ticketButtonText: "Get Tickets",
};
