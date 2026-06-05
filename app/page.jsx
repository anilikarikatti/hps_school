"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const galleryImages = [
  "/gallery/3d89935e08d38bc6a00b3fa6293dbdad.jpg",
  "/gallery/dc-Cover-d51mondbaernmd7f725ddgo6h7-20210323000044.Medi.jpeg",
  "/gallery/deccanherald_2025-02-09_0mvf6ucn_file7qfuqdts1oinfxd7cyv.jpg",
  "/gallery/gettyimages-1259103800-612x612.jpg",
  "/gallery/hqdefault%20(1).jpg",
  "/gallery/hqdefault.jpg",
  "/gallery/india-karnataka-state-badami-government-school-3ARBPB7.jpg",
  "/gallery/istockphoto-1376131442-612x612.jpg",
  "/gallery/istockphoto-1376135267-612x612.jpg",
  "/gallery/istockphoto-1392742688-612x612.jpg",
  "/gallery/istockphoto-1392743559-612x612.jpg",
  "/gallery/istockphoto-1392743825-612x612.jpg",
  "/gallery/istockphoto-1392743891-612x612.jpg",
  "/gallery/maxresdefault.jpg",
  "/gallery/Mid-day-meal-girlsjpg.webp",
  "/gallery/students.jpg",
  "/gallery/students1.jpg"
];

const content = {
  en: {
    nav: [
      ["Home", "home"],
      ["About", "about"],
      ["Academics", "academics"],
      ["Admissions", "admissions"],
      ["Facilities", "facilities"],
      ["Gallery", "gallery"],
      ["News & Events", "news"],
      ["Contact", "contact"]
    ],
    schoolType: "Government School",
    tagline: "Learning Today, Leading Tomorrow",
    heroTitle: "Welcome to HPS Hireulligeri",
    heroText: "A Kannada medium government higher primary school in Hireulligeri, Savadatti, nurturing confident learners from Grade 1 to Grade 8.",
    apply: "Apply Now",
    learn: "Learn More",
    aboutKicker: "About School",
    aboutTitle: "Serving Hireulligeri with quality education since 1890.",
    aboutText:
      "Kannada Higher Primary School Hireulligeri was established in 1890 and is managed by the Department of Education. Located in the rural area of Soundatti block, Belagavi district, the school provides co-educational learning from Grades 1 to 8 with Kannada as the medium of instruction.",
    aboutTextTwo:
      "The campus has a government building with 9 well-maintained classrooms, rooms for school activities, a separate Head Master/teacher room, pucca boundary wall, electricity, functional boys and girls toilets, a playground, and a library with 2,206 books. Mid-day meal support is provided as per the school program.",
    mission: "Mission",
    missionText: "To give every child accessible, value-based education through disciplined teaching, curiosity, community values, and practical learning.",
    vision: "Vision",
    visionText: "To develop responsible learners who grow with knowledge, confidence, empathy, and pride in Kannada language and local culture.",
    principal: "Principal Message",
    principalText: "Our school is committed to giving every child an environment where learning feels meaningful, joyful, and connected to life.",
    stats: [
      ["Students Studied", 10, "K+", "fa-user-graduate"],
      ["Teachers", 100, "+", "fa-chalkboard-user"],
      ["Years of Excellence", 126, "+", "fa-award"],
      ["Success Rate", 98, "%", "fa-chart-line"]
    ],
    academicsTitle: "Programs for every stage of learning.",
    academics: [
      ["Primary School", "fa-child-reaching", "Strong foundations in language, numeracy, creativity, and values."],
      ["Middle School", "fa-book-open-reader", "Balanced learning that builds curiosity, confidence, and collaboration."],
      ["High School", "fa-school", "Focused academic preparation with mentoring and life skills."]
    ],
    facilitiesTitle: "Campus facilities built for learning and wellbeing.",
    facilities: [
      ["Smart Classrooms", "fa-display", "Interactive teaching spaces make daily lessons clearer, visual, and engaging."],
      ["Computer Labs", "fa-computer", "Students build digital confidence through guided computer awareness and practice."],
      ["Science Laboratories", "fa-microscope", "Hands-on experiments help children understand science through observation and activity."],
      ["Library", "fa-book", "A 2,206-book library encourages reading habits, curiosity, and independent learning."],
      ["Sports Ground", "fa-futbol", "Open play space supports fitness, teamwork, discipline, and school sports events."],
      ["Qualified Lecturers", "fa-user-tie", "Experienced teachers guide students with care, subject knowledge, and regular mentoring."],
      ["Free Mid-Day Meal", "fa-utensils", "Nutritious free meals support student health, attendance, and classroom focus."],
      ["Medical Room", "fa-briefcase-medical", "Basic first-aid support helps keep students safe during the school day."]
    ],
    admissionsTitle: "Simple admission process for families.",
    admissionsText: "Our admissions team helps parents understand eligibility, documents, and next steps clearly.",
    steps: ["Visit school office", "Submit application", "Document verification", "Admission confirmation"],
    eligibilityTitle: "Eligibility & Documents",
    eligibilityText: "Age-appropriate class eligibility, birth certificate, transfer certificate if applicable, previous marks card, passport photos, and address proof.",
    galleryTitle: "Moments from campus life.",
    newsTitle: "Upcoming highlights at HPS Hireulligeri.",
    events: [
      ["15 Jul", "Annual Day", "A celebration of student talent, achievements, music, and theatre."],
      ["02 Aug", "Science Fair", "Young innovators present models, experiments, and research ideas."],
      ["18 Sep", "Sports Meet", "Track, field, and team events that encourage fitness and sportsmanship."],
      ["12 Oct", "Cultural Fest", "A colorful showcase of local culture, dance, art, and language."]
    ],
    testimonialsTitle: "What families say about us.",
    testimonials: [
      ["Asha Patil", "Parent", "The teachers give personal attention and the school feels welcoming, disciplined, and ambitious.", "/gallery/students.jpg"],
      ["Rohan K.", "Student", "I love the library, playground, and classroom activities. Learning here feels exciting every week.", "/gallery/students1.jpg"],
      ["Meena Desai", "Parent", "HPS Hireulligeri has helped my child become confident in academics and public speaking.", "/gallery/Mid-day-meal-girlsjpg.webp"]
    ],
    faqTitle: "Helpful answers for parents.",
    faqs: [
      ["When do admissions open?", "Admissions usually open at the beginning of the academic year. Families can contact the office for current dates."],
      ["What is the medium of instruction?", "Kannada is the medium of instruction for the school."],
      ["What documents are required?", "Birth certificate, transfer certificate if applicable, previous academic records, photos, and address proof are required."]
    ],
    newsletterTitle: "Stay connected with school updates.",
    newsletterText: "Subscribe for admission updates, events, and announcements.",
    subscribe: "Subscribe",
    contactTitle: "Visit or message HPS Hireulligeri.",
    placeholders: ["Full name", "Email address", "Phone number", "Message"],
    send: "Send Message",
    map: "HPS Hireulligeri Map",
    quick: "Quick Links",
    contact: "Contact",
    backTop: "Back to top",
    copyright: "All rights reserved.",
    readMore: "Read More"
  },
  kn: {
    nav: [
      ["ಮುಖಪುಟ", "home"],
      ["ನಮ್ಮ ಬಗ್ಗೆ", "about"],
      ["ಶೈಕ್ಷಣಿಕ", "academics"],
      ["ಪ್ರವೇಶ", "admissions"],
      ["ಸೌಲಭ್ಯಗಳು", "facilities"],
      ["ಚಿತ್ರಗಳು", "gallery"],
      ["ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು", "news"],
      ["ಸಂಪರ್ಕ", "contact"]
    ],
    schoolType: "ಸರ್ಕಾರಿ ಶಾಲೆ",
    tagline: "ಇಂದು ಕಲಿಕೆ, ನಾಳೆ ನಾಯಕತ್ವ",
    heroTitle: "HPS ಹಿರೇಉಳ್ಳಿಗೇರಿಗೆ ಸ್ವಾಗತ",
    heroText: "ಹಿರೇಉಳ್ಳಿಗೇರಿ, ಸವದತ್ತಿಯ ಕನ್ನಡ ಮಾಧ್ಯಮ ಸರ್ಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ. 1ರಿಂದ 8ನೇ ತರಗತಿಯ ಮಕ್ಕಳಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ.",
    apply: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    learn: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    aboutKicker: "ಶಾಲೆಯ ಬಗ್ಗೆ",
    aboutTitle: "1890ರಿಂದ ಹಿರೇಉಳ್ಳಿಗೇರಿಯಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಸೇವೆ.",
    aboutText:
      "ಕನ್ನಡ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ಹಿರೇಉಳ್ಳಿಗೇರಿ 1890ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಗಿದ್ದು ಶಿಕ್ಷಣ ಇಲಾಖೆಯಿಂದ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ. ಬೆಳಗಾವಿ ಜಿಲ್ಲೆಯ ಸವದತ್ತಿ ವಿಭಾಗದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶದಲ್ಲಿರುವ ಈ ಶಾಲೆ 1ರಿಂದ 8ನೇ ತರಗತಿಯವರೆಗೆ ಸಹಶಿಕ್ಷಣವನ್ನು ಕನ್ನಡ ಮಾಧ್ಯಮದಲ್ಲಿ ಒದಗಿಸುತ್ತದೆ.",
    aboutTextTwo:
      "ಶಾಲೆಯಲ್ಲಿ ಸರ್ಕಾರಿ ಕಟ್ಟಡ, 9 ಉತ್ತಮ ತರಗತಿ ಕೊಠಡಿಗಳು, ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ಕೊಠಡಿಗಳು, ಮುಖ್ಯೋಪಾಧ್ಯಾಯರ ಕೊಠಡಿ, ಪಕ್ಕಾ ಗಡಿ ಗೋಡೆ, ವಿದ್ಯುತ್, ಬಾಲಕರ ಮತ್ತು ಬಾಲಕಿಯರ ಶೌಚಾಲಯಗಳು, ಆಟದ ಮೈದಾನ ಮತ್ತು 2,206 ಪುಸ್ತಕಗಳಿರುವ ಗ್ರಂಥಾಲಯವಿದೆ. ಮಧ್ಯಾಹ್ನದ ಊಟದ ವ್ಯವಸ್ಥೆಯೂ ಲಭ್ಯವಿದೆ.",
    mission: "ಧ್ಯೇಯ",
    missionText: "ಶಿಸ್ತಿನ ಬೋಧನೆ, ಕುತೂಹಲ, ಸಮುದಾಯ ಮೌಲ್ಯಗಳು ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆಯ ಮೂಲಕ ಪ್ರತಿಯೊಬ್ಬ ಮಗುವಿಗೂ ಮೌಲ್ಯಾಧಾರಿತ ಶಿಕ್ಷಣ ನೀಡುವುದು.",
    vision: "ದೃಷ್ಟಿ",
    visionText: "ಜ್ಞಾನ, ಆತ್ಮವಿಶ್ವಾಸ, ಸಹಾನುಭೂತಿ ಮತ್ತು ಕನ್ನಡ ಭಾಷೆ ಹಾಗೂ ಸ್ಥಳೀಯ ಸಂಸ್ಕೃತಿಯ ಗೌರವದೊಂದಿಗೆ ಜವಾಬ್ದಾರಿಯುತ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಬೆಳೆಸುವುದು.",
    principal: "ಮುಖ್ಯೋಪಾಧ್ಯಾಯರ ಸಂದೇಶ",
    principalText: "ಪ್ರತಿ ಮಗುವಿಗೂ ಅರ್ಥಪೂರ್ಣ, ಸಂತೋಷಕರ ಮತ್ತು ಜೀವನಕ್ಕೆ ಸಂಪರ್ಕ ಹೊಂದಿರುವ ಕಲಿಕಾ ವಾತಾವರಣ ನೀಡಲು ನಮ್ಮ ಶಾಲೆ ಬದ್ಧವಾಗಿದೆ.",
    stats: [
      ["ಓದಿದ ವಿದ್ಯಾರ್ಥಿಗಳು", 10, "K+", "fa-user-graduate"],
      ["ಶಿಕ್ಷಕರು", 100, "+", "fa-chalkboard-user"],
      ["ಶ್ರೇಷ್ಠತೆಯ ವರ್ಷಗಳು", 126, "+", "fa-award"],
      ["ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ", 98, "%", "fa-chart-line"]
    ],
    academicsTitle: "ಪ್ರತಿ ಹಂತದ ಕಲಿಕೆಗೆ ಸೂಕ್ತ ಕಾರ್ಯಕ್ರಮಗಳು.",
    academics: [
      ["ಪ್ರಾಥಮಿಕ ಶಾಲೆ", "fa-child-reaching", "ಭಾಷೆ, ಗಣಿತ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ಮೌಲ್ಯಗಳ ಬಲವಾದ ಅಡಿಪಾಯ."],
      ["ಮಧ್ಯಮ ಶಾಲೆ", "fa-book-open-reader", "ಕುತೂಹಲ, ಆತ್ಮವಿಶ್ವಾಸ ಮತ್ತು ಸಹಕಾರ ಬೆಳೆಸುವ ಸಮತೋಲನ ಕಲಿಕೆ."],
      ["ಹೈ ಶಾಲೆ", "fa-school", "ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಜೀವನ ಕೌಶಲ್ಯಗಳೊಂದಿಗೆ ಶೈಕ್ಷಣಿಕ ಸಿದ್ಧತೆ."]
    ],
    facilitiesTitle: "ಕಲಿಕೆ ಮತ್ತು ಕ್ಷೇಮಕ್ಕಾಗಿ ರೂಪಿಸಿದ ಸೌಲಭ್ಯಗಳು.",
    facilities: [
      ["ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳು", "fa-display", "ದೃಶ್ಯ ಮತ್ತು ಆಸಕ್ತಿದಾಯಕ ಬೋಧನೆಯ ಮೂಲಕ ಪಾಠಗಳು ಇನ್ನಷ್ಟು ಸ್ಪಷ್ಟವಾಗುತ್ತವೆ."],
      ["ಕಂಪ್ಯೂಟರ್ ಪ್ರಯೋಗಾಲಯ", "fa-computer", "ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು ಡಿಜಿಟಲ್ ಜ್ಞಾನ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸ ಬೆಳೆಸುತ್ತಾರೆ."],
      ["ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ", "fa-microscope", "ಪ್ರಯೋಗ ಮತ್ತು ವೀಕ್ಷಣೆಯ ಮೂಲಕ ವಿಜ್ಞಾನವನ್ನು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಕಲಿಯಲು ಸಹಾಯ."],
      ["ಗ್ರಂಥಾಲಯ", "fa-book", "2,206 ಪುಸ್ತಕಗಳ ಗ್ರಂಥಾಲಯ ಓದುವ ಅಭ್ಯಾಸ ಮತ್ತು ಕುತೂಹಲವನ್ನು ಬೆಳೆಸುತ್ತದೆ."],
      ["ಆಟದ ಮೈದಾನ", "fa-futbol", "ಆರೋಗ್ಯ, ತಂಡದ ಮನೋಭಾವ, ಶಿಸ್ತು ಮತ್ತು ಕ್ರೀಡಾ ಚಟುವಟಿಕೆಗಳಿಗೆ ತೆರೆಯಾದ ಸ್ಥಳ."],
      ["ಅರ್ಹ ಉಪನ್ಯಾಸಕರು", "fa-user-tie", "ಅನುಭವೀ ಶಿಕ್ಷಕರು ಕಾಳಜಿ, ವಿಷಯ ಜ್ಞಾನ ಮತ್ತು ನಿರಂತರ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ."],
      ["ಉಚಿತ ಮಧ್ಯಾಹ್ನದ ಊಟ", "fa-utensils", "ಪೌಷ್ಟಿಕ ಉಚಿತ ಊಟ ವಿದ್ಯಾರ್ಥಿಗಳ ಆರೋಗ್ಯ, ಹಾಜರಾತಿ ಮತ್ತು ಗಮನಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ."],
      ["ವೈದ್ಯಕೀಯ ಕೊಠಡಿ", "fa-briefcase-medical", "ಮೂಲಭೂತ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಶಾಲಾ ಸಮಯದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಸುರಕ್ಷತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ."]
    ],
    admissionsTitle: "ಪೋಷಕರಿಗೆ ಸರಳ ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ.",
    admissionsText: "ಅರ್ಹತೆ, ದಾಖಲೆಗಳು ಮತ್ತು ಮುಂದಿನ ಹಂತಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಲು ನಮ್ಮ ತಂಡ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    steps: ["ಶಾಲಾ ಕಚೇರಿಗೆ ಭೇಟಿ", "ಅರ್ಜಿ ಸಲ್ಲಿಕೆ", "ದಾಖಲೆ ಪರಿಶೀಲನೆ", "ಪ್ರವೇಶ ದೃಢೀಕರಣ"],
    eligibilityTitle: "ಅರ್ಹತೆ ಮತ್ತು ದಾಖಲೆಗಳು",
    eligibilityText: "ವಯಸ್ಸಿಗೆ ತಕ್ಕ ತರಗತಿ ಅರ್ಹತೆ, ಜನನ ಪ್ರಮಾಣಪತ್ರ, ಅಗತ್ಯವಿದ್ದರೆ ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರ, ಹಿಂದಿನ ಅಂಕಪಟ್ಟಿ, ಫೋಟೋಗಳು ಮತ್ತು ವಿಳಾಸದ ದಾಖಲೆ.",
    galleryTitle: "ಶಾಲಾ ಜೀವನದ ಕ್ಷಣಗಳು.",
    newsTitle: "HPS ಹಿರೇಉಳ್ಳಿಗೇರಿಯ ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು.",
    events: [
      ["15 ಜುಲೈ", "ವಾರ್ಷಿಕೋತ್ಸವ", "ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಸಾಧನೆ, ಸಂಗೀತ ಮತ್ತು ನಾಟಕದ ಸಂಭ್ರಮ."],
      ["02 ಆಗಸ್ಟ್", "ವಿಜ್ಞಾನ ಮೇಳ", "ಮಾದರಿ, ಪ್ರಯೋಗ ಮತ್ತು ಸಂಶೋಧನಾ ಆಲೋಚನೆಗಳ ಪ್ರದರ್ಶನ."],
      ["18 ಸೆಪ್ಟೆಂಬರ್", "ಕ್ರೀಡಾಕೂಟ", "ಆರೋಗ್ಯ ಮತ್ತು ಕ್ರೀಡಾ ಮನೋಭಾವ ಬೆಳೆಸುವ ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮಗಳು."],
      ["12 ಅಕ್ಟೋಬರ್", "ಸಾಂಸ್ಕೃತಿಕ ಹಬ್ಬ", "ಸ್ಥಳೀಯ ಸಂಸ್ಕೃತಿ, ನೃತ್ಯ, ಕಲೆ ಮತ್ತು ಭಾಷೆಯ ಬಣ್ಣದ ಪ್ರದರ್ಶನ."]
    ],
    testimonialsTitle: "ಕುಟುಂಬಗಳು ನಮ್ಮ ಬಗ್ಗೆ ಹೇಳುವುದು.",
    testimonials: [
      ["ಆಶಾ ಪಾಟೀಲ್", "ಪೋಷಕರು", "ಶಿಕ್ಷಕರು ವೈಯಕ್ತಿಕ ಗಮನ ನೀಡುತ್ತಾರೆ. ಶಾಲೆ ಆತ್ಮೀಯ, ಶಿಸ್ತಿನ ಮತ್ತು ಉತ್ಸಾಹಭರಿತವಾಗಿದೆ.", "/gallery/students.jpg"],
      ["ರೋಹನ್ ಕೆ.", "ವಿದ್ಯಾರ್ಥಿ", "ಗ್ರಂಥಾಲಯ, ಆಟದ ಮೈದಾನ ಮತ್ತು ತರಗತಿ ಚಟುವಟಿಕೆಗಳು ನನಗೆ ತುಂಬಾ ಇಷ್ಟ.", "/gallery/students1.jpg"],
      ["ಮೀನಾ ದೇಸಾಯಿ", "ಪೋಷಕರು", "HPS ಹಿರೇಉಳ್ಳಿಗೇರಿ ನನ್ನ ಮಗುವಿಗೆ ಅಧ್ಯಯನ ಮತ್ತು ಮಾತನಾಡುವ ಆತ್ಮವಿಶ್ವಾಸ ನೀಡಿದೆ.", "/gallery/Mid-day-meal-girlsjpg.webp"]
    ],
    faqTitle: "ಪೋಷಕರಿಗೆ ಉಪಯುಕ್ತ ಉತ್ತರಗಳು.",
    faqs: [
      ["ಪ್ರವೇಶ ಯಾವಾಗ ಆರಂಭವಾಗುತ್ತದೆ?", "ಸಾಮಾನ್ಯವಾಗಿ ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ಆರಂಭದಲ್ಲಿ ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ ಆರಂಭವಾಗುತ್ತದೆ. ದಿನಾಂಕಗಳಿಗಾಗಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ."],
      ["ಬೋಧನಾ ಮಾಧ್ಯಮ ಯಾವುದು?", "ಶಾಲೆಯ ಬೋಧನಾ ಮಾಧ್ಯಮ ಕನ್ನಡ."],
      ["ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?", "ಜನನ ಪ್ರಮಾಣಪತ್ರ, ಅಗತ್ಯವಿದ್ದರೆ ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರ, ಹಿಂದಿನ ದಾಖಲೆಗಳು, ಫೋಟೋಗಳು ಮತ್ತು ವಿಳಾಸದ ದಾಖಲೆ ಬೇಕು."]
    ],
    newsletterTitle: "ಶಾಲಾ ಸುದ್ದಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ.",
    newsletterText: "ಪ್ರವೇಶ, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಪ್ರಕಟಣೆಗಳಿಗಾಗಿ ಚಂದಾದಾರರಾಗಿ.",
    subscribe: "ಚಂದಾದಾರರಾಗಿ",
    contactTitle: "HPS ಹಿರೇಉಳ್ಳಿಗೇರಿಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸಂದೇಶ ಕಳುಹಿಸಿ.",
    placeholders: ["ಪೂರ್ಣ ಹೆಸರು", "ಇಮೇಲ್ ವಿಳಾಸ", "ದೂರವಾಣಿ ಸಂಖ್ಯೆ", "ಸಂದೇಶ"],
    send: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    map: "HPS ಹಿರೇಉಳ್ಳಿಗೇರಿ ನಕ್ಷೆ",
    quick: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    contact: "ಸಂಪರ್ಕ",
    backTop: "ಮೇಲಕ್ಕೆ",
    copyright: "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    readMore: "ಇನ್ನಷ್ಟು ಓದಿ"
  }
};

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1400;
    const start = performance.now();
    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "kn" ? "kn" : "en";
    const timer = setTimeout(() => setLoading(false), 500);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [language]);

  function handleContactSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus(language === "kn" ? "ಸರಿಯಾದ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ." : "Please enter a valid email address.");
      return;
    }
    if (phone && !/^[0-9+\s-]{8,15}$/.test(phone)) {
      setFormStatus(language === "kn" ? "ಸರಿಯಾದ ದೂರವಾಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ." : "Please enter a valid phone number.");
      return;
    }
    event.currentTarget.reset();
    setFormStatus(language === "kn" ? "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಸಂದೇಶ ಸ್ವೀಕರಿಸಲಾಗಿದೆ." : "Thank you. Your message has been validated successfully.");
  }

  function handleNewsletter(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("newsletter");
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    setNewsletterStatus(valid ? (language === "kn" ? "ಚಂದಾದಾರಿಕೆ ಸಿದ್ಧವಾಗಿದೆ." : "Subscription ready.") : (language === "kn" ? "ಸರಿಯಾದ ಇಮೇಲ್ ನಮೂದಿಸಿ." : "Enter a valid email."));
  }

  return (
    <main id="home" className="min-h-screen overflow-x-hidden">
      {loading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-school-navy" aria-label="Loading website">
          <div className="h-16 w-16 rounded-full loader-ring" />
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/95 shadow-sm backdrop-blur">
        <nav className="section-shell flex h-[var(--header-height)] items-center justify-between" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3" aria-label="HPS Hireulligeri home">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-school-blue text-xl text-white shadow-lg">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-extrabold text-school-navy">HPS Hireulligeri</span>
              <span className="block text-xs font-medium text-slate-500">{t.schoolType}</span>
            </span>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {t.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 transition hover:text-school-blue">
                {label}
              </a>
            ))}
            <button onClick={() => setLanguage(language === "en" ? "kn" : "en")} className="rounded-lg bg-school-blue px-4 py-2 text-sm font-bold text-white">
              {language === "en" ? "ಕನ್ನಡ" : "English"}
            </button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-blue-100 text-school-navy lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-blue-100 bg-white lg:hidden">
            <div className="section-shell grid gap-1 py-4">
              <button onClick={() => setLanguage(language === "en" ? "kn" : "en")} className="mb-2 rounded-lg bg-school-blue px-3 py-3 text-left text-sm font-bold text-white">
                {language === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ" : "Switch to English"}
              </button>
              {t.nav.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-school-sky">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="hero-bg flex min-h-[92vh] items-center pt-[var(--header-height)] text-white">
        <div className="section-shell py-20">
          <div className="max-w-3xl reveal">
            <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">{t.tagline}</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#admissions" className="rounded-lg bg-school-gold px-7 py-4 text-center font-bold text-school-navy shadow-lg transition hover:bg-yellow-300">{t.apply}</a>
              <a href="#about" className="rounded-lg border border-white/60 px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-school-navy">{t.learn}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="reveal overflow-hidden rounded-lg bg-school-navy text-white shadow-premium">
              <div className="relative min-h-80">
                <Image src="/gallery/india-karnataka-state-badami-government-school-3ARBPB7.jpg" alt="HPS Hireulligeri campus" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-school-navy/20 to-transparent" />
                <div className="absolute bottom-0 p-7">
                  <span className="rounded-full bg-school-gold px-4 py-2 text-sm font-bold text-school-navy">Since 1890</span>
                  <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t.aboutTitle}</h2>
                </div>
              </div>
              <div className="grid gap-4 p-7 sm:grid-cols-3">
                {[
                  ["9", language === "kn" ? "ತರಗತಿ ಕೊಠಡಿಗಳು" : "Classrooms"],
                  ["2,206", language === "kn" ? "ಗ್ರಂಥಾಲಯ ಪುಸ್ತಕಗಳು" : "Library Books"],
                  ["1-8", language === "kn" ? "ತರಗತಿಗಳು" : "Grades"]
                ].map(([number, label]) => (
                  <div key={label} className="rounded-lg bg-white/10 p-4">
                    <p className="text-3xl font-extrabold text-school-gold">{number}</p>
                    <p className="mt-1 text-sm text-blue-100">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <span className="section-kicker"><i className="fa-solid fa-landmark" /> {t.aboutKicker}</span>
              <p className="section-copy">{t.aboutText}</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{t.aboutTextTwo}</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="premium-card p-6">
                  <h3 className="text-xl font-bold text-school-navy">{t.mission}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{t.missionText}</p>
                </div>
                <div className="premium-card p-6">
                  <h3 className="text-xl font-bold text-school-navy">{t.vision}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{t.visionText}</p>
                </div>
              </div>
              <aside className="premium-card mt-5 p-6">
                <p className="text-sm font-semibold uppercase text-school-blue">{t.principal}</p>
                <h3 className="mt-1 text-2xl font-bold text-school-navy">Dr. Mallikarjun Shirur</h3>
                <p className="mt-4 leading-8 text-slate-600">"{t.principalText}"</p>
              </aside>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map(([label, value, suffix, icon]) => (
              <div key={label} className="premium-card reveal p-6 text-center">
                <i className={`fa-solid ${icon} text-3xl text-school-gold`} aria-hidden="true" />
                <div className="mt-4 text-4xl font-extrabold text-school-blue"><AnimatedCounter value={value} suffix={suffix} /></div>
                <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="academics" className="py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-book-open" /> {t.nav[2][0]}</span>
          <h2 className="section-title">{t.academicsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.academics.map(([title, icon, description]) => (
              <article key={title} className="premium-card reveal p-7">
                <i className={`fa-solid ${icon} text-4xl text-school-blue`} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-school-navy">{title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-bold text-school-blue">{t.learn} <i className="fa-solid fa-arrow-right" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-white py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-building-columns" /> {t.nav[4][0]}</span>
          <h2 className="section-title">{t.facilitiesTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.facilities.map(([title, icon, description]) => (
              <div key={title} className="premium-card reveal p-6">
                <i className={`fa-solid ${icon} text-3xl text-school-gold`} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-school-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <span className="section-kicker"><i className="fa-solid fa-file-signature" /> {t.nav[3][0]}</span>
            <h2 className="section-title">{t.admissionsTitle}</h2>
            <p className="section-copy">{t.admissionsText}</p>
            <a href="#contact" className="mt-8 inline-flex rounded-lg bg-school-blue px-7 py-4 font-bold text-white shadow-lg hover:bg-school-navy">{t.apply}</a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {t.steps.map((item, index) => (
              <div key={item} className="premium-card reveal p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-school-gold font-bold text-school-navy">{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-school-navy">{item}</h3>
              </div>
            ))}
            <div className="premium-card reveal p-6 md:col-span-2">
              <h3 className="text-xl font-bold text-school-navy">{t.eligibilityTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t.eligibilityText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-images" /> {t.nav[5][0]}</span>
          <h2 className="section-title">{t.galleryTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <button key={src} onClick={() => setLightbox(src)} className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus:ring-4 focus:ring-school-gold/50" aria-label={`Open gallery image ${index + 1}`}>
                <Image src={src} alt={`HPS Hireulligeri gallery ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 bg-school-navy/0 transition group-hover:bg-school-navy/35" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-calendar-days" /> {t.nav[6][0]}</span>
          <h2 className="section-title">{t.newsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.events.map(([date, title, description]) => (
              <article key={title} className="premium-card reveal overflow-hidden">
                <div className="bg-school-blue px-6 py-4 font-bold text-white">{date}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-school-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <button className="mt-5 font-bold text-school-blue">{t.readMore}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-star" /> Testimonials</span>
          <h2 className="section-title">{t.testimonialsTitle}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {t.testimonials.map(([name, role, review, photo]) => (
              <article key={name} className="premium-card reveal p-7">
                <div className="flex items-center gap-4">
                  <Image src={photo} alt={name} width={64} height={64} className="h-16 w-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold text-school-navy">{name}</h3>
                    <p className="text-sm text-slate-500">{role}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-slate-600">{review}</p>
                <div className="mt-4 text-school-gold" aria-label="5 star rating">★★★★★</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <span className="section-kicker"><i className="fa-solid fa-circle-question" /> FAQ</span>
            <h2 className="section-title">{t.faqTitle}</h2>
          </div>
          <div className="space-y-4">
            {t.faqs.map(([question, answer], index) => (
              <div key={question} className="premium-card reveal overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-school-navy" aria-expanded={openFaq === index}>
                  {question}
                  <i className={`fa-solid ${openFaq === index ? "fa-minus" : "fa-plus"}`} aria-hidden="true" />
                </button>
                {openFaq === index && <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-school-navy py-16 text-white">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">{t.newsletterTitle}</h2>
            <p className="mt-3 text-blue-100">{t.newsletterText}</p>
          </div>
          <form onSubmit={handleNewsletter} className="flex flex-col gap-3 sm:flex-row">
            <input name="newsletter" type="email" placeholder={t.placeholders[1]} className="min-h-12 rounded-lg px-4 text-school-ink outline-none focus:ring-4 focus:ring-school-gold/50" aria-label="Newsletter email" />
            <button className="rounded-lg bg-school-gold px-6 py-3 font-bold text-school-navy">{t.subscribe}</button>
            {newsletterStatus && <span className="self-center text-sm text-blue-100">{newsletterStatus}</span>}
          </form>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="section-shell">
          <span className="section-kicker"><i className="fa-solid fa-envelope" /> {t.nav[7][0]}</span>
          <h2 className="section-title">{t.contactTitle}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleContactSubmit} className="premium-card reveal grid gap-4 p-6" noValidate>
              <input required name="name" placeholder={t.placeholders[0]} className="rounded-lg border border-blue-100 px-4 py-3 outline-none focus:ring-4 focus:ring-school-blue/20" />
              <input required name="email" type="email" placeholder={t.placeholders[1]} className="rounded-lg border border-blue-100 px-4 py-3 outline-none focus:ring-4 focus:ring-school-blue/20" />
              <input name="phone" placeholder={t.placeholders[2]} className="rounded-lg border border-blue-100 px-4 py-3 outline-none focus:ring-4 focus:ring-school-blue/20" />
              <textarea required name="message" rows={5} placeholder={t.placeholders[3]} className="rounded-lg border border-blue-100 px-4 py-3 outline-none focus:ring-4 focus:ring-school-blue/20" />
              <button className="rounded-lg bg-school-blue px-6 py-4 font-bold text-white hover:bg-school-navy">{t.send}</button>
              {formStatus && <p className="text-sm font-semibold text-school-blue">{formStatus}</p>}
            </form>
            <div className="grid gap-5">
              <div className="premium-card reveal p-6">
                <p className="font-bold text-school-navy">HPS Hireulligeri</p>
                <p className="mt-3 leading-7 text-slate-600">Hireulligeri, Savadatti</p>
                <p className="mt-2 text-slate-600"><i className="fa-solid fa-phone mr-2 text-school-gold" /> +91 9999999999</p>
                <p className="mt-2 text-slate-600"><i className="fa-solid fa-envelope mr-2 text-school-gold" /> hps@gmail.com</p>
              </div>
              <div className="premium-card reveal overflow-hidden">
                <div className="flex items-center gap-3 bg-school-sky px-5 py-4">
                  <i className="fa-solid fa-map-location-dot text-2xl text-school-blue" />
                  <p className="font-bold text-school-navy">{t.map}</p>
                </div>
                <iframe
                  title="Google map showing Hireulligeri, Savadatti, Karnataka, India"
                  src="https://www.google.com/maps?q=Hireulligeri%2C%20Savadatti%2C%20Karnataka%2C%20India&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex gap-3">
                {["fa-facebook-f", "fa-instagram", "fa-youtube", "fa-x-twitter"].map((icon) => (
                  <a key={icon} href="#" className="grid h-11 w-11 place-items-center rounded-lg bg-school-blue text-white hover:bg-school-gold hover:text-school-navy" aria-label="Social media link">
                    <i className={`fa-brands ${icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-school-navy py-10 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-extrabold">HPS Hireulligeri</h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">{t.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold">{t.quick}</h3>
            <div className="mt-3 grid gap-2 text-sm text-blue-100">
              {t.nav.slice(1, 6).map(([label, id]) => <a key={id} href={`#${id}`} className="hover:text-school-gold">{label}</a>)}
            </div>
          </div>
          <div>
            <h3 className="font-bold">{t.contact}</h3>
            <p className="mt-3 text-sm text-blue-100">Hireulligeri, Savadatti</p>
            <p className="mt-2 text-sm text-blue-100">+91 9999999999</p>
          </div>
        </div>
        <div className="section-shell mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {currentYear} HPS Hireulligeri. {t.copyright}</p>
          <a href="#home" className="inline-flex items-center gap-2 font-bold text-school-gold">{t.backTop} <i className="fa-solid fa-arrow-up" /></a>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Gallery image preview" onClick={() => setLightbox(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-lg bg-white text-school-navy" onClick={() => setLightbox(null)} aria-label="Close preview">
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="relative h-[76vh] w-full max-w-5xl overflow-hidden rounded-lg" onClick={(event) => event.stopPropagation()}>
            <Image src={lightbox} alt="Large gallery preview" fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}
