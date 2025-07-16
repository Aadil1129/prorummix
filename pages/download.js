import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Download() {
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
        <title>Download - ProRummix</title>
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
        {/* Download Button Section */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2.5rem",
            marginTop: "2.5rem",
          }}
        >
          <a
            href="/prorummix.apk"
            download
            className={styles.downloadBtn}
            style={{
              fontSize: "1.35rem",
              padding: "1.1rem 3.2rem",
              borderRadius: "2.5rem",
              background: "linear-gradient(90deg, #00c853 60%, #43ea7a 100%)",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 4px 24px #00c85355",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              textDecoration: "none",
              margin: "0 auto",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "0.7em", verticalAlign: "middle" }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download APK
          </a>
        </section>
        {/* Stepper Section */}
        <section className={styles.downloadStepperSection}>
          <h1 className={styles.downloadStepperTitle}>How to Install Prorummix</h1>
          <div className={styles.downloadStepperRow}>
            <div className={styles.downloadStep}>
              <div className={styles.downloadStepNum}>1</div>
              <div className={styles.downloadStepText}>
                Download Prorummix on your Android Device
              </div>
            </div>
            <div className={styles.downloadStep}>
              <div className={styles.downloadStepNum}>2</div>
              <div className={styles.downloadStepText}>
                Open the file from the notification area or your download folder, select install
              </div>
            </div>
            <div className={styles.downloadStep}>
              <div className={styles.downloadStepNum}>3</div>
              <div className={styles.downloadStepText}>
                You may have to allow Unknown Sources at Settings &gt; Security
              </div>
            </div>
          </div>
        </section>
        {/* APK Install Instructions */}
        <section className={styles.downloadInstallSection}>
          <h2 className={styles.downloadInstallTitle}>How to install unknown sources APK</h2>
          <div className={styles.downloadInstallRow}>
            <img
              src="/security-play-protect.jpg"
              alt="Unknown Sources Settings"
              className={styles.downloadInstallImg}
            />
            <div className={styles.downloadInstallText}>
              <h3>Install APK outside Play Store on Android 8 or higher</h3>
              <p>
                Enabling 'Install unknown apps' is vital while allowing unknown source APK
                installation. When you try to install APK on your phone from Android 8 or higher,
                you'll need to give your browser permission to install apps.
              </p>
            </div>
          </div>
          <div className={styles.downloadInstallRow}>
            <div className={styles.downloadInstallText}>
              <h3>You're still protected</h3>
              <p>
                Even after installing APKs from unknown sources, Google Play Protect will continue
                scanning new installs for safety, blocking viruses, malware, and blocking forbidden
                apps. Prorummix is safe to play.
              </p>
            </div>
            <img
              src="/security-play-protect1.png"
              alt="Play Protect"
              className={styles.downloadInstallImg}
            />
          </div>
        </section>
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
