// data/programContent.ts

export const programs = [
  {
    id: 1,
    title: "Preschool",
    ageGroup: "2-3 Years",
    category: "Early Learning",
    description:
      "Our preschool program encourages curiosity, creativity, and social development through joyful play-based learning experiences in a nurturing environment.",
    features: [
      "Creative Play Activities",
      "Interactive Story Sessions",
      "Safe & Caring Environment",
    ],
    image: "/school.webp",
    color: "pink",
  },
  {
    id: 2,
    title: "Kindergarten",
    ageGroup: "4-5 Years",
    category: "Foundational Learning",
    description:
      "The kindergarten curriculum builds strong foundational skills in literacy, numeracy, communication, and confidence through engaging classroom activities.",
    features: [
      "Language & Communication",
      "Hands-on Learning",
      "Confidence Building",
    ],
    image: "/school.webp",
    color: "purple",
  },
  {
    id: 3,
    title: "Primary School",
    ageGroup: "6-11 Years",
    category: "Academic Growth",
    description:
      "Our primary program focuses on academic excellence, critical thinking, creativity, and character development through interactive learning methods.",
    features: [
      "STEM Activities",
      "Leadership Skills",
      "Creative Exploration",
    ],
    image: "/school.webp",
    color: "blue",
  },
  {
    id: 4,
    title: "After School",
    ageGroup: "5-12 Years",
    category: "Enrichment Program",
    description:
      "The after-school program provides a balanced mix of academic support, recreational activities, and skill-building sessions in a fun environment.",
    features: [
      "Homework Assistance",
      "Fun Group Activities",
      "Sports & Recreation",
    ],
    image: "/school.webp",
    color: "yellow",
  },
  {
    id: 5,
    title: "Summer Camp",
    ageGroup: "4-12 Years",
    category: "Holiday Program",
    description:
      "Our summer camp offers exciting adventures, creative workshops, outdoor activities, and collaborative learning experiences during vacations.",
    features: [
      "Outdoor Adventures",
      "Creative Workshops",
      "Team Building Activities",
    ],
    image: "/school.webp",
    color: "green",
  },
  {
    id: 6,
    title: "Music & Arts",
    ageGroup: "All Ages",
    category: "Creative Expression",
    description:
      "Music and arts programs help children discover their talents, express creativity, and build confidence through artistic exploration.",
    features: [
      "Music Classes",
      "Art & Craft Sessions",
      "Creative Performances",
    ],
    image: "/school.webp",
    color: "orange",
  },
];

export const colorClasses: Record<string, string> = {
  pink: "bg-pink-500 text-pink-500 bg-pink-100",
  purple: "bg-purple-500 text-purple-500 bg-purple-100",
  blue: "bg-blue-500 text-blue-500 bg-blue-100",
  yellow: "bg-yellow-500 text-yellow-500 bg-yellow-100",
  green: "bg-green-500 text-green-500 bg-green-100",
  orange: "bg-orange-500 text-orange-500 bg-orange-100",
};