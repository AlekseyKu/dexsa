// !! Do not remove this first commented line (project rule #48).
// src/views/legal/terms.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

// import TitleCover from '../../components/heading/title-cover/TitleCover';
import FadeUpTrigger from '../../animation/FadeUpTrigger';
import DsnGrid from '../../components/DsnGrid';
import Footer from '../../components/footer/Footer';
import './style.scss';

const Terms = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>DEXSA — Terms of Service</title>
        <meta name="description" content="Terms of Service for IPU Telegram Mini App by DexStudioApp Inc." />
      </Helmet>

      <Container className="section pt-after-header pt-after-body">
        <FadeUpTrigger stagger={0.25}>
          {(ref) => (
            <DsnGrid col={1} rowGap={24}>
              <h2 className="title-section border-line-left" ref={ref}>Terms of Service</h2>
              <p className="desc" ref={ref}>
                By using our services (hereinafter — "Service"), including IPU (Telegram Mini App), you accept these Terms.
              </p>

              <p ref={ref} className="mt-10">
                <strong>Effective Date:</strong> August 16, 2025<br />
                <strong>Legal Entity:</strong> DexStudioApp Inc, 8 The Green, Dover, DE 19901, USA<br />
                <strong>Contact:</strong> <a href="mailto:info@dexsa.site">info@dexsa.site</a>
              </p>

              <h4 className="border-line-left" ref={ref}>1. Access and Account</h4>
              <p ref={ref}>
                You must comply with Telegram Terms and applicable law. You are responsible for all actions through your Telegram account when using the Service.
              </p>

              <h4 className="border-line-left" ref={ref}>2. Fair Use and Prohibitions</h4>
              <p ref={ref}>
                Prohibited: (a) spam, scams, harassment, and abuse; (b) illegal, harmful, or misleading content; (c) hacking, attempts to disrupt Service operation; (d) scraping and reverse engineering without written permission; (e) impersonation of others; (f) violation of IP rights and privacy rights.
              </p>

              <h4 className="border-line-left" ref={ref}>3. Content and License</h4>
              <p ref={ref}>
                Rights to your content remain with you. You grant DexStudioApp a non-exclusive, worldwide, royalty-free license to host, display, and process content within the Service to provide its functions. You confirm having rights to such content.
              </p>

              <h4 className="border-line-left" ref={ref}>4. Rewards and Virtual Items (including Telegram Stars)</h4>
              <p ref={ref}>
                Points, badges, and Telegram Stars are virtual items without monetary value unless expressly stated by us. Availability, balances, and rules may change or be revoked (including for abuse). For Stars operations, Telegram's rules and refund policy apply.
              </p>

              <h4 className="border-line-left" ref={ref}>5. Privacy</h4>
              <p ref={ref}>
                Data processing is described in the <a href="/projects/ipu/privacy-policy">Privacy Policy</a>. By using the Service, you confirm familiarity with this Policy.
              </p>

              <h4 className="border-line-left" ref={ref}>6. Suspension and Termination</h4>
              <p ref={ref}>
                We may suspend or terminate access for Terms or law violations. You may stop using at any time and request data deletion according to the Privacy Policy.
              </p>

              <h4 className="border-line-left" ref={ref}>7. Disclaimer; Limitation of Liability (brief)</h4>
              <p ref={ref}>
                Service is provided "as is" and "as available." To the maximum extent permitted by law, DexStudioApp is not liable for indirect, special, incidental damages, or data/profit loss. Nothing here limits liability where prohibited by law. Your mandatory consumer rights are preserved.
              </p>

              <h4 className="border-line-left" ref={ref}>8. Changes</h4>
              <p ref={ref}>
                We may update the Service and these Terms. We will notify of significant changes in the app. Continued use after changes take effect means acceptance of updates.
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

export default Terms;
