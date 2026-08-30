const fs = require('fs');

// ENQUIRY FORM
let content = fs.readFileSync('src/components/EnquiryForm.astro', 'utf8');

content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-[#fafaf8]');
content = content.replace(/bg-white\/5 blur/g, 'bg-[#1a1a2e]/5 blur');
content = content.replace(/rgba\(255,255,255,0\.5\)/g, 'rgba(26,26,46,0.15)');
content = content.replace(/text-white\/30/g, 'text-[#1a1a2e]/40');
content = content.replace(/bg-white\/20/g, 'bg-[#1a1a2e]/20');
content = content.replace(/text-white\/40/g, 'text-[#1a1a2e]/60');
content = content.replace(/text-white\/70/g, 'text-[#1a1a2e]/70');
content = content.replace(/text-white\/25/g, 'text-[#1a1a2e]/40');
content = content.replace(/text-white/g, 'text-[#1a1a2e]');
content = content.replace(/text-\[\#1a1a2e\]\/40/g, 'text-[#1a1a2e]/60'); // fix double replace
content = content.replace(/text-\[\#1a1a2e\]\/45/g, 'text-[#1a1a2e]/60');
content = content.replace(/text-\[\#1a1a2e\]\/55/g, 'text-[#1a1a2e]/70');
content = content.replace(/text-\[\#1a1a2e\]\/30/g, 'text-[#1a1a2e]/40');

// specifically for the call us button
content = content.replace(/bg-white\/4/g, 'bg-white');
content = content.replace(/border-white\/8/g, 'border-[#1a1a2e]/10');
content = content.replace(/hover:border-white\/16/g, 'hover:border-[#1a1a2e]/20 shadow-sm');
content = content.replace(/bg-white\/10/g, 'bg-[#1a1a2e]/5');
content = content.replace(/text-\[\#1a1a2e\]\/60/g, 'text-[#1a1a2e]/60');

// Submit button text color inversion
content = content.replace(/text-\[\#1a1a2e\] transition-all/g, 'text-white transition-all');
content = content.replace(/background: #ffffff;/g, 'background: #1a1a2e;');

// CSS variables
content = content.replace(/color: #ffffff;/g, 'color: #1a1a2e;');
content = content.replace(/rgba\(255,255,255,0\.025\)/g, '#ffffff');
content = content.replace(/rgba\(255,255,255,0\.08\)/g, 'rgba(26,26,46,0.08)');
content = content.replace(/rgba\(255,255,255,0\.07\)/g, 'rgba(26,26,46,0.08)');
content = content.replace(/rgba\(255,255,255,0\.5\)/g, 'rgba(26,26,46,0.6)');
content = content.replace(/rgba\(255,255,255,0\.04\)/g, '#fafaf8');
content = content.replace(/rgba\(255,255,255,0\.1\)/g, 'rgba(26,26,46,0.1)');
content = content.replace(/rgba\(255,255,255,0\.2\)/g, 'rgba(26,26,46,0.4)');
content = content.replace(/rgba\(255,255,255,0\.4\)/g, 'rgba(26,26,46,0.4)');
content = content.replace(/rgba\(255,255,255,0\.3\)/g, 'rgba(26,26,46,0.4)');
content = content.replace(/background: #1a1a2e; color: white;/g, 'background: #ffffff; color: #1a1a2e;');

content = content.replace(/fill=\"white\"/g, 'fill=\"#1a1a2e\"');

fs.writeFileSync('src/components/EnquiryForm.astro', content);


// COURSES
let courses = fs.readFileSync('src/components/Courses.astro', 'utf8');

// Themed bg
courses = courses.replace(/bg-\[\#0a0a0a\]/g, 'bg-[#fafaf8]');

// Header text colors
courses = courses.replace(/text-white\/30/g, 'text-[#1a1a2e]/40');
courses = courses.replace(/bg-white\/30/g, 'bg-[#1a1a2e]/30');
courses = courses.replace(/text-white\/20/g, 'text-[#1a1a2e]/50');
courses = courses.replace(/text-white\/10/g, 'text-[#1a1a2e]/30');

// Progress bar
courses = courses.replace(/bg-white\/10/g, 'bg-[#1a1a2e]/10');
courses = courses.replace(/bg-white\/60/g, 'bg-[#1a1a2e]/60');

// Card styles
courses = courses.replace(/bg-white\/\[0\.02\]/g, 'bg-white');
courses = courses.replace(/hover:bg-white\/\[0\.06\]/g, 'hover:bg-white');
courses = courses.replace(/hover:shadow-\[0_10px_40px_rgba\(0,0,0,0\.5\)\]/g, 'hover:shadow-[0_12px_40px_rgba(26,26,46,0.1)]');
courses = courses.replace(/from-\[\#0a0a0a\] via-\[\#0a0a0a\]\/60/g, 'from-[#fafaf8] via-[#fafaf8]/80');
courses = courses.replace(/border-white\/10 group-hover:border-white\/30/g, 'border-[#1a1a2e]/10 group-hover:border-[#1a1a2e]/30');
courses = courses.replace(/color: rgba\(255,255,255,0\.7\)/g, 'color: rgba(26,26,46,0.7)');
courses = courses.replace(/color: #0a0a0a/g, 'color: #fafaf8');
courses = courses.replace(/text-white\/50/g, 'text-[#1a1a2e]/70');
courses = courses.replace(/text-white\/80/g, 'text-[#1a1a2e]/80');

// Bottom CTA
courses = courses.replace(/text-white\/25/g, 'text-[#1a1a2e]/40');
courses = courses.replace(/border-white\/20 bg-white\/5/g, 'border-[#1a1a2e]/20 bg-[#1a1a2e]/5 text-[#1a1a2e]');
courses = courses.replace(/hover:bg-white hover:text-black/g, 'hover:bg-[#1a1a2e] hover:text-[#fafaf8]');

fs.writeFileSync('src/components/Courses.astro', courses);

console.log('done');
