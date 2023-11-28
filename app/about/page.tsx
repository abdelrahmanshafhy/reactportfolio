'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Helmet } from 'react-helmet';

export default function About() {
    const [showLinks, setShowLinks] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 700) {
                setShowLinks(false);
            } else {
                setShowLinks(true);
            }
        };

        // Attach the resize event listener
        window.addEventListener("resize", handleResize);

        // Initial check for screen size
        handleResize();

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <main className={styles.main}>
            <title>Portfolio Website Template | Adam About</title>
            <Helmet>
                <meta name="description" content="This is a description of my page" />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="My Page Title" />
                <meta property="og:description" content="This is a description of my page" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:title" content="My Page Title" />
                <meta name="twitter:description" content="This is a description of my page" />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <header className={styles.head}>
                <p>Adam</p>
                <div className={styles.links} style={{ transform: showLinks ? "translateX(750px)" : "translateX(0px)" }}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                </div>
                <Link href="/contact" className={styles.contact}>
                    Contact
                </Link>
                <span className={styles.nav} onClick={toggleLinks}>
                    <i className="bi bi-list"></i>
                </span>
            </header>

            <div className={styles.center}>
                <div className={styles.text}>
                    <h1>About Me</h1>
                    <p className={styles.description}>
                        Hello, I&apos;m Adam, and I&apos;m thrilled to introduce myself as your go-to professional designer and programmer. With a deep passion for crafting exceptional digital experiences, I&apos;ve dedicated my career to mastering the art of design and the science of programming.
                        My journey into the world of design and programming began with an insatiable curiosity for technology and a desire to transform digital landscapes. I&apos;ve spent years refining my skills, and today, I take immense pride in being recognized as a pro in both design and programming.
                        In the realm of design, I&apos;m driven by a relentless pursuit of aesthetics and usability. Whether it&apos;s designing a website, creating an application, or any other digital project, my goal is to make it visually stunning and user-friendly. I believe that exceptional design not only captivates users but also enhances their overall experience.
                        When it comes to programming, I bring my design concepts to life with precision and finesse. My proficiency in various programming languages and technologies ensures that the final product not only looks great but functions flawlessly. Clean, efficient, and robust code is my signature, and it&apos;s a testament to my commitment to delivering high-quality results.
                        But my journey doesn&apos;t end with expertise; it&apos;s fueled by a relentless drive to stay ahead of industry trends. I&apos;m a perpetual learner, always seeking out the latest innovations to integrate into my work. This dedication to innovation is at the core of my success.
                        When you choose to collaborate with me, you&apos;re choosing a partner who can turn your digital vision into reality. I bridge the gap between creativity and technical expertise, ensuring that your projects not only meet but exceed your expectations.
                        In me, you&apos;ll find a designer and programmer who&apos;s passionate about making your digital dreams come true. My commitment to excellence, design acumen, and coding proficiency are your assurance that your project is in capable hands.
                        Welcome to a world where innovation knows no bounds, where the future of design and programming is just a click away. Let&apos;s embark on this exciting journey together!
                    </p>
                </div>
                <Image
                    className={styles.HomeImage}
                    src="/AboutPage/AboutPageImage.png"
                    alt="AboutPageImage.png AboutPageImage"
                    width={350}
                    height={525}
                />
            </div>

            <div className={styles.about}>
                <div className={styles.text}>
                    <h1>My Journey as a Pro Designer and Programmer: A 5-Year Evolution</h1>
                    <h2>Introduction</h2>
                    <p>
                        Hello, I&apos;m Adam, a professional designer and programmer. In this article, I&apos;ll take you on a journey through my development in the fields of design and programming over the past five years. My story is one of growth, challenges, and dedication as I transformed from an enthusiastic beginner into a seasoned pro. I hope my experiences and insights will inspire and guide those who are also looking to embark on their own journey of growth and excellence in the world of design and programming.
                        <br /><br />Year 1: The Beginnings
                        Five years ago, my journey as a designer and programmer began with a simple fascination with the creative process. I had always been intrigued by beautiful websites, apps, and graphic design, and I decided to explore this further. In my first year, I started by learning the basics of design principles and coding. I dabbled in Photoshop, Illustrator, and HTML/CSS, absorbing everything like a sponge.
                        I started by taking online courses and watching countless tutorials to understand the fundamentals. One of the first things I learned was the importance of user-centered design. Creating something that not only looked good but also served a purpose was the key to a successful design.
                        <br /><br />Year 2: Building a Foundation
                        In the second year, I knew it was time to build a solid foundation. I enrolled in a formal design and programming course at a local college. This allowed me to dive deeper into the world of design, learning about color theory, typography, and user experience design. Simultaneously, I improved my coding skills, mastering JavaScript, and expanding my knowledge of responsive web design.
                        As I worked on various projects, I started to understand the significance of design thinking. It wasn&apos;t just about creating visually appealing designs, but solving real-world problems and making user experiences seamless. The user&apos;s perspective became my compass, guiding me in the right direction.
                        <br /><br />Year 3: Learning from Experience
                        By the third year, I was taking on freelance projects and gaining real-world experience. It was an exciting yet challenging time. The real-world projects taught me how to work under pressure, meet deadlines, and adapt to clients&apos; specific requirements. I also began to appreciate the importance of collaboration with clients, as their feedback was invaluable in refining my work.
                        To further enhance my skills, I delved into the world of web development frameworks, such as Bootstrap and React, which allowed me to create dynamic and interactive web applications. This marked a significant turning point in my programming journey, enabling me to build more powerful and user-friendly websites and apps.
                        <br /><br />Year 4: Specializing and Mastering
                        In the fourth year, I made a conscious decision to specialize in a particular niche. I had a keen interest in UX (User Experience) design, so I started taking advanced courses in this area. UX design was not only about aesthetics but also about understanding the psychology and behavior of users.
                        I also continued to hone my programming skills, particularly in back-end development. Learning languages like Python, Ruby, and Node.js allowed me to create robust and efficient web applications. The more I specialized, the more I realized the importance of staying updated with the latest industry trends and tools. I attended conferences, joined online forums, and read books to stay ahead of the curve.
                        <br /><br />Year 5: Becoming a Pro
                        As I entered my fifth year, I had evolved into a professional designer and programmer. My portfolio was filled with successful projects, and my clients were consistently satisfied with my work. I had gained the confidence to take on larger and more complex projects.
                        One of the most important lessons I learned during this journey was the power of iteration. Design and code can always be improved. I started to revisit my older projects and make them better, based on the new knowledge and skills I had acquired. Continuous learning and improvement became a habit.
                        Conclusion
                        Looking back at my five-year journey from a novice to a professional designer and programmer, I can say that the key to my success has been relentless dedication, a passion for learning, and a deep commitment to understanding the needs and desires of the end-users.
                        I would like to emphasize that growth in the fields of design and programming is not just about mastering tools and techniques; it&apos;s about evolving as a problem solver, an artist, and a developer. Every project, no matter how big or small, offers an opportunity to learn and grow.
                        As I continue on this exciting path, I&apos;m grateful for the challenges I&apos;ve faced and the knowledge I&apos;ve gained. My journey is far from over, and I&apos;m excited to see where the next five years will take me. I hope this article inspires others to embark on their own journey of growth and excellence in design and programming. Remember, with dedication and a passion for learning, anything is possible.
                    </p>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className={styles.SocialMediaLinks}>
                    <Link href="https://www.youtube.com/">
                        <i className="bi bi-youtube"></i>
                    </Link>
                    <Link href="https://www.instagram.com/">
                        <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="https://www.twitter.com/">
                        <i className="bi bi-twitter-x"></i>
                    </Link>
                    <Link href="https://www.behance.net/">
                        <i className="bi bi-behance"></i>
                    </Link>
                    <Link href="https://www.dribbble.com/">
                        <i className="bi bi-dribbble"></i>
                    </Link>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <p>
                        {" "}
                        Copyright &copy; 2023-{new Date().getFullYear()} All Rights Reserved
                        | Adam
                    </p>
                    <p>
                        Powered By <Link href="https://abdelrahmanshafhy.rf.gd">Abdelrahman Shafhy</Link>
                    </p>
                </div>
            </footer>
        </main>
    );
}
