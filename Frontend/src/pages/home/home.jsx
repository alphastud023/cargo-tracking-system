import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header.jsx";
import TrackingPanel from "../../components/trackingpanels/TrackingPanel.jsx";

import "./home.css";

export default function Home() {
  return (
    <div id="home">
  
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <motion.div
            className="heroLeft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="heroTags">
              <span className="tag">AIR CARGO</span>
              <span className="sep">|</span>
              <span className="tag">SEA CARGO</span>
              <span className="sep">|</span>
              <span className="tag">WORLDWIDE</span>
            </div>

            <h1 className="heroTitle">
              WE CONNECT
              <br />
              THE WORLD
            </h1>

            <p className="heroSub">
              Global connections. Reliable solutions.
              <br />
              Delivering excellence, everywhere.
            </p>

            <div className="heroActions">
  <a className="btnPrimary" href="#services">
    OUR SERVICES <span aria-hidden="true">→</span>
  </a>

  <Link className="btnOutline" to="/quote">
  GET A QUOTE <span aria-hidden="true">→</span>
</Link>
</div>


            <div className="quickServices" aria-label="Quick services">
              <div className="qsCard">
                <div className="qsIcon" aria-hidden="true">✈</div>
                <div className="qsTitle">AIR CARGO</div>
                <div className="qsDesc">Fast. Secure. Reliable.</div>
              </div>
              <div className="qsCard">
                <div className="qsIcon" aria-hidden="true">⚓</div>
                <div className="qsTitle">SEA CARGO</div>
                <div className="qsDesc">Cost-effective. Global. Reliable.</div>
              </div>
              <div className="qsCard">
                <div className="qsIcon" aria-hidden="true">🌐</div>
                <div className="qsTitle">WORLDWIDE</div>
                <div className="qsDesc">All over the country. All over the world.</div>
              </div>
            </div>
          </motion.div>

          {/* Right side is visually part of the background image.
              We keep the right side mostly empty to preserve the design look. */}
          <div className="heroRight" aria-hidden="true" />
        </div>
      </section>

      {/* MAIN CONTENT PANELS */}
      <section className="sectionPad">
        <div className="container panelsGrid">
          {/* WE TRANSPORT panel (left big) */}
          <motion.div
            className="transportPanel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="panelTop">
              <div className="panelHeading">
                <div className="panelKicker">WE TRANSPORT</div>
                <div className="panelBig">BOTH LIGHT &amp; HEAVY WEIGHT</div>
              </div>
              <div className="panelIcon" aria-hidden="true">⬚</div>
            </div>

            <div className="panelBody">
              <div className="panelBodyText">
                From small packages to large-scale shipments —<br />
                we handle it all with care and precision.
              </div>
            </div>
          </motion.div>

          {/* OUR PREMIUM SERVICES panel (right) */}
          <motion.div
            className="premiumPanel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div className="premiumHeader">
              <div className="premiumTitle">OUR PREMIUM SERVICES</div>
            </div>

            <div className="premiumGrid">
              <div className="premiumItem">
                <div className="piIcon">📦</div>
                <div className="piText">Freight Forwarding</div>
              </div>
              <div className="premiumItem">
                <div className="piIcon">🧾</div>
                <div className="piText">Customs Clearance</div>
              </div>
              <div className="premiumItem">
                <div className="piIcon">🏭</div>
                <div className="piText">Warehousing &amp; Distribution</div>
              </div>
              <div className="premiumItem">
                <div className="piIcon">🏗️</div>
                <div className="piText">Project Cargo Specialists</div>
              </div>
              <div className="premiumItem">
                <div className="piIcon">🚪</div>
                <div className="piText">Door-to-Door Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE STRIP + CONTACT CARD */}
      <section className="sectionPad">
        <div className="container bottomGrid">
          <div className="featuresRow">
            <div className="featureBox">
              <div className="featureIcon" aria-hidden="true">🌍</div>
              <div className="featureTitle">GLOBAL NETWORK</div>
              <div className="featureDesc">Strong partnerships across the world.</div>
            </div>

            <div className="featureBox">
              <div className="featureIcon" aria-hidden="true">⏱</div>
              <div className="featureTitle">ON-TIME DELIVERY</div>
              <div className="featureDesc">We deliver on time. Your goal matters.</div>
            </div>

            <div className="featureBox">
              <div className="featureIcon" aria-hidden="true">👥</div>
              <div className="featureTitle">EXPERT TEAM</div>
              <div className="featureDesc">Experienced professionals dedicated to your success.</div>
            </div>

            <div className="featureBox">
              <div className="featureIcon" aria-hidden="true">✅</div>
              <div className="featureTitle">CUSTOMER FOCUSED</div>
              <div className="featureDesc">Personalized service. Proven results.</div>
            </div>
          </div>

          <motion.aside
            id="contact-us"
            className="contactCard"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contactHeader">CONTACT US</div>

            <div className="contactLine">
              <div className="contactBullet" aria-hidden="true">📍</div>
              <div>
                123 Dockside Road London,
                <br />
                E16 2B4 United Kingdom
              </div>
            </div>

            <div className="contactLine">
              <div className="contactBullet" aria-hidden="true">📞</div>
              <div>+44 20 1534 5178</div>
            </div>

            <div className="contactLine">
              <div className="contactBullet" aria-hidden="true">✉️</div>
              <div>kevin.ancout@londonfreight.co.uk</div>
            </div>

            {/* Tracking inside contact card */}
            <TrackingPanel />
          </motion.aside>
        </div>
      </section>

      {/* SERVICES anchor section (kept simple) */}
      <section id="services" className="sectionPad">
        <div className="container">
          <div className="kicker">
            <span className="kickerDot" /> Services
          </div>
          <div className="h2">Courier, Cargo &amp; Worldwide Logistics</div>
          <p className="p">
            We support air cargo, sea cargo, freight forwarding, and door-to-door delivery
            with dependable tracking and secure handling.
          </p>
        </div>
      </section>

      {/* SOLUTIONS anchor section */}
      <section id="solutions" className="sectionPad">
        <div className="container">
          <div className="kicker">
            <span className="kickerDot" /> Solutions
          </div>
          <div className="h2">Built for shipping speed and reliability</div>
          <p className="p">
            From documents and parcels to heavy cargo logistics, our workflows are designed
            to minimize delays and maximize delivery confidence.
          </p>
        </div>
      </section>

      {/* ABOUT US (use your exact text) */}
      <section id="about-us" className="sectionPad">
        <div className="container">
          <div className="kicker">
            <span className="kickerDot" /> About Us
          </div>

          <div className="h2">About Us</div>

          <p className="p">
            Since 1991, our company has built a strong reputation as one of the world’s leading courier and cargo service providers, delivering reliable logistics solutions across Europe, Asia, and the Americas. With over three decades of industry experience, we are committed to providing fast, secure, and efficient delivery services tailored to meet the growing demands of businesses and individuals worldwide.
          </p>

          <p className="p">
            Our global network and professional logistics team enable us to handle shipments of all sizes with precision and care. From express courier deliveries to large-scale cargo transportation, we ensure every package reaches its destination safely and on time. We pride ourselves on combining advanced logistics technology with exceptional customer service to create seamless shipping experiences for our clients.
          </p>

          <p className="p">
            At the heart of our operations is a dedication to trust, reliability, and excellence. Over the years, we have continued to expand our reach and strengthen our partnerships, making us a preferred choice for international shipping and freight solutions across Europe, Asia, and the American continent.
          </p>

          <p className="p">
            Whether you are shipping locally or internationally, we remain committed to delivering world-class logistics services that connect businesses, communities, and opportunities around the globe.
          </p>
        </div>
      </section>
    </div>
  );
}
