import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Terms() {
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
        <title>Terms & Conditions - ProRummix</title>
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
            <h1 className={styles.pageTitle}>Terms & Conditions</h1>
            <p className={styles.pageSubtitle}>
              Carefully read our Terms and Rules before using ProRummix.
            </p>
            <h2>Overview</h2>
            <p>
              These terms and conditions govern your use of the ProRummix platform. By accessing or
              using our gaming platform, you agree to comply with these terms. Please read them
              carefully.
            </p>
            <h2>Data Security</h2>
            <p>
              We are committed to protecting your personal and financial information. All data is
              encrypted and handled securely. We do not share your information with third parties
              except as required by law.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              ProRummix is not liable for any losses or damages arising from your use of the
              platform. Play responsibly and ensure you are of legal age to participate in online
              gaming in your jurisdiction.
            </p>
            <h2>Multiple IDs</h2>
            <p>
              Creating multiple accounts is strictly prohibited. Users found violating this rule may
              be suspended or banned.
            </p>
            <h2>Legality</h2>
            <p>
              It is your responsibility to ensure that participating in online rummy is legal in
              your location. ProRummix is not responsible for any legal consequences arising from
              your use of the platform.
            </p>
            <h2>Refund Policy</h2>
            <p>
              All transactions are final. Refunds are only issued in case of technical errors or
              unauthorized transactions. Please contact our support team for assistance.
            </p>
            <h2>Termination</h2>
            <p>
              ProRummix reserves the right to suspend or terminate your account for violations of
              these terms or for any suspicious activity.
            </p>
            <h2>User Account Suspension</h2>
            <p>
              Accounts may be suspended for fraudulent activity, abuse, or violation of our terms
              and policies.
            </p>
            <h2>Contact</h2>
            <p>
              For any questions or support, please contact us at{" "}
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
