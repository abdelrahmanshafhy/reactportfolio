'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Helmet } from 'react-helmet';

export default function Home() {
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setShowLinks(false);
      } else {
        setShowLinks(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <main className={styles.main}>
      <title>Portfolio Website Template | Adam</title>
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
          <p className={styles.MyName}>I&apos;m Adam</p>
          <p className={styles.description}>
            <strong>Welcome</strong> to my personal website! Here, you&apos;ll
            discover a window into my world, passions, and experiences. I&apos;m
            excited to share my journey, whether it&apos;s my creative projects,
            travel adventures, or insightful musings. Join me as we explore
            life&apos;s wonders together. Let&apos;s connect and inspire one
            another on this digital journey!
          </p>
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
        </div>
        <Image
          className={styles.HomeImage}
          src="/HomePage/HomeImage.jpg"
          alt="HomeImage.jpg HomeImage"
          width={300}
          height={450}
        />
      </div>

      <div className={styles.SocialMedia}>
        <div className={styles.box}>
          <i className="bi bi-youtube"></i>
          <p>YouTube</p>
          <span>+1.87M</span>
          <p>Subscribers</p>
        </div>
        <div className={styles.box}>
          <i className="bi bi-instagram"></i>
          <p>Instagram</p>
          <span>+864k</span>
          <p>Followers</p>
        </div>
        <div className={styles.box}>
          <i className="bi bi-twitter-x"></i>
          <p>Twitter</p>
          <span>+248k</span>
          <p>Followers</p>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.text}>
          <h1>About Me</h1>
          <p>
            I&apos;m a passionate creator and lifelong learner with a deep love
            for technology and design. My journey has led me to explore various
            facets of web development, graphic design, and digital marketing. I
            thrive on challenges and believe in the power of innovation to
            transform the digital landscape. With a keen eye for detail and a
            commitment to delivering exceptional user experiences, I&apos;m
            dedicated to making the web a more engaging and beautiful place.
            Welcome to my corner of the internet, where I share my latest
            projects and insights.
          </p>
        </div>
        <Image
          className={styles.AboutImage}
          src="/AboutImage.jpg"
          alt="AboutImage.jpg AboutImage"
          width={300}
          height={450}
        />
      </div>

      <div className={styles.skills}>
        <h1>My Skills</h1>
        <div className={styles.boxTop}>
          <div className={styles.box}>
            <h2>
              <i className="bi bi-terminal"></i> Web Development
            </h2>
            <p>
              Elevate your website with expert web development skills, from
              creating responsive, user-friendly interfaces to optimizing
              performance and adhering to industry standards. Whether it&apos;s
              HTML, CSS, JavaScript, or backend technologies, I&apos;ll turn
              your vision into a seamless digital experience, leaving a lasting
              impression.
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              <i className="bi bi-android2"></i> APP Development
            </h2>
            <p>
              To present your app development skills effectively on your
              personal website, focus on your proficiency in programming
              languages, UI design, API integration, and problem-solving.
              Showcase a portfolio of projects to demonstrate your expertise and
              underscore your adaptability in this ever-evolving field.
            </p>
          </div>
        </div>
        <div className={styles.boxBottom}>
          <div className={styles.box}>
            <h2>
              <i className="bi bi-app-indicator"></i> UI UX DESIGN
            </h2>
            <p>
              I specialize in UI/UX design, blending creativity with
              user-centered approaches to create captivating digital
              experiences. Proficient in user research, wireframing, and
              prototyping, I excel at crafting visually stunning and
              user-friendly interfaces. Let&apos;s collaborate to elevate your
              digital projects with my design expertise.
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              <i className="bi bi-bezier"></i> DESIGN
            </h2>
            <p>
              Create an impressive personal website that showcases your design
              expertise. Emphasize your skills in aesthetics, color theory,
              typography, and user experience. Demonstrate your proficiency in
              design software and your ability to seamlessly merge form and
              function. Your website will leave a lasting impression on your
              audience.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.services}>
        <h1>My Services</h1>
        <div className={styles.boxes}>
          <div className={styles.boxServices}>
            <Image
              className={styles.BoxImg}
              src="/HomePage/NEW VIDEO.png"
              alt="NEW VIDEO.png NEW VIDEO"
              width={533}
              height={300}
            />
            <div className={styles.info}>
              <Link href="#" className={styles.title}>
                Edit videos and design video thumbnails.
              </Link>
              <p>35$</p>
            </div>
          </div>
          <div className={styles.boxServices}>
            <Image
              className={styles.BoxImg}
              src="/HomePage/New Portfolio.png"
              alt="New Portfolio.png New Portfolio"
              width={533}
              height={300}
            />
            <div className={styles.info}>
              <Link href="#" className={styles.title}>
                Portfolio Website in HTML, CSS and Javascript thumbnails.
              </Link>
              <p>145$</p>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <Link href="#">Home</Link>
          <Link href="pageAbout.tsx">About</Link>
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
