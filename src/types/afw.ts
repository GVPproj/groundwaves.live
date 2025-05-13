import type { ImagePath } from "../components/WeekendImages.astro";

export interface HostLinks {
  web?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface Session {
  time?: string;
  host: string;
  hostLinks?: HostLinks;
  description?: string;
  ticketLink?: string;
  albums?: string[];
}

export interface Event {
  type: string;
  sessions: Session[];
}

export interface Day {
  date: string;
  events: Event[];
  images?: ImagePath[];
}

export interface Weekend {
  title: string;
  days: Day[];
}

export interface Experience {
  title: string;
  description: string;
}

export interface AfwContent {
  intro: { text: string };
  listeningExperiences: {
    title: string;
    experiences: Experience[];
  };
  eventSchedule: {
    title: string;
    weekends: Weekend[];
  };
  eventDetails: {
    title: string;
    location: string;
    duration: string;
    admission: string;
  };
  conclusion: {
    text: string;
    note: string;
  };
  ticketButtonText: string;
}
