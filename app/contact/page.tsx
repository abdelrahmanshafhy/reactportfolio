'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

export default function Contact() {
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

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Please Create Account On emailjs.com And Create New Server And New Template
        // Add (YOUR_TEMPLATE_ID), (YOUR_PUBLIC_KEY)
        // See Support PDF file
        emailjs.sendForm('default_service', 'YOUR_TEMPLATE_ID', form.current?.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <main className={styles.main}>
            <title>Portfolio Website Template | Adam Contact</title>
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
                    className={styles.ContactImage}
                    src="/ContactPage/ContactImage.png"
                    alt="ContactImage.png ContactImage"
                    width={4480}
                    height={5870}
                />
                <div className={styles.contactForm}>
                    <div className={styles.text}>
                        <h1>Contact With Me</h1>
                        <p className={styles.description}>
                            <strong>Welcome</strong>
                        </p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name <p>*</p></label>
                        <input type="text" name="from_name" />
                        <label>Email <p>*</p></label>
                        <input type="email" name="email_id" />
                        <label>Message <p>*</p></label>
                        <textarea name="message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/project">Projects</Link>
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
