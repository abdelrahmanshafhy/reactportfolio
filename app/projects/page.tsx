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
            <title>Portfolio Website Template | Adam Projects</title>
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
                    className={styles.ProjectsImage}
                    src="/ProjectsImage.jpg"
                    alt="ProjectsImage.jpg ProjectsImage"
                    width={14999}
                    height={2149}
                />
                <div className={styles.text}>
                    <h1>My Projects</h1>
                    <p className={styles.description}>
                        <strong>Welcome</strong> to my Projects page, a digital canvas reflecting my passion for innovation and design. Explore a portfolio that encapsulates years of dedication, featuring captivating websites and transformative applications. Each project is a testament to my commitment to pushing creative boundaries and delivering user-centric solutions. Join me on this visual journey, where every pixel tells a story of innovation and excellence.
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                <Link href="/blog/ProgrammingArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage1.jpg"
                        alt="ProjectsImage1.jpg ProjectsImage1"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Calendar Application</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>1.7k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>27.9k</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/blog/GraphicDesignArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage2.jpg"
                        alt="ProjectsImage2.jpg ProjectsImage2"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Coffee Application</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>14.6k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>17.2k</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/blog/UIUXDesignArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage3.jpg"
                        alt="ProjectsImage3.jpg ProjectsImage3"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Create Account Page</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>12.8k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>14.3k</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/blog/UIUXDesignArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage4.jpg"
                        alt="ProjectsImage4.jpg ProjectsImage4"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Dashboard Page</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>21.8k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>34.3k</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/blog/UIUXDesignArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage5.jpg"
                        alt="ProjectsImage5.jpg ProjectsImage5"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Social Media Post</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>13.2k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>19.9k</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/blog/UIUXDesignArticle" className={styles.ProjectBox}>
                    <Image
                        className={styles.ProjectBoxImage}
                        src="/ProjectsImage6.jpg"
                        alt="ProjectsImage6.jpg ProjectsImage6"
                        width={3500}
                        height={2500} />
                    <p>Illustration UI / UX Design Portfolio Website In Dark</p>
                    <div className={styles.info}>
                        <div className={styles.MyInfo}>
                            <Image
                                className={styles.ProfileImage}
                                src="/ProfileImage.jpg"
                                alt="ProfileImage.jpg"
                                width={180}
                                height={180}
                            />
                            <p>Adam</p>
                        </div>
                        <div className={styles.ProjectInfo}>
                            <div>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>27.5k</span>
                            </div>
                            <div>
                                <i className="bi bi-eye"></i>
                                <span>38.4k</span>
                            </div>
                        </div>
                    </div>
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
