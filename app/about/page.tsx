'use client'
import { useState } from 'react'
import { PiXBold } from 'react-icons/pi';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const toggleModal = () => setIsOpen(!isOpen)

  const closeModal = () => setIsOpen(false)

  return (
    <div>
        <h1>About</h1>
        <p>Ellington Willoughby and the Mythical Squid is a high-energy psychedelic-pop six piece band from SE Portland, Oregon.
        </p>

        <p>
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is both far out and close to home. The arrival is unexpected.
        </p>

        <p>
          Live shows are generally local to Oregon, and are put on with the intention of creating a space for people to let loose and have fun. They occur in a variety of venues, from house shows to festivals, and are always a good time.
        </p>

        <button onClick={toggleModal}>
          Origin Story
        </button>

        <div 
          className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} 
          style={{ display: isOpen ? 'flex' : 'none'}}
        >
          <div className="modal-content">
            <span 
              onClick={closeModal} 
              style={{ cursor: 'pointer', float: 'right'}}
            >
              <PiXBold />
            </span>
            <h2>Origin Story</h2>
            <p>
              The origin story of the mythical squid starts in a basement in Pennsylvania. In the late 1980&apos;s, pre-dating the home studio revolution, this basement was filled with full stack P.A. speakers, fender blackface amplifiers, drum sets and a hot wood burning stove. Monthly jam sessions among working professionals would take place in the quiet woods outside of Malvern. The blue blood of old moneyed horse stables would sway gently to the dissipated thump of Santa covers. There were good players, there were those who showed up to party and in the middle of it all was my brother and I. At bedtime the session would play &quot;I aint your stepping stone&quot; by the Monkeys to put us kids to sleep. It was loud and sloppy, but it always worked.
            </p>

            <h3>
              The First Go
            </h3>
            <p>
              Being surrounded by music and musical gear it was hard not to want to be a part of it all. My father taught my brother and I how to play the guitar, drawing chord diagrams and tabs for the licks of classic Who, Santa and Beatles songs. The drum set was also a very fun to smash on for the few minutes after school before everyone else got home. Slowly we learned to play and at the same time I began to write originals.  By the time we were juniors in High School the first band had formed.
            </p>

            <h2>XKJ</h2>
            <p>
              XKJ - The Xylophone Killed Jazz. The name came from a wacky little booked written by a wacky little man. As we read through it in science class the lead singer at the time, who looked and sounded like Janis Joplin, tossed it out and having no better option we said sure. In my later years as I dove heavily into collecting old jazz records, the sentiment stuck and I do not own any records with a xylophone on it. It was an odd and not very good band as most highschool bands are. But it was fun and we all learned a lot. We even did a recording session, which thankfully is lost to time.  The drummer was older and left for college. For the rest of us, our senior year was more about fun than music so it wound down and we all left for college.
            </p>

            <p className="d">
              I ended up following the drummer to college in Virgina. On my college application I said I &quot;liked music&quot;. Turns out this one little sentence would have a major impact of my musical life. To the credit of the college staff they assigned me to a roommate who also &quot;liked music&quot; and thusly on the first day of school entered Nordhaus WarriorHead. In his wake came a bass guitar, a stereo and 20+ years of continual musical collaboration. We ended up resurrecting XKJ with my old high school drummer and picked up a wonderful lead guitarist. At this point I was the acoustic guitarist/lead singer with Nordhaus on bass. We did two recording sessions. The first was self-recorded in a house with an old Tascam Porta studio. The second we saved up enough cash from playing around town to book some time in a real studio outside of Washington D.C. We learned a lot over the three years we all played together. But listening back, we still had so much to learn.
            </p>

            <h2>Noiseland</h2>
            <p>
              Both the drummer and the lead guitarist graduated and for our senior year in college Nordhaus and I started a new experimental project name Noiseland. Nordhaus started producing electronic music in Fruity Loops, while I had a little studio space setup in my room to mess around with ProTools. We were sharing a house with two other good friends and had a jolly time of it. Both of use explored what music could be and pushed ourselves in new and exciting directions. There were some good musical ideas scattered among the noise and we ended up releasing two albums as Noiseland.
            </p>

            <h2>The Alphabetically</h2>
            <p>
              After college a few years went by and by various routes my brother Jason, Nordhaus (whose real name is Josh) and myself ended up in S.E. Portland. We formed a band called &quot;The Alphabetically&quot; and practiced every Thursday night. A tradition we still continue. We self-recorded an album, with Josh handling production, mixing and bass, Jason on electric lead guitar and myself on acoustic and lead vocals. Damn it was fun. We played several shows around town and then for some reason we turned it all upside down.</p>

            <h2>Ellington Willoughby and the Andrew Jacksons</h2>
            <p>
              Josh switched to electric guitar, I switched to piano and production and Jason jumped on the synthesizers. I had been working at my day job with a killer musician and after a few practices Jon joined the band. The drums and bass were all programmed in Ableton Live and we had programmed a light show to the full record. We did full light/laser shows in our basement studio pumped with fog and bliss. Our first album &quot;Moonflower&quot; was recorded at the Hallowed Halls in FoPo and we kept playing around town, everywhere from the Star Theatre to the Bunk Bar.</p>

            <h2>Ellington Willoughby and the Mythical Squid</h2>
            <p>
              Turns out Jon&apos;s buddy Adam is also my neighbor and a damn fine musician to boot. So after a few practices Adam joined the band. First on bass then moving on to Drums. We ditched the computer and went all live. Jason picked up the congas. Rounding it all out we brought Jesse in on Bass (best Craigslist score ever), who plays with a number of groups around town and leads his own group: Neptune Groove Orchestra.  So now after 20 years of music we arrive at the present. Still lots to learn and still fun as hell. We&apos;re continuously recording in our home studio and try to play out every two months or so. Our shows are getting bigger and our sound is getting tighter. It&apos;s been a journey and we&apos;re nowhere near the destination.
            </p>
          </div>

        </div>

    </div>
  );
}
