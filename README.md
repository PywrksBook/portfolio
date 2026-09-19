# Piyawat Reangraksa - Portfolio Website

เว็บไซต์แสดงผลงานส่วนตัว สำหรับนำเสนอทักษะ ประสบการณ์การทำงาน และโปรเจกต์ที่ผ่านมา

🌐 **เว็บไซต์ออนไลน์:** https://pywrksbook.github.io/portfolio/


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
├── resume_piyawat_reangraksa.pdf  เรซูเม่ (ดาวน์โหลดได้จากหน้าเว็บ)
├── img/                 โฟลเดอร์รูปภาพ
│   └── Me.png          รูปโปรไฟล์
└── README.md           ไฟล์นี้
```

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

### หน้า Project Detail
- กด "ดูรายละเอียดโปรเจกต์" จากการ์ดโปรเจกต์เพื่อเปิดหน้ารายละเอียด
- แสดงเป็นหน้าต่างแบบ Modal บนฉากหลังมืด พร้อมปุ่ม X ปิดกลับหน้าหลัก
- แสดง Role / Period / สถานะโปรเจกต์ / Tech Stack / Key Responsibilities
- ลิงก์ไปยัง GitHub Repository ของโปรเจกต์

### ช่องทางติดต่อ
- ปุ่มส่งอีเมล (เปิด Gmail พร้อมหัวข้อส่งถึง)
- ปุ่ม ADD LINE ID (เปิดหน้าโปรไฟล์ LINE)
- ลิงก์ GitHub และ LinkedIn ในรายการติดต่อ

## ข้อมูลติดต่อ

- Email: piyawat2162@gmail.com
- Phone: 080-081-6814
- Location: Chachoengsao, Thailand
- GitHub: [github.com/PywrksBook](https://github.com/PywrksBook)
- LinkedIn: [piyawat-reangraksa](https://www.linkedin.com/in/piyawat-reangraksa-0799b9436/)
- LINE: เพิ่มเพื่อนผ่านปุ่ม "ADD LINE ID" บนหน้าเว็บ

## การศึกษา

มหาวิทยาลัยราชภัฏราชนครินทร์  
คณะวิทยาการจัดการ สาขาคอมพิวเตอร์ธุรกิจ  
นักศึกษาชั้นปีที่ 4 (2023-2027)

## ทักษะทางเทคนิค

- Frontend: HTML5, CSS3, JavaScript, Responsive Design
- Backend: Node.js, Express.js, REST API, JWT, bcrypt, Multer
- Database: MySQL, MariaDB
- Tools: Git & GitHub, VS Code, Postman, XAMPP

## ส่วนประกอบของเว็บไซต์

1. Hero - แนะนำตัวและ Call-to-action
2. About Me - ประวัติส่วนตัวและข้อมูลสรุป
3. Work Experience - ประวัติการทำงานและฝึกงาน
4. Skills - ทักษะทางเทคนิคแยกตามหมวดหมู่
5. Projects - ผลงานที่ทำมา
6. Contact - ช่องทางการติดต่อ

## Responsive Breakpoints

- Desktop: มากกว่า 860px
- Tablet/Mobile: น้อยกว่าหรือเท่ากับ 860px

## License

โปรเจกต์นี้เป็นผลงานส่วนบุคคลเพื่อการสมัครฝึกงาน — สามารถดูโค้ดเพื่อศึกษาได้ ห้ามนำไปใช้เชิงพาณิชย์โดยไม่ได้รับอนุญาต

## ผู้พัฒนา

Piyawat Reangraksa

กำลังมองหาโอกาสสหกิจศึกษาในสายงาน Web Development และ Software Development  
ช่วงเวลาที่พร้อม: 19 พฤศจิกายน 2569 ถึง 26 กุมภาพันธ์ 2570

---

สร้างด้วย HTML, CSS และ JavaScript
