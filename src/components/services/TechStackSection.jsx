import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import TitleSection from "../../components/heading/TitleSection";

const techStack = [
  {
    category: "BACKEND",
    items: ["Node.js", "Python", "Express", "FastAPI", "NestJS", "PostgreSQL", "MongoDB", "Redis", "REST", "GraphQL", "gRPC", "WebSocket", "Microservices", "Kafka"],
  },
  {
    category: "FRONTEND",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "MUI", "Ant Design", "SSR/SSG", "SPA", "PWA"],
  },
  {
    category: "CI/CD & DEVOPS",
    items: ["GitHub Actions", "GitLab CI", "Bitbucket Pipelines", "Docker", "Kubernetes", "Docker Compose", "Prometheus", "Grafana", "Sentry", "ELK Stack"],
  },
  {
    category: "PROCESS AUTOMATION",
    items: ["Apache Airflow", "n8n", "Camunda", "Zapier", "Integromat / Make", "Webhooks", "Triggers", "Cron jobs"],
  },
  {
    category: "API & INTEGRATIONS",
    items: ["Slack", "Telegram", "Stripe", "CRM/ERP systems", "OAuth 2.0", "JWT", "SSO", "Custom APIs"],
  },
  {
    category: "INFRASTRUCTURE",
    items: ["AWS", "Google Cloud", "DigitalOcean", "Hetzner", "Terraform", "Ansible", "Cloudflare", "Varnish"],
  },
  {
    category: "SECURITY",
    items: ["HTTPS", "CORS", "OAuth 2.0", "RBAC", "API Protection", "Rate Limiting", "Audit Logging", "Token Encryption"],
  },
];

const splitArray = (array, parts) => {
  const result = Array.from({ length: parts }, () => []);
  array.forEach((item, index) => {
    result[index % parts].push(item);
  });
  return result;
};

const TechStackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [visible, setVisible] = useState(true);

  const currentCategory = techStack[activeIndex];
  const columns = splitArray(currentCategory.items, 3);

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setVisible(false); // start fade out
    setPendingIndex(index); // save next category
  };

  useEffect(() => {
    if (!visible && pendingIndex !== null) {
      const timeout = setTimeout(() => {
        setActiveIndex(pendingIndex);
        setPendingIndex(null);
        setVisible(true); // fade in new content
      }, 300); // matches CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [visible, pendingIndex]);

  return (
    <Container className="my-5">
      {/* <TitleSection description="We use battle-tested technologies across all layers of development.">
        <span className="h2 fw-bold">Technology Stack</span>
      </TitleSection> */}

      <Row className="mt-4">
        <Col md={4}>
          <div className="d-flex flex-column gap-2">
            {techStack.map((stack, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`btn text-start fw-semibold mb-1 px-4 py-3 ${
                  activeIndex === index ? "btn-danger text-white" : "btn-dark text-light"
                }`}
              >
                {stack.category}
              </button>
            ))}
          </div>
        </Col>

        <Col md={8}>
          <div className={`fade-transition ${visible ? "fade-in" : "fade-out"}`}>
            <h4 className="fw-bold text-white mb-3">{currentCategory.category}</h4>
            <Row>
              {columns.map((col, colIdx) => (
                <Col key={colIdx}>
                  <ul className="list-unstyled">
                    {col.map((item, i) => (
                      <li key={i} className="mb-2 text-light">{item}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <style>{`
        .fade-transition {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .fade-transition.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-transition.fade-out {
          opacity: 0;
          transform: translateY(12px);
        }
      `}</style>
    </Container>
  );
};

export default TechStackSection;
