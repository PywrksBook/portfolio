/*
 * Translations Data
 * เก็บข้อความสองภาษาสำหรับเว็บไซต์
 * 
 * กฎสำคัญ:
 * - ทุก key ที่เพิ่มใน th ต้องเพิ่มใน en ด้วย
 * - ตั้งชื่อ key แบบ camelCase เช่น navAbout, heroDesc
 * - ใช้คู่กับ data-key ใน HTML elements
 * 
 * วิธีใช้:
 * 1. เพิ่ม data-key="keyName" ใน HTML element
 * 2. เพิ่ม keyName ในทั้ง th และ en objects ที่นี่
 * 3. ฟังก์ชัน updatePageContent() ใน script.js จะอัปเดตให้อัตโนมัติ
 */

const translations = {
  th: {
    // Navigation
    navAbout: "เกี่ยวกับผม",
    navWork: "ประสบการณ์ทำงาน",
    navSkills: "ทักษะ",
    navProjects: "โปรเจกต์",
    navContact: "ติดต่อ",
    
    // Hero Section
    heroGreeting: "Hello, I'm",
    heroDesc: "ผมเป็นนักศึกษาชั้นปีที่ 4 คณะวิทยาการจัดการ สาขาวิชาคอมพิวเตอร์ธุรกิจ\n          สนใจการพัฒนาเว็บไซต์แบบ Full-stack, REST API และระบบฐานข้อมูล \n          กำลังมองหาโอกาสฝึกงานสหกิจศึกษาในตำแหน่ง Web Developer เพื่อพัฒนาทักษะและเรียนรู้จากการทำงานจริง",
    heroButton1: "ดูผลงานของผม",
    heroButton2: "ดาวน์โหลดเรซูเม่",
    
    // About Section
    aboutTitle: "About Me",
    aboutDesc1: "ผมสนใจการพัฒนาเว็บไซต์แบบ Full-stack และกำลังพัฒนาทักษะด้าน Frontend, Backend และฐานข้อมูลผ่านการทำโปรเจกต์จริงและ พร้อมเรียนรู้และเปิดรับเทคโนโลยีใหม่ เพื่อพัฒนาทักษะของตนเองอย่างต่อเนื่อง",
    aboutDesc2: "นอกจากการเรียน ผมมีประสบการณ์ทำงานด้านระบบ POS การจัดการสต็อก การจัดทำรายงาน และการแก้ไขปัญหาอุปกรณ์คอมพิวเตอร์เบื้องต้น ทำให้ได้เรียนรู้การทำงานอย่างเป็นระบบ การตรวจสอบและแก้ไขปัญหา รวมถึงการทำงานร่วมกับผู้อื่นในสถานการณ์จริง",
    factStatus: "สถานะ",
    factStatusValue: "นักศึกษาปี 4 / พร้อมสหกิจศึกษา",
    factInstitute: "สถาบัน",
    factInstituteValue: "มหาวิทยาลัยราชภัฏราชนครินทร์",
    factMajor: "คณะ / สาขา",
    factMajorValue: "วิทยาการจัดการ — คอมพิวเตอร์ธุรกิจ",
    factLocation: "ที่อยู่",
    factLocationValue: "ฉะเชิงเทรา, ประเทศไทย",
    factPosition: "ตำแหน่งที่สนใจ",
    factPositionValue: "Web Developer",
    factCoop: "ช่วงสหกิจศึกษา",
    factCoopValue: "19 พฤศจิกายน 2569 – 26 กุมภาพันธ์ 2570",
    
    // Work Experience Section
    workTitle: "ประสบการณ์การทำงาน",
    workJob1Title: "IT & Store Support",
    workJob1Company: "บริษัท แม่เอียดปลาส้มแปดริ้ว จำกัด",
    workJob1Date: "5 มีนาคม 2566 — ปัจจุบัน",
    workJob1Item1: "สนับสนุนการใช้งานระบบ POS ของร้านทั้ง 2 สาขา",
    workJob1Item2: "ประสานงานกับฝ่าย Support เมื่อพบปัญหาที่เกี่ยวข้องกับระบบ POS",
    workJob1Item3: "Export ข้อมูลจากการขายและ นำมาสรุปเป็นไฟล์ Excel",
    workJob1Item4: "ตรวจสอบและแก้ไขปัญหาเบื้องต้นของอุปกรณ์ฮาร์ดแวร์ เช่น คอมพิวเตอร์ เครื่อง POS เครื่องพิมพ์ใบเสร็จ และเครื่องสแกน",
    workJob1Item5: "ติดตั้งและตั้งค่าอุปกรณ์ให้พร้อมใช้งาน",
    workJob1Item6: "รับผิดชอบการจัดหาอุปกรณ์ ติดตั้ง และทดสอบการใช้งาน",
    workJob1Item7: "ประสานงานกับเจ้าของร้านและเพื่อนร่วมงานเพื่อแก้ไขปัญหาหน้างาน",
    workJob2Title: "ประสบการณ์ฝึกงาน",
    workJob2Company: "บริษัท โกลเด้น ซัน คอนสตรัก จำกัด",
    workJob2Date: "มีนาคม 2565 — พฤษภาคม 2565",
    workJob2Item1: "ช่วยงานติดตั้งระบบไฟฟ้าภายในโรงงาน",
    workJob2Item2: "ใช้เครื่องมือพื้นฐานและปฏิบัติงานตามขั้นตอนความปลอดภัยของโรงงาน",
    workJob2Item3: "ทำงานร่วมกับทีมและปฏิบัติงานตามคำแนะนำของผู้มีประสบการณ์",
    workJob2Item4: "เรียนรู้และปฏิบัติงานใหม่จากสถานการณ์จริงหน้างาน",
    
    // Skills Section
    skillsTitle: "Technical Skills",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillLanguages: "Programming-Languages",
    skillDatabase: "Database",
    skillTools: "Tools",
    
    // Projects Section
    projectsTitle: "Projects",
    projectTag: "REST API สำหรับระบบจัดการข้อมูลวัด",
    projectTitle: "เว็บไซต์วัดนาคูโมทนามัยปุญญาราม",
    projectDesc: "พัฒนา Backend REST API สำหรับเว็บไซต์วัดนาคูโมทนามัยปุญญาราม ด้วย Node.js, Express.js และ MySQL รองรับการจัดการข้อมูลวัด พระสงฆ์ กิจกรรม ข่าวประชาสัมพันธ์ และภาพกิจกรรม พร้อมระบบยืนยันตัวตนผู้ดูแลด้วย JWT และ bcrypt รวมถึงระบบอัปโหลดรูปภาพด้วย Multer ปัจจุบันอยู่ระหว่างพัฒนา Frontend และส่วนอื่นของระบบตามขอบเขตโครงงาน",
    projectLink: "ดูรายละเอียดโปรเจกต์",
    
    // Contact Section
    contactTitle: "Contact Me",
    contactDesc: "กำลังมองหาโอกาสสหกิจศึกษาในสายงานด้าน Web Development และ Software Development หรือสายงานที่เกี่ยวข้อง\n           ยินดีพูดคุยและตอบกลับทุกข้อความครับ",
    contactButton: "ส่งอีเมลถึงผม",
    contactEmail: "อีเมล",
    contactEmailValue: "piyawat2162@gmail.com",
    contactPhone: "โทรศัพท์",
    contactPhoneValue: "080-081-6814",
    contactGithub: "GitHub",
    contactGithubValue: "github.com/PywrksBook",
    contactLinkedin: "LinkedIn",
    contactLinkedinValue: "linkedin.com/in/piyawat-reangraksa",
    
    // Footer
    footerCopyright: "© 2569 ปิยวัฒน์ เรืองรักษา"
  },
  
  en: {
    // Navigation
    navAbout: "About Me",
    navWork: "Work Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    
    // Hero Section
    heroGreeting: "Hello, I'm",
    heroDesc: "I am a 4th-year student in Business Computer from Faculty of Management. Interested in Full-stack web development, REST API, and database systems. Looking for a software engineering co-op opportunity to develop skills and learn from real-world experience.",
    heroButton1: "View My Work",
    heroButton2: "Download Resume",
    
    // About Section
    aboutTitle: "About Me",
    aboutDesc1: "I'm interested in Full-stack web development and actively developing skills in Frontend, Backend, and Database through real projects. I'm eager to learn and embrace new technologies to continuously improve my skills.",
    aboutDesc2: "In addition to my studies, I have work experience with POS systems, inventory management, report generation, and basic computer troubleshooting. This has taught me systematic work processes, problem-solving, and collaboration in real-world situations.",
    factStatus: "Status",
    factStatusValue: "4th Year Student / Ready for Co-op",
    factInstitute: "Institution",
    factInstituteValue: "Rajabhat Rajanagarindra University",
    factMajor: "Faculty / Major",
    factMajorValue: "Business Computer Science",
    factLocation: "Location",
    factLocationValue: "Chachoengsao, Thailand",
    factPosition: "Position Interested",
    factPositionValue: "Web Developer",
    factCoop: "Co-op Period",
    factCoopValue: "November 19, 2026 – February 26, 2027",
    
    // Work Experience Section
    workTitle: "Work Experience",
    workJob1Title: "IT & Store Support",
    workJob1Company: "Mae Aiad Pla Som Pad Riw Co., Ltd.",
    workJob1Date: "March 5, 2023 – Present",
    workJob1Item1: "Support POS system usage across 2 store branches",
    workJob1Item2: "Coordinate with Support team for POS-related issues",
    workJob1Item3: "Export sales data and compile into Excel reports",
    workJob1Item4: "Troubleshoot and fix basic hardware issues including computers, POS machines, receipt printers, and scanners",
    workJob1Item5: "Install and configure equipment for operation",
    workJob1Item6: "Manage equipment procurement, installation, and testing",
    workJob1Item7: "Coordinate with shop owners and colleagues to resolve workplace issues",
    workJob2Title: "Internship Experience",
    workJob2Company: "Golden Sun Construct Co., Ltd.",
    workJob2Date: "March 2022 – May 2022",
    workJob2Item1: "Assist with electrical system installation in factory",
    workJob2Item2: "Use basic tools and follow factory safety procedures",
    workJob2Item3: "Work with team and follow guidance from experienced staff",
    workJob2Item4: "Learn and perform new tasks from real workplace situations",
    
    // Skills Section
    skillsTitle: "Technical Skills",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillLanguages: "Programming Languages",
    skillDatabase: "Database",
    skillTools: "Tools",
    
    // Projects Section
    projectsTitle: "Projects",
    projectTag: "Temple Management REST API",
    projectTitle: "Wat Na Ku Moth Nammai Punya Ram Website",
    projectDesc: "Developed a Backend REST API for the Wat Naku temple website using Node.js, Express.js, and MySQL, supporting management of temple information, monks, activities, news, and activity photos — with admin authentication via JWT and bcrypt, plus image uploads via Multer. The frontend and other parts of the system are currently under development according to the project scope.",
    projectLink: "View Project Details",
    
    // Contact Section
    contactTitle: "Contact Me",
    contactDesc: "Looking for co-op opportunities in Web Development and Software Development fields or related positions. Happy to chat and respond to all messages.",
    contactButton: "Send Me Email",
    contactEmail: "Email",
    contactEmailValue: "piyawat2162@gmail.com",
    contactPhone: "Phone",
    contactPhoneValue: "080-081-6814",
    contactGithub: "GitHub",
    contactGithubValue: "github.com/PywrksBook",
    contactLinkedin: "LinkedIn",
    contactLinkedinValue: "linkedin.com/in/piyawat-reangraksa",
    
    // Footer
    footerCopyright: "© 2026 Piyawat Reangraksa"
  }
};
