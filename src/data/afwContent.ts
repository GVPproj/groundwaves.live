import type { AfwContent } from "../types/afw";

export const afwContent: AfwContent = {
  intro: {
    text: "A Friendly Wave returns to Salt Spring Island for three days of intentional listening, community connection, and shared sonic experiences. Once again, musicians, DJs, collectors, and music lovers unite around a simple idea: there is transformative power in the act of listening together.",
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
        title: "Dark Mode | 7:00 PM - 12:00 AM",
        description:
          "As night falls, the space evolves into a sophisticated listening environment. Guest selectors and renowned DJs guide sonic journeys that balance deep listening with movement. This isn't loud, generic nightlife—it's an immersive, quality-focused musical experience featuring high-fidelity sound and carefully curated sets.",
      },
      {
        title: "Deep Listening Sessions | Sundays, 1:30-3:00 PM",
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
            images: [
              "src/assets/afwAssets/new/AFW_002_Profile_Robert-Kraft_1.0.png",
            ],
            events: [
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "5:30 PM",
                    host: "Robert Kraft",
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
              "src/assets/afwAssets/new/AFW_002_Profile_Chris-Gestrin_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Eddie-C_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Chris_Arnett_1.1.png",
              "src/assets/afwAssets/new/SE.png",
            ],
            intro:
              "Our Saturday morning unfolds with three local voices sharing their collections and perspectives.",
            events: [
              {
                type: "Café Mode",
                sessions: [
                  {
                    time: "9:00-10:30 AM",
                    host: "Chris Arnett",
                    description:
                      "Chris Arnett is a historian, archaeologist, musician, and artist who has called Salt Spring Island home for over 34 years. A founding member of Vancouver's pioneering punk band The Furies, his musical journey spans from garage rock to deep vinyl collecting. His books on Coast Salish history—including The Terror of the Coast and Two Houses Half-Buried in Sand—reflect the same passion for storytelling that shapes his approach to music. This morning, he shares selections from a life lived between records and research.",
                  },
                  {
                    time: "10:30-11:45 AM",
                    host: "Tea Mistress",
                    description:
                      "Jen Maksymetz has been studying tea and practicing Gongfu ceremony since 2000. While living in Taiwan, she was introduced to tea culture through her Taiwanese 'family.' Now based on Salt Spring in her cliffside teahouse overlooking Ruckle Park and the Pacific, she brings the same intentionality to her musical selections as she does to her tea practice—curating sonic experiences that invite presence and reflection.",
                  },
                  {
                    time: "11:45 AM-1:00 PM",
                    host: "Stephen Corwin",
                    description:
                      "A recent transplant to Salt Spring, Stephen closes out Café Mode with his own collection, rounding out a morning of island voices and vinyl discoveries.",
                  },
                ],
              },
              {
                type: "Community Curation",
                sessions: [
                  {
                    time: "4:00-5:00 PM",
                    host: "Chris Gestrin",
                    description:
                      "Since graduating from Boston's Berklee College of Music in 1995, Vancouver native Chris Gestrin has become an integral part of the Canadian music scene. As a pianist, multi-keyboardist, composer, engineer, and producer, he has contributed to over 500 albums spanning experimental electronic improvisations, greasy soul organ, introspective piano jazz, and chart-topping pop and hip-hop. His recording Stillpoint was listed as one of the best albums of 2003 in Downbeat magazine, and his production work on Pugs & Crows' Fantastic Pictures earned a 2013 JUNO Award for Best Instrumental Album. Chris brings his encyclopedic musical knowledge and deep listening sensibility to an afternoon of sonic exploration.",
                  },
                ],
              },
              {
                type: "Dark Mode",
                sessions: [
                  {
                    time: "7:00 PM-12:00 AM",
                    host: "Eddie C with Somethin' Else DJs",
                    description:
                      "Raised in Southern Ontario somewhere between Detroit and Montreal, Eddie C began his experiments in music in the late 80s, inspired by hip-hop and the burgeoning acid house scene. What started as tape edits of late night radio evolved into a lifelong passion for record collecting—one that led him through a decade-long sabbatical in the Rocky Mountains of Canada and eventually to Berlin, where he reconnected with the electronic music community.\n\nHis raw yet sophisticated approach to production has yielded countless releases on labels like Endless Flight, Crue-L, and his own Red Motorbike imprint. But it's his DJ sets—freewheeling journeys through disco, dubby house, and everything that puts a smile on your dial—that have garnered him a devoted following worldwide.\n\nEddie C is joined by local selectors Somethin' Else DJs for an evening that balances listening and movement on our custom sound system.",
                  },
                ],
              },
            ],
          },
          {
            date: "Sunday, Dec 7",
            images: [
              "src/assets/afwAssets/AFW_002_Profile_Matt-Robertson_1.0.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Jian_1.1.png",
              "src/assets/afwAssets/new/AFW_002_Profile_Andrew-Ross-Collins_1.1.png",
            ],
            events: [
              {
                type: "Deep Listening (1:30-3:00 PM)",
                sessions: [
                  {
                    host: "Matt Roberson & Tea Mistress",
                    albums: ["Matt Robertson - Aequora"],
                    description:
                      "This Sunday, we invite you into a meditative journey through Aequora (a calm sea), an album painstakingly crafted from hundreds of hand-layered sine waves. What began as an exploration of additive synthesis—shaping music entirely from pure frequencies—evolved into something quietly extraordinary: seven tracks woven into one continuous sonic experience, designed to be heard exactly as you'll experience it here. \n\nThese soundscapes are calm, patient, and quietly alive. \n\nTea Mistress @teamistress will guide you through a flight of exquisite artisan teas, each one chosen to complement and elevate your journey through sound.\n\nBring pillows, blankets, whatever you need to settle in. The lights will be low. Together, we'll dedicate this time to the practice of listening—deeply and collectively.",
                  },
                ],
              },
              {
                type: "Special Food / Music Pop-Up **SOLD OUT**",
                sessions: [
                  {
                    time: "5:00 and 7:30",
                    host: "Chef Jian Cheng with music by Andrew Ross Collins (Interchill Records)",
                    description:
                      "We close the weekend with an intimate dinner pairing Chef Jian's cooking with selections from Interchill Records founder Andrew Ross Collins.\n\nJian trained at London's Michelin-starred Chez Bruce and Vancouver's Bao Bei before co-founding Nancy Go Yaya, the Singaporean café that had lineups down the block. Now based on Salt Spring at Francis Bread, he brings his signature style to this special evening: Southeast Asian soul food—satay, rojak, chili crab, pandan, Milo—elevated with fine dining technique and local ingredients. Think Singapore chili crab mac and cheese with Dungeness, and a Lamborghini burger featuring SSI lamb with smoked oyster mayo.\n\nAndrew Ross Collins founded Interchill Records in 1995, emerging from the multi-sensory chill rooms of Montreal's early rave scene. Now based here on Salt Spring, he's spent three decades as the ears behind a label known for \"organic electronica for expanding minds\"—releasing music from artists around the world while curating soundscapes that balance the electronic and the organic, the global and the local. This evening, his selections provide the sonic thread connecting each course.\n\nTwo seatings. Space is limited.",
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
    duration: "Dec 5 - 7, 2025",
    admission:
      "Community Curation and Deep Listening sessions are free and first come, first served (space limited).  For Dark Mode events (evening dance parties) follow GET TICKETS links.",
  },

  conclusion: {
    text: "Join us for this unique cultural experiment that celebrates Salt Spring Island's creative spirit while introducing new perspectives on how we experience music together. Whether you're an audiophile, a casual listener, or simply curious about mindful cultural experiences, the Salt Spring Listening Space offers something transformative.",
    note: "Limited capacity ensures an intimate experience. Stay tuned for ticketing information and updates.",
  },

  ticketButtonText: "Get Tickets",
};
