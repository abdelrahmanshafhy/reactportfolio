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
            <title>Portfolio Website Template | Adam Blog</title>
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
                <Image
                    className={styles.BlogImage}
                    src="/BlogImage.jpg"
                    alt="BlogImage.jpg BlogImage"
                    width={14999}
                    height={2149}
                />
                <div className={styles.text}>
                    <h1>Adam&apos;s World</h1>
                    <p className={styles.description}>
                        <strong>Welcome</strong> to my blog, where I share insights and experiences as a seasoned designer and programmer. With a passion for creating stunning visuals and functional code, I&apos;m excited to take you on a journey through the world of digital design and development.
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                <Link href="/blog/ProgrammingArticle" className={styles.ArticleBox}>
                    <Image
                        className={styles.ArticleBoxImage}
                        src="/ProgrammingImage.jpg"
                        alt="ProgrammingImage.jpg ProgrammingImage"
                        width={300}
                        height={200} />
                    <p>Breaking Down Barriers: Empowering Anyone to Learn Programming with AI</p>
                </Link>
                <Link href="/blog/GraphicDesignArticle" className={styles.ArticleBox}>
                    <Image
                        className={styles.ArticleBoxImage}
                        src="/DesignImage.jpg"
                        alt="DesignImage.jpg DesignImage"
                        width={300}
                        height={200} />
                    <p>Mastering the Art of Graphic Design: Tips and Techniques</p>
                </Link>
                <Link href="/blog/UIUXDesignArticle" className={styles.ArticleBox}>
                    <Image
                        className={styles.ArticleBoxImage}
                        src="/UIUXImage.jpg"
                        alt="UIUXImage.jpg UIUXImage"
                        width={300}
                        height={200} />
                    <p>UI/UX Design: A Comprehensive Guide to Creating Engaging User Experiences</p>
                </Link>
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
