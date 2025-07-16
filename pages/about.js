import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const [animateActive, setAnimateActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setAnimateActive(true);
  }, [router.pathname]);
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/download", label: "Download" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact us" },
  ];
  return (
    <div className={styles.rootBg}>
      <Head>
        <title>About Us - ProRummix</title>
      </Head>
      <header className={styles.headerFixed}>
        <div className={styles.headerContent}>
          <img src="/logo.png" alt="ProRummix Logo" className={styles.logo} />
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <nav className={menuOpen ? styles.menuOpen : styles.menu}>
              {menuItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      isActive
                        ? `${styles.activeMenu} activeMenu${
                            animateActive ? " activeMenu-animate" : ""
                          }`
                        : ""
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <button
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
          </button>
        </div>
      </header>
      <main className={styles.mainBg}>
        <div className={styles.pageTwoCol}>
          <aside className={styles.sidebarLeft}>
            <img src="/logo.png" alt="ProRummix Logo" className={styles.sidebarLogo} />
            <a href="/download" className={styles.downloadBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "0.5em", verticalAlign: "middle" }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download APK
            </a>
          </aside>
          <section className={styles.sectionCard}>
            <h1 className={styles.pageTitle}>About Us</h1>
            <p className={styles.pageSubtitle}>Contact ProRummix Team for more help</p>
            <h2>About Us</h2>
            <p>
              ProRummix brings years of hands-on experience in the Rummy platform, offering a secure
              and exciting gaming experience for Rummy enthusiasts.
            </p>
            <h2>India's Safest & Most Enjoyable Rummy Platform</h2>
            <p>
              We offer a seamless blend of technology and design, ensuring a fair, fun, and
              rewarding platform for all players. Join us for the most exciting rummy tournaments,
              daily bonuses, and a world-class gaming environment!
            </p>
            <h2>Contact</h2>
            <p>
              Email: support@prorummix.com
              <br />
              Phone: +91-12345-67890
              <br />
              Address: Building PLOT NO 212, 2ND FLOOR, BLOCK B, PKT 12, Sector 8, New Delhi -
              110085
            </p>
          </section>
        </div>
      </main>
      <footer className={styles.footerModern}>
        <div>© 2025 ProRummix. All rights reserved.</div>
        <div>
          Follow us: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Reddit</a>
        </div>
      </footer>
    </div>
  );
}
