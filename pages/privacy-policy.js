import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PrivacyPolicy() {
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
        <title>Privacy Policy - ProRummix</title>
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
            <h1 className={styles.pageTitle}>Privacy Policy</h1>
            <p className={styles.pageSubtitle}>Contact ProRummix Team for more help</p>
            <h2>Overview</h2>
            <p>
              Your privacy is important to us. ProRummix is committed to protecting your personal
              information and ensuring a safe gaming experience. We do not share your data with
              third parties except as required by law or to provide our services.
            </p>
            <h2>Data Collection</h2>
            <p>
              We collect only the information necessary to provide our services and improve your
              experience. This includes your name, contact details, and payment information.
            </p>
            <h2>Data Security</h2>
            <p>
              All data is encrypted and stored securely. We use industry-standard security measures
              to protect your information.
            </p>
            <h2>Contact</h2>
            <p>
              For more details, please contact our support team at{" "}
              <a href="mailto:support@prorummix.com">support@prorummix.com</a>.
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
