import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Security() {
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
        <title>Security - ProRummix</title>
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
              Download APK
            </a>
          </aside>
          <section className={styles.sectionCard}>
            <h1 className={styles.pageTitle}>Security</h1>
            <p className={styles.pageSubtitle}>Contact ProRummix Team for more help</p>
            <h2>Security</h2>
            <p>
              ProRummix uses industry-standard security measures to protect your data and
              transactions. Play with confidence knowing your information is safe with us.
            </p>
            <h2>Fair Play</h2>
            <p>
              We use advanced algorithms and monitoring to ensure fair play and prevent fraud or
              cheating.
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
