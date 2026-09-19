# Piyawat Reangraksa - Portfolio Website

เว็บไซต์แสดงผลงานส่วนตัว สำหรับนำเสนอทักษะ ประสบการณ์การทำงาน และโปรเจกต์ที่ผ่านมา

## คุณสมบัติหลัก

- รองรับสองภาษา (ไทย/อังกฤษ) สลับได้ด้วยปุ่มเดียว
- ออกแบบแบบ Responsive รองรับทุกขนาดหน้าจอ
- มี Smooth scroll และ Animation เมื่อเลื่อนดู
- ธีมสีเข้ม (Dark theme) พร้อมสีเขียวเป็นจุดเด่น
- ปฏิบัติตามมาตรฐาน Web Accessibility

## เทคโนโลยีที่ใช้

- HTML5 สำหรับโครงสร้าง
- CSS3 พร้อม Custom Properties
- JavaScript แบบ Vanilla (ไม่ใช้ framework)
- Google Fonts (Noto Serif Thai และ IBM Plex Sans Thai)

## โครงสร้างโปรเจกต์

```
Portfolio Book/
├── index.html           หน้าเว็บหลัก
├── project-watnaku.html หน้ารายละเอียดโปรเจกต์ (Modal)
├── project-watnaku.css  สไตล์หน้ารายละเอียดโปรเจกต์
├── style.css            ไฟล์สไตล์ทั้งหมด
├── script.js            การทำงานแบบ Interactive
├── translations.js      ข้อมูลภาษา (TH/EN)
├── img/                 โฟลเดอร์รูปภาพ
│   └── Me.png          รูปโปรไฟล์
└── README.md           ไฟล์นี้
```

## วิธีใช้งาน

### ความต้องการ

- Web Browser สมัยใหม่ (Chrome, Firefox, Safari, Edge)
- Local web server สำหรับการพัฒนา (แนะนำ)

### การติดตั้ง

1. Clone หรือดาวน์โหลด repository นี้
   ```bash
   git clone https://github.com/PywrksBook/portfolio.git
   cd portfolio
   ```

2. เปิดด้วย Live Server (แนะนำ)
   - ติดตั้ง extension "Live Server" ใน VS Code
   - คลิกขวาที่ index.html แล้วเลือก "Open with Live Server"

3. หรือเปิดในเบราว์เซอร์โดยตรง
   - ดับเบิลคลิกที่ index.html
   - หรือลากไฟล์เข้าไปในเบราว์เซอร์

## รายละเอียดฟีเจอร์

### การสลับภาษา
- คลิกปุ่ม "TH / EN" ที่แถบเมนู
- เนื้อหาทั้งหมดจะเปลี่ยนเป็นภาษาที่เลือก
- รีเฟรชหน้าจะกลับไปเป็นภาษาไทย
- ใช้ระบบ data-key attributes ในการแมปคำแปล

### Smooth Scroll
- คลิกเมนูจะเลื่อนไปยัง section ที่เลือกอย่างนุ่มนวล
- ใช้ cubic easing เพื่อการเคลื่อนไหวที่ดูธรรมชาติ
- ปิดการทำงานอัตโนมัติถ้าผู้ใช้ตั้งค่า reduced motion

### Typing Effect
- ชื่อในส่วน Hero จะพิมพ์ออกมาทีละตัวอักษร
- จะปิดการทำงานอัตโนมัติสำหรับผู้ที่ตั้งค่า reduced motion

### Reveal Animations
- แต่ละ section จะค่อย ๆ เฟดเข้ามาเมื่อเลื่อนลงมา
- ใช้ Intersection Observer API เพื่อประสิทธิภาพที่ดี
- ปิดอัตโนมัติสำหรับผู้ใช้ที่ไม่ต้องการ animation

## ข้อมูลติดต่อ

- Email: piyawat2162@gmail.com
- Phone: 080-081-6814
- Location: Chachoengsao, Thailand

## การศึกษา

มหาวิทยาลัยราชภัฏราชนครินทร์  
คณะวิทยาการจัดการ สาขาคอมพิวเตอร์ธุรกิจ  
นักศึกษาชั้นปีที่ 4 (2023-2027)

## ทักษะทางเทคนิค

- Frontend: HTML5, CSS3, JavaScript, Responsive Design
- Backend: Node.js, Express.js, REST API
- Database: MySQL, MariaDB
- Tools: Git & GitHub, VS Code, Postman, XAMPP

## ส่วนประกอบของเว็บไซต์

1. Hero - แนะนำตัวและ Call-to-action
2. About Me - ประวัติส่วนตัวและข้อมูลสรุป
3. Work Experience - ประวัติการทำงานและฝึกงาน
4. Skills - ทักษะทางเทคนิคแยกตามหมวดหมู่
5. Projects - ผลงานที่ทำมา
6. Contact - ช่องทางการติดต่อ

## เบราว์เซอร์ที่รองรับ

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Responsive Breakpoints

- Desktop: มากกว่า 860px
- Tablet/Mobile: น้อยกว่าหรือเท่ากับ 860px

## แผนการพัฒนาในอนาคต

- เพิ่มโปรเจกต์ใหม่ ๆ เข้าไปในส่วน Showcase
- เพิ่มปุ่มสลับ Dark/Light theme
- เพิ่มส่วน Blog
- เชื่อมต่อกับ GitHub API เพื่อแสดง repositories
- เพิ่มฟอร์มติดต่อพร้อม backend
- ปรับปรุงเมนูมือถือให้เป็น hamburger menu

## License

โปรเจกต์นี้เป็น open source และใช้ MIT License

## ผู้พัฒนา

Piyawat Reangraksa

กำลังมองหาโอกาสสหกิจศึกษาในสายงาน Web Development และ Software Development  
ช่วงเวลาที่พร้อม: 19 พฤศจิกายน 2569 ถึง 26 กุมภาพันธ์ 2570

---

สร้างด้วย HTML, CSS และ JavaScript
