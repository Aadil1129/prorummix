import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [animateActive, setAnimateActive] = useState(false);
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
        <title>ProRummix - Play Rummy Online & Win Cash!</title>
        <meta
          name="description"
          content="ProRummix: The best online rummy experience. Play, win, and enjoy daily bonuses!"
        />
        <link rel="icon" href="/logo.png" />
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
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBlobs}>
            <span className={styles.blob1}></span>
            <span className={styles.blob2}></span>
            <span className={styles.blob3}></span>
            <span className={styles.blob4}></span>
            <span className={styles.blob5}></span>
            <span className={styles.blob6}></span>
            <span className={styles.blob7}></span>
          </div>
          <img src="/logo.png" alt="ProRummix Logo" className={styles.heroLogo} />
          <h1 className={styles.heroTitle}>Play Rummy Online & Win Real Cash!</h1>
          <p className={styles.heroSubtitle}>
            Join millions of players. Enjoy daily rewards, secure deposits, and instant withdrawals.
          </p>
          <a className={styles.heroCta} href="/download">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a40"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "0.6em", verticalAlign: "middle" }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download APK
          </a>
        </section>
        {/* Timeline/Steps Section */}
        <section className={styles.timelineSection}>
          {/* <div className={styles.timelineTitle}>How to Get Started with Prorummix</div> */}
          <div className={styles.timelineSteps}>
            {/* Only keep Step 1: Realtime Gaming (RTG) */}
            <div className={styles.timelineStepRow}>
              <div className={styles.timelineStepContent}>
                <div className={styles.timelineStepText}>
                  <h3>Realtime Gaming (RTG)</h3>
                  <p>
                    Play Rummy tournaments, cash games, and win real money. Sharpen your Rummy &
                    Prorummix skills and compete for the best rewards!
                  </p>
                  <ul>
                    <li>Practice for free</li>
                    <li>Win Real Money</li>
                  </ul>
                </div>
                <img
                  src="/hero-game.jpg"
                  alt="Realtime Gaming"
                  className={styles.timelineStepImg}
                />
              </div>
            </div>
          </div>
        </section>
        {/* How to Login */}
        <section className={styles.sectionCard}>
          <div className={styles.sectionImgTextReverse}>
            <img src="/create-account.jpg" alt="How to Login" className={styles.sectionImg} />
            <div>
              <h2>How to Login</h2>
              <ol>
                <li>Open the app and tap 'Login'.</li>
                <li>Enter your mobile number and password.</li>
                <li>Tap 'Sign In' to access your account.</li>
              </ol>
            </div>
          </div>
        </section>
        {/* Daily Reward */}
        <section className={styles.sectionCard}>
          <div className={styles.sectionImgText}>
            <img src="/daily-rewards.jpg" alt="Daily Reward" className={styles.sectionImg} />
            <div>
              <h2>Daily Rewards</h2>
              <p>
                Log in every day to claim your daily bonus and boost your play! The more you play,
                the bigger your rewards.
              </p>
            </div>
          </div>
        </section>
        {/* Withdraw & Deposit */}
        <section className={styles.sectionCard}>
          <div className={styles.sectionImgTextReverse}>
            <img src="/withdraw.jpg" alt="Withdraw & Deposit" className={styles.sectionImg} />
            <div>
              <h2>Withdraw & Deposit</h2>
              <p>
                Enjoy instant deposits and fast withdrawals. Your winnings are always safe and
                secure with ProRummix.
              </p>
            </div>
          </div>
        </section>
        {/* Rules for Winning */}
        <section className={styles.sectionCard}>
          <div className={styles.sectionImgText}>
            <img src="/rules.jpg" alt="Rules for Winning" className={styles.sectionImg} />
            <div>
              <h2>Rules for Winning</h2>
              <p>
                You need at least 1 pure sequence and 1 valid sequence to win. Learn the rules and
                become a rummy champion!
              </p>
            </div>
          </div>
        </section>
        {/* Game Preview */}
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
