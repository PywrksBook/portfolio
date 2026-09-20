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
    heroRole: "Web Developer Intern (สหกิจศึกษา)",
    heroDesc: "ผมเป็นนักศึกษาชั้นปีที่ 4 คณะวิทยาการจัดการ สาขาวิชาคอมพิวเตอร์ธุรกิจ สนใจการพัฒนา Web Application และการแก้ปัญหาด้วยซอฟต์แวร์ กำลังพัฒนาทักษะด้าน Full-stack Development, REST API และ Database ผ่านการทำโปรเจกต์จริง พร้อมมองหาโอกาสฝึกงานสหกิจศึกษาในตำแหน่ง Web Developer",
    heroButton1: "ดูผลงานของผม",
    heroButton2: "ดาวน์โหลดเรซูเม่",
    
    // About Section
    aboutTitle: "About Me",
    aboutDesc1: "ผมสนใจการพัฒนาเว็บไซต์แบบ Full-stack และให้ความสำคัญกับทักษะพื้นฐาน (Fundamentals) ด้านการเขียนโปรแกรม การจัดการข้อมูล ฐานข้อมูล และการออกแบบระบบ เพราะเชื่อว่าการเข้าใจพื้นฐานช่วยให้สามารถวิเคราะห์ปัญหาและพัฒนาระบบที่นำไปใช้งานจริงได้ ปัจจุบันผมกำลังพัฒนาทักษะเหล่านี้ผ่านการทำโปรเจกต์จริง และพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง",
    aboutDesc2: "จากประสบการณ์ทำงานด้านระบบ POS การจัดการสต็อก การประสานงานกับฝ่ายซัพพอร์ต การจัดทำรายงาน และการแก้ไขปัญหาอุปกรณ์คอมพิวเตอร์ ผมได้เรียนรู้กระบวนการทำงานและปัญหาที่เกิดขึ้นในธุรกิจจริง จึงสนใจการนำความรู้ด้านการพัฒนาซอฟต์แวร์มาช่วยแก้ปัญหาและปรับปรุงกระบวนการทำงานให้มีประสิทธิภาพมากขึ้น",
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
    workTitle: "Work Experience",
    workJob1Title: "IT & Store Support (Part-time)",
    workJob1Company: "บริษัท แม่เอียดปลาส้มแปดริ้ว จำกัด",
    workJob1Date: "5 มีนาคม 2566 — ปัจจุบัน",
    workJob1Item1: "สนับสนุนการใช้งานระบบ POS ของร้านทั้ง 2 สาขา",
    workJob1Item2: "ประสานงานกับฝ่าย Support เมื่อพบปัญหาที่เกี่ยวข้องกับระบบ POS",
    workJob1Item3: "Export ข้อมูลจากการขายและนำมาสรุปเป็นไฟล์ Excel",
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
    skillLanguages: "Programming Languages",
    skillDatabase: "Database",
    skillTools: "Tools",
    
    // Projects Section
    projectsTitle: "Projects",
    projectTitle: "เว็บไซต์วัดนาคูโมทนามัยปุญญาราม",
    projectDesc: "พัฒนา Backend REST API สำหรับเว็บไซต์วัดนาคูโมทนามัยปุญญาราม ด้วย Node.js, Express.js และ MySQL รองรับการจัดการข้อมูลวัด พระสงฆ์ กิจกรรม ข่าวประชาสัมพันธ์ และภาพกิจกรรม พร้อมระบบยืนยันตัวตนผู้ดูแลด้วย JWT และ bcrypt รวมถึงระบบอัปโหลดรูปภาพด้วย Multer",
    projectLink: "ดูรายละเอียดโปรเจกต์",
    
    // Contact Section
    contactTitle: "Contact Me",
    contactDesc: "กำลังมองหาโอกาสสหกิจศึกษาในสายงานด้าน Web Development และ Software Development หรือสายงานที่เกี่ยวข้อง\n           ยินดีพูดคุยและตอบกลับทุกข้อความครับ",
    contactButton: "ส่งอีเมลถึงผม",
    contactLineButton: "ADD LINE ID",
    contactEmail: "อีเมล",
    contactEmailValue: "piyawat2162@gmail.com",
    contactPhone: "โทรศัพท์",
    contactPhoneValue: "080-081-6814",
    contactGithub: "GitHub",
    contactGithubValue: "github.com/PywrksBook",
    contactLinkedin: "LinkedIn",
    contactLinkedinValue: "linkedin.com/in/piyawat-reangraksa",
    
    // Footer
    footerCopyright: "© 2569 ปิยวัฒน์ เรืองรักษา",
    footerCredit: "สร้างด้วย HTML, CSS & JavaScript"
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
    heroRole: "Web Developer Intern (Co-op)",
    heroDesc: "I am a 4th-year student in Business Computer, Faculty of Management Science. I am interested in developing web applications and solving problems with software, and I am currently building skills in full-stack development, REST APIs, and databases through real projects — looking for a co-op internship opportunity as a Web Developer.",
    heroButton1: "View My Work",
    heroButton2: "Download Resume",
    
    // About Section
    aboutTitle: "About Me",
    aboutDesc1: "I am interested in full-stack web development and I value strong fundamentals — programming, data management, databases, and system design — because understanding the basics makes it possible to analyze problems and build systems that work in the real world. I am currently developing these skills through real projects and am always ready to learn new technologies.",
    aboutDesc2: "Through work experience with POS systems, inventory management, support coordination, reporting, and computer troubleshooting, I learned how real businesses operate and the problems they face. This led me to apply software development knowledge to solve problems and improve work processes more efficiently.",
    factStatus: "Status",
    factStatusValue: "4th Year Student / Ready for Co-op",
    factInstitute: "Institution",
    factInstituteValue: "Rajabhat Rajanagarindra University",
    factMajor: "Faculty / Major",
    factMajorValue: "Faculty of Management Science — Business Computer",
    factLocation: "Location",
    factLocationValue: "Chachoengsao, Thailand",
    factPosition: "Position of Interest",
    factPositionValue: "Web Developer",
    factCoop: "Co-op Period",
    factCoopValue: "November 19, 2026 – February 26, 2027",
    
    // Work Experience Section
    workTitle: "Work Experience",
    workJob1Title: "IT & Store Support (Part-time)",
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
    workJob2Item1: "Assist with electrical system installation in a factory",
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
    projectTitle: "Wat Nakhumothanamai Punyaram Website",
    projectDesc: "Developed a Backend REST API for the Wat Nakhumothanamai Punyaram temple website using Node.js, Express.js, and MySQL, supporting management of temple information, monks, activities, news, and activity photos — with admin authentication via JWT and bcrypt, plus image uploads via Multer.",
    projectLink: "View Project Details",
    
    // Contact Section
    contactTitle: "Contact Me",
    contactDesc: "Looking for co-op opportunities in Web Development and Software Development fields or related positions. Happy to chat and respond to all messages.",
    contactButton: "Send Me an Email",
    contactLineButton: "ADD LINE ID",
    contactEmail: "Email",
    contactEmailValue: "piyawat2162@gmail.com",
    contactPhone: "Phone",
    contactPhoneValue: "080-081-6814",
    contactGithub: "GitHub",
    contactGithubValue: "github.com/PywrksBook",
    contactLinkedin: "LinkedIn",
    contactLinkedinValue: "linkedin.com/in/piyawat-reangraksa",
    
    // Footer
    footerCopyright: "© 2026 Piyawat Reangraksa",
    footerCredit: "Built with HTML, CSS & JavaScript"
  }
};
