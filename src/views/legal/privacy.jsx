// !! Do not remove this first commented line (project rule #48).
// src/views/legal/privacy.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

// import TitleCover from '../../components/heading/title-cover/TitleCover';
import FadeUpTrigger from '../../animation/FadeUpTrigger';
import DsnGrid from '../../components/DsnGrid';
import Footer from '../../components/footer/Footer';
import './style.scss'; // <— добавили

const Privacy = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>DEXSA — Privacy Policy</title>
        <meta name="description" content="DexStudioApp Inc Privacy Policy for IPU Telegram Mini App." />
      </Helmet>

      <Container className="section pt-after-header pt-after-body">{/* <— добавили класс */}
        {/* <TitleCover>IPU</TitleCover> */}
        <FadeUpTrigger stagger={0.25}>
          {(ref) => (
            <DsnGrid col={1} rowGap={24}>
              <h2 className="title-section border-line-left" ref={ref}>Privacy Policy</h2>
              <p className="desc" ref={ref}>
                This Privacy Policy explains how DexStudioApp Inc collects, uses, and protects your data when you use the IPU Telegram Mini App.
              </p>

              <p ref={ref} className="mt-10">
                <strong>Effective Date:</strong> August 14, 2025<br />
                <strong>Last Updated:</strong> August 14, 2025
              </p>
              <p ref={ref}>
                <strong>Effective entity:</strong> DexStudioApp Inc<br />
                <strong>Registered Address:</strong> 8 The Green, Dover, DE 19901, Delaware, USA<br />
                <strong>Contact email:</strong> <a href="mailto:info@dexsa.site">info@dexsa.site</a>
              </p>

              <p ref={ref}>
                DexStudioApp Inc ("DexStudioApp", "we", "us", or "our") values your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our <strong>IPU</strong> application, available as a Telegram Mini App.
              </p>

              <h4 className="border-line-left" ref={ref}>1. What We Collect</h4>
              <ul ref={ref} className="mt-10">
                <li>Telegram user ID, username, and profile picture.</li>
                <li>Actions within the app (promises, challenges, referrals, etc.).</li>
                <li>Device data for diagnostics (OS, browser).</li>
                <li>Referral and gamification activity.</li>
                <li>Operational data stored in our database (Supabase/PostgreSQL) for app functionality.</li>
              </ul>

              <h4 className="border-line-left" ref={ref}>2. Why We Collect It</h4>
              <ul ref={ref} className="mt-10">
                <li>Enable core features (e.g., progress tracking, social interactions).</li>
                <li>Improve user experience and app performance.</li>
                <li>Detect abuse and ensure fair use.</li>
                <li>Provide customer support.</li>
              </ul>

              <h4 className="border-line-left" ref={ref}>3. Legal Basis &amp; Consent</h4>
              <p ref={ref}>
                By using our app, you consent to the collection and processing of your data in accordance with this Privacy Policy. If you do not agree, please stop using the app and request data deletion.
              </p>

              <h4 className="border-line-left" ref={ref}>4. Data Sharing</h4>
              <p ref={ref}>
                We do not share your data with anyone, except trusted service providers (e.g., Supabase for hosting and database, analytics tools) strictly to operate app features. If required by law, we may disclose your data to authorities.
              </p>

              <h4 className="border-line-left" ref={ref}>5. Data Storage &amp; Retention</h4>
              <ul ref={ref} className="mt-10">
                <li>Data is stored securely using encryption and access controls.</li>
                <li>Retention period: <strong>3 months after your last activity</strong>. After this period, data is permanently deleted.</li>
              </ul>

              <h4 className="border-line-left" ref={ref}>6. International Data Transfers</h4>
              <p ref={ref}>
                Our services may transfer and store your data outside your country, including in the United States, where our hosting and service providers operate. We take reasonable measures to ensure data protection in compliance with applicable laws.
              </p>

              <h4 className="border-line-left" ref={ref}>7. Cookies &amp; Local Storage</h4>
              <p ref={ref}>
                We use <strong>local storage</strong> within your browser to save session information and improve performance. We do not use third-party tracking cookies.
              </p>

              <h4 className="border-line-left" ref={ref}>8. Your Rights</h4>
              <ul ref={ref} className="mt-10">
                <li>Request a copy of your data.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw consent at any time by contacting <a href="mailto:info@dexsa.site">info@dexsa.site</a>.</li>
              </ul>

              <h4 className="border-line-left" ref={ref}>9. Changes to this Policy</h4>
              <p ref={ref}>
                We may update this Privacy Policy from time to time. Changes will be posted in the app and on our website. Continued use of the app after changes constitutes acceptance of the updated policy.
              </p>

              <p ref={ref} className="mt-10">
                <strong>Contact:</strong> <a href="mailto:info@dexsa.site">info@dexsa.site</a>
              </p>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default Privacy;
