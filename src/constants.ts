type Event = "Sangeet" | "Wedding Ceremony" | "Reception";

export const DressCode: Record<Event, string> = {
  Sangeet: "Colorful Indian Attire or Semi-Formal Attire",
  "Wedding Ceremony": "Traditional Indian Attire or Semi-Formal Attire",
  Reception: "Indian Semi-Formal Attire or Semi-Formal Attire",
};

export const EventMap: Record<string, Event> = {
  "77062abb-0ad6-4018-8ef2-e7d6c120f4d5": "Sangeet",
  "12ca4d84-1951-4465-ad3c-746284a0b2ae": "Wedding Ceremony",
  "4e52073a-5418-4c38-8568-914bdbfed381": "Reception",
};
