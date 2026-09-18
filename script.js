/*
 * Portfolio Website - Main Script
 * จัดการ smooth scroll, reveal animations, typing effect และ language switching
 */

// Scroll progress bar
const progress = document.getElementById('progress');
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
  header.classList.toggle('scrolled', h.scrollTop > 10);
});

/*
 * คำนวณค่า easing แบบ cubic สำหรับ smooth scroll
 * รับค่า t ระหว่าง 0-1 แล้วคืนค่าที่ผ่าน easing แล้ว
 */
function easeInOutCubic(t){ 
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; 
}

/*
 * Smooth scroll ไปยังตำแหน่งที่กำหนด
 * ใช้ requestAnimationFrame เพื่อประสิทธิภาพที่ดีกว่า setInterval
 */
function smoothScrollTo(targetY, duration){
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;
  function step(timestamp){
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progressT = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progressT));
    if (progressT < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// เพิ่ม smooth scroll ให้กับ navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const headerHeight = header.offsetHeight;
    const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
    if (reduceMotion) {
      window.scrollTo(0, targetY);
    } else {
      smoothScrollTo(targetY, 700);
    }
  });
});

/*
 * Reveal on scroll animation
 * ใช้ IntersectionObserver เพื่อ performance ที่ดีกว่าการฟัง scroll event
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion) {
  // ถ้าผู้ใช้ตั้งค่าให้ลด motion ก็แสดงทันที
  revealEls.forEach(el => el.classList.add('in'));
} else {
  // เช็คว่า element เข้ามาในหน้าจอแล้วหรือยัง ที่ 15% ของความสูง
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

/*
 * Typing effect สำหรับชื่อใน hero section
 * พิมพ์ชื่อออกมาทีละตัวอักษร
 */
const nameText = 'Piyawat Reangraksa';
const typedNameEl = document.getElementById('typed-name');
let nameCharIndex = 0;

function typeName(){
  if (reduceMotion) {
    typedNameEl.textContent = nameText;
    return;
  }
  if (nameCharIndex <= nameText.length) {
    typedNameEl.textContent = nameText.slice(0, nameCharIndex);
    nameCharIndex++;
    setTimeout(typeName, 65);
  }
}
typeName();

// ========================================
// Language Switching
// ========================================

let currentLanguage = 'th';

/*
 * อัปเดตข้อความทั้งหน้าตามภาษาที่เลือก
 * หา elements ที่มี data-key แล้วเปลี่ยนข้อความจาก translations object
 */
function updatePageContent() {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
}

/*
 * สลับภาษาระหว่างไทยกับอังกฤษ
 * อัปเดตทั้ง content และ HTML lang attribute เพื่อ accessibility
 */
function switchLanguage() {
  currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
  // เปลี่ยน lang attribute เพื่อให้ screen reader อ่านถูกสำเนียง
  document.documentElement.lang = currentLanguage;
  updatePageContent();
  updateLangToggleButton();
}

// อัปเดตข้อความในปุ่มสลับภาษา
function updateLangToggleButton() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = currentLanguage === 'th' ? 'TH / EN' : 'EN / TH';
  }
}

// เริ่มต้นการทำงานของปุ่มสลับภาษา
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', switchLanguage);
  updateLangToggleButton();
}
