import type { HeavyCardProps } from "@/components/custom/HeavyCard";

const frontendProjects: HeavyCardProps[] = [
  // {
  //   cardTitle: "Car Filter",
  //   cardLink: "projects/carFilter.png",
  //   cardContent: (
  //     <>
  //       A <span className="text-yellow-300 font-bold">UI clone</span> of an app that lets you
  //       <span className="text-yellow-300 font-bold"> see a filtered view of cars. </span> A demo
  //       project to show my frontend skills. Showcase good understanding of fundamentals
  //       of website Development
  //     </>
  //   ),
  //   Badges: [
  //     { badgeName: "javascipt", badgeLink: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  //     { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
  //   ],
  // },
  // {
  //   cardTitle: "Ticket Reservation",
  //   cardLink: "/projects/ticket-reservation.png",
  //   cardContent: (
  //     <>
  //       A <span className="text-yellow-300 font-bold">UI copy of a ticket reservation system</span>
  //       built on top of <span className="text-yellow-300 font-bold">shad-cn library</span>
  //       showcasing skills to use new libraries and develop according to project
  //       specifications
  //     </>
  //   ),
  //   Badges: [
  //     { badgeName: "TypeScript", badgeLink: "https://cdn.simpleicons.org/typescript/3178C6" },
  //     { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
  //   ],
  // },
];

const backendProjects: HeavyCardProps[] = [
  {
    cardTitle: "Directory Sync over TCP",
    cardLink: "/projects/tcp-comm.png",
    cardContent: (
      <>
        Honestly it was a challenge by a professor to take an assesment as well as have us a
        hands on experience with networking and file system. In our preferred language, we
        were asked to,
        <span className="text-yellow-300 font-bold">
          track folders and send the updates via tcp link and keep them in sync.
        </span>
      </>
    ),
    Badges: [
      { badgeName: "javascript", badgeLink: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { badgeName: "TCP", badgeLink: "https://cdn.simpleicons.org/wireshark/167EBA" },
      { badgeName: "node js", badgeLink: "https://cdn.simpleicons.org/nodedotjs/339933" },
    ],
    ytMode: false,
  },
  {
    cardTitle: "Screenshot Organiser",
    cardLink: "https://www.youtube.com/embed/HbyW_dh0ono",
    cardContent: (
      <>
        So i was watching a lecture series, deep into it, tried to study without constantly
        writing everything down.This was my solution a bash and python script when turned on
        <span className="text-yellow-300 font-bold">
          keeps your screenshots organised for the session
        </span>
        and at the end will give you a pdf
      </>
    ),
    Badges: [
      { badgeName: "Python", badgeLink: "https://cdn.simpleicons.org/python/3776AB" },
      { badgeName: "Bash", badgeLink: "https://cdn.simpleicons.org/gnubash/4EAA25" },
    ],
  },
];

const fullStackProjectsPink: HeavyCardProps[] = [
  {
    cardTitle: "Plan for Tests",
    cardLink: "https://www.youtube.com/embed/7v4L91mKOTU",
    cardContent: (
      <>
        Stuck in preducament, wanted to prep MCQs. Then an idea popped, what if i just make
        something that&apos;ll <span className="text-yellow-300 font-bold">let me make and take my own quizes</span>
        even while not connected to an active internet connection Here is my solution, quiz in
        JSON and
        <span className="text-yellow-300 font-bold">save that into localStorage for persistence</span>
      </>
    ),
    Badges: [
      { badgeName: "TypeScript", badgeLink: "https://cdn.simpleicons.org/typescript/3178C6" },
      { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
    ],
    ytMode: false,
  },
  {
    cardTitle: "Tier Maker App",
    cardLink: "projects/tier-maker.png",
    cardContent: (
      <>
        Watching a streamer <span className="text-yellow-300 font-bold">do a tier list</span> for
        class in FFTA2 while in my what should be my next project era. So a thought occurred,
        this amazingly interesting and complex problem is
        <span className="text-yellow-300 font-bold">yet to have a youtube tutorial</span>. Here is
        my <span className="text-yellow-300 font-bold">Tier Maker Clone</span>, an implementation of
        a <span className="text-yellow-300 font-bold">nested drag and drop.</span>
      </>
    ),
    Badges: [
      { badgeName: "TypeScript", badgeLink: "https://cdn.simpleicons.org/typescript/3178C6" },
      { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
      { badgeName: "posgreSQL", badgeLink: "https://cdn.simpleicons.org/postgresql/4169E1" },
    ],
  },
];

const fullStackProjectsBlue: HeavyCardProps[] = [
  {
    cardTitle: "SpaceCon",
    cardLink: "projects/space-con.png",
    cardContent: (
      <>
        As the technical head of Nakshatra, I was to lead the project to make a website for
        our annual Astronomy &amp; Mathematics fest at my University i.e. NSUT,
        <span className="font-bold text-yellow-300">showcasing the events</span> and the hosting
        society along with providing
        <span className="font-bold text-yellow-500">a platform for event registration.</span>
      </>
    ),
    Badges: [
      { badgeName: "TypeScript", badgeLink: "https://cdn.simpleicons.org/typescript/3178C6" },
      { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
      { badgeName: "posgreSQL", badgeLink: "https://cdn.simpleicons.org/postgresql/4169E1" },
    ],
  },
  {
    cardTitle: "Pokemon Food Chain",
    cardLink: "https://www.youtube.com/embed/JGhiGZmF6Ig",
    cardContent: (
      <>
        It is one of those projects i built on totally on a whim. I am into pokemon and I m
        into world building and I was ruminating about what the next region would look like.
        So <span className="font-bold text-yellow-300">I made a web to help me visualise and edit pokemon food web levels.</span>
      </>
    ),
    Badges: [
      { badgeName: "TypeScript", badgeLink: "https://cdn.simpleicons.org/typescript/3178C6" },
      { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
      { badgeName: "node js", badgeLink: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { badgeName: "posgreSQL", badgeLink: "https://cdn.simpleicons.org/postgresql/4169E1" },
    ],
    ytMode: false,
  },
];

const academicProjects: HeavyCardProps[] = [
  {
    cardTitle: "Three Shade Lamp",
    cardLink: "https://www.youtube.com/embed/3OGlqg0YxkY",
    cardContent: <>A project made using leds and aurduino-uno that changes color in order or pressing button</>,
    Badges: [
      { badgeName: "Hardware", badgeLink: "https://cdn.simpleicons.org/oshw/E71519" },
      { badgeName: "Arduino", badgeLink: "https://cdn.simpleicons.org/arduino/00979D" },
    ],
    ytMode: false,
  },
  {
    cardTitle: "Reaction Game",
    cardLink: "https://www.youtube.com/embed/m_63-_HBtbk",
    cardContent: (
      <>
        a project made to test reaction speed of the players.player is scored on the number of
        times he can match the reaction with the lighting of the goal bulb
      </>
    ),
    Badges: [
      { badgeName: "Hardware", badgeLink: "https://cdn.simpleicons.org/oshw/E71519" },
      { badgeName: "Arduino", badgeLink: "https://cdn.simpleicons.org/arduino/00979D" },
    ],
    ytMode: false,
  },
];

export {
  frontendProjects,
  backendProjects,
  fullStackProjectsPink,
  fullStackProjectsBlue,
  academicProjects,
};
