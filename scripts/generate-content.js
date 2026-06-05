import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Helper to create directory
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 1. Generate 20+ Courses
const coursesDir = path.join(rootDir, 'src', 'content', 'courses');
ensureDir(coursesDir);

const courses = [
  'Python Programming', 'Advanced Java', 'C and C++ Basics', 'Full Stack Web Development',
  'MERN Stack Development', 'Frontend Development (React)', 'Backend Development (Node.js)',
  'Data Science with Python', 'Machine Learning Basics', 'Artificial Intelligence',
  'Digital Marketing', 'SEO and SEM', 'Social Media Marketing', 'Tally Prime',
  'Advanced Excel', 'Financial Accounting', 'Graphic Design (Photoshop & Illustrator)',
  'UI/UX Design (Figma)', 'Cyber Security Basics', 'Cloud Computing (AWS Basics)',
  'Spoken English', 'Interview Preparation'
];

courses.forEach(course => {
  const slug = course.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const content = `---
title: "${course}"
description: "Learn ${course} with expert instructors and hands-on projects. Get certified and job-ready."
duration: "3 Months"
level: "Beginner to Advanced"
---

# ${course}

Welcome to the ${course} program. In this course, you will learn the core concepts, practical applications, and industry best practices.

## What you will learn
- Fundamentals of ${course}
- Advanced techniques
- Real-world projects
- Interview preparation

Enroll now to secure your future!
`;
  fs.writeFileSync(path.join(coursesDir, `${slug}.md`), content);
});

// 2. Generate 30+ Blogs
const blogDir = path.join(rootDir, 'src', 'content', 'blog');
ensureDir(blogDir);

for (let i = 1; i <= 32; i++) {
  const title = `Tech Insight and Guide ${i}`;
  const slug = `tech-insight-guide-${i}`;
  const content = `---
title: "${title}"
date: 2026-06-${String((i % 30) + 1).padStart(2, '0')}
author: "Admin"
excerpt: "Discover the latest trends and tutorials in the tech industry with our comprehensive guide."
---

# ${title}

The tech industry is evolving rapidly. In this article, we cover the essential aspects of modern software development, design principles, and career strategies.

## Key Takeaways
1. Continuous learning is vital.
2. Build projects to showcase your skills.
3. Networking opens doors.

Stay tuned for more updates!
`;
  fs.writeFileSync(path.join(blogDir, `${slug}.md`), content);
}

// 3. Generate 5+ City Pages
const citiesDir = path.join(rootDir, 'src', 'content', 'cities');
ensureDir(citiesDir);

const cities = ['Kota', 'Jaipur', 'Bundi', 'Baran', 'Jhalawar', 'Udaipur'];

cities.forEach(city => {
  const slug = city.toLowerCase();
  const content = `---
title: "Computer Classes in ${city}"
description: "Best computer coaching institute in ${city}. Join for Tally, Python, Web Development, and more."
---

# Best Computer Classes in ${city}

We are proud to offer top-tier computer education in **${city}**. Our institute provides excellent infrastructure, experienced faculty, and 100% placement assistance.

## Popular Courses in ${city}
- Tally Prime
- Full Stack Web Development
- Digital Marketing
- Python & Data Science

Visit our branch in ${city} today for a free demo class!
`;
  fs.writeFileSync(path.join(citiesDir, `${slug}.md`), content);
});

// 4. Generate JSON Data
const dataDir = path.join(rootDir, 'src', 'data');
ensureDir(dataDir);

// Testimonials
const testimonials = [
  { name: "Rahul Sharma", course: "Web Development", text: "The instructors are amazing! I got placed immediately after the course." },
  { name: "Priya Singh", course: "Tally Prime", text: "Practical learning approach helped me clear my concepts." },
  { name: "Amit Kumar", course: "Python", text: "Highly recommend for beginners. The curriculum is very well designed." },
  { name: "Sneha Gupta", course: "Digital Marketing", text: "I started my own freelance business thanks to their guidance." },
  { name: "Vikas Verma", course: "Graphic Design", text: "Excellent environment and very supportive staff." }
];
fs.writeFileSync(path.join(dataDir, 'testimonials.json'), JSON.stringify(testimonials, null, 2));

// Placements
const placements = [
  { name: "Rahul Sharma", company: "TCS", role: "Frontend Developer", image: "/placeholder-student.jpg" },
  { name: "Priya Singh", company: "Infosys", role: "Accountant", image: "/placeholder-student.jpg" },
  { name: "Amit Kumar", company: "Wipro", role: "Python Developer", image: "/placeholder-student.jpg" },
  { name: "Sneha Gupta", company: "Cognizant", role: "SEO Expert", image: "/placeholder-student.jpg" },
  { name: "Vikas Verma", company: "HCL", role: "UI Designer", image: "/placeholder-student.jpg" }
];
fs.writeFileSync(path.join(dataDir, 'placements.json'), JSON.stringify(placements, null, 2));

// FAQs
const faqs = [
  { question: "What is the admission process?", answer: "You can enroll online through our website or visit our campus." },
  { question: "Do you provide placement assistance?", answer: "Yes, we offer 100% placement assistance after course completion." },
  { question: "Are the courses certified?", answer: "Yes, all our courses come with recognized certifications." },
  { question: "Can I take a demo class?", answer: "Yes, we provide 2 days of free demo classes for all courses." },
  { question: "What is the fee structure?", answer: "The fee varies by course. Please check individual course pages or contact us." }
];
fs.writeFileSync(path.join(dataDir, 'faqs.json'), JSON.stringify(faqs, null, 2));

console.log("✅ Successfully generated 20+ courses, 30+ blogs, city pages, and JSON data files.");
