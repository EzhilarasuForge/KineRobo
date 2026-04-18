import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Eye,
  Globe,
  Layers,
  ShieldCheck
} from 'lucide-react';
import './index.css';
import robotImage1 from '../robot_image_1.png';
import robotImage2 from '../robot_image_2.png';
import forgeLogo from '../Forge_logo.png';

const productSections = [
  {
    id: 'intelligent-cleaning',
    title: 'Intelligent Cleaning System',
    shortDescription:
      'Hospital-grade and pharma-grade disinfection automation using advanced sensors and AI path planning.',
    longDescription:
      'Our Intelligent Cleaning System automates hygiene-critical workflows with industrial reliability. It maps facilities in 3D, plans optimal routes, and continuously reports operating health in real time.',
    features: ['3D mapping and AI path planning', 'Real-time monitoring dashboard', 'Self-charging & autonomous docking'],
    image: robotImage1,
    imageAlt: 'Autonomous floor-cleaning robot operating in a warehouse environment',
    imagePosition: 'left'
  },
  {
    id: 'smart-industrial',
    title: 'Smart Industrial Systems',
    shortDescription:
      'AI vision-based pick and place system designed for seamless integration into existing smart factory lines.',
    longDescription:
      'Our Smart Industrial Systems bring flexible automation into modern production lines through computer vision, robotic motion planning, and connected telemetry across factory IoT layers.',
    features: ['AI vision-based pick and place', 'Autonomous navigation', 'Smart factory integration'],
    image: robotImage2,
    imageAlt: 'Smart industrial automation machinery operating on a production line',
    imagePosition: 'right'
  }
];

const techCards = [
  { icon: <Cpu />, title: 'AI & Machine Learning', desc: 'Sophisticated neural networks for decision making and adaptive behavior.' },
  { icon: <Eye />, title: 'Computer Vision', desc: 'High-precision 3D scene understanding and dynamic object recognition.' },
  { icon: <Layers />, title: 'ROS2 / NVIDIA Isaac', desc: 'Built on industry-leading robotics and simulation frameworks.' },
  { icon: <Globe />, title: 'IoT / MQTT', desc: 'Real-time communication, telemetry, and distributed fleet management.' },
  { icon: <Cloud />, title: 'Cloud Dashboard', desc: 'Centralized analytics, mission monitoring, and remote oversight.' },
  { icon: <ShieldCheck />, title: 'Industrial Security', desc: 'End-to-end encryption for robot-to-cloud communications and safety.' }
];

const Navbar = () => (
  <nav className="glass navbar">
    <div className="brand-wrap">
      <span className="brand-text">
        KINE<span>ROBO</span>
      </span>
    </div>

    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#technology">Technology</a>
    </div>

    <div className="nav-actions">
      <a className="btn btn-primary" href="#demo-request">
        Book a Demo
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="badge">Next-Gen Industrial Intelligence</span>
        <h1>Intelligence for Autonomous Robotics</h1>
        <p>
          Building the next generation of autonomous robotic systems for precision manufacturing and pharmaceutical
          environments.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#demo-request">
            Request Demo <ArrowRight size={20} />
          </a>
          <a className="btn btn-outline" href="#technology">
            Explore Technology
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="hero-media"
      >
        <img src="/hero-image.png" alt="Futuristic Robotics Lab" />
      </motion.div>
    </div>
  </section>
);

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="section-header">
    {badge && <span className="badge">{badge}</span>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const ProductCard = ({ product }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="card"
  >
    <h3>{product.title}</h3>
    <p className="product-summary">{product.shortDescription}</p>
    <ul>
      {product.features.map((feature) => (
        <li key={feature}>
          <CheckCircle2 size={20} color="var(--primary)" /> {feature}
        </li>
      ))}
    </ul>
    <a className="btn btn-outline full-width" href={`#${product.id}`}>
      Learn More
    </a>
  </motion.article>
);

const ProductDetail = ({ product }) => (
  <section id={product.id} className={`product-detail ${product.imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
    <div className="detail-image-wrap">
      <img src={product.image} alt={product.imageAlt} loading="lazy" width="1400" height="900" />
    </div>
    <div className="detail-content">
      <h3>{product.title}</h3>
      <p>{product.longDescription}</p>
      <ul>
        {product.features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 size={20} color="var(--primary)" /> {feature}
          </li>
        ))}
      </ul>
      <div className="detail-actions">
        <a className="btn btn-outline" href="#contact-partnership">
          Partner With Us
        </a>
      </div>
    </div>
  </section>
);

const DemoRequestForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="demo-request" className="contact-section">
      <SectionHeader
        badge="Demo Request"
        title="Book a Demo"
        subtitle="Tell us about your operational goals. Our team will connect with you for a tailored walkthrough."
      />

      <form className="contact-form card" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(event) => setValues({ ...values, name: event.target.value })}
          placeholder="Your full name"
        />
        {errors.name && <p className="field-error">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => setValues({ ...values, email: event.target.value })}
          placeholder="name@company.com"
        />
        {errors.email && <p className="field-error">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          value={values.message}
          onChange={(event) => setValues({ ...values, message: event.target.value })}
          placeholder="Share your use case and deployment goals"
        />
        {errors.message && <p className="field-error">{errors.message}</p>}

        <button className="btn btn-primary" type="submit">
          Submit Request
        </button>

        {submitted && <p className="success-note">Thanks! Your request has been captured.</p>}
      </form>
    </section>
  );
};

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />

      <section id="about" className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-grid"
        >
          <div>
            <SectionHeader badge="Who We Are" title="Redefining the Future of Industrial Automation" />
            <p>
              At KINEROBO, we believe the next era of industrial growth will be driven by intelligent, autonomous
              agents that can navigate complex environments with precision and adaptability.
            </p>
            <p>
              Our platform combines cutting-edge AI, high-performance robotics hardware, and a seamless cloud ecosystem
              to provide turn-key solutions for manufacturing and pharma labs.
            </p>
          </div>
          <div className="about-highlight">
            <ShieldCheck size={180} color="var(--primary)" strokeWidth={0.5} />
            <div className="glass uptime-chip">
              <h3>99.9%</h3>
              <p>Uptime in Pharma labs</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="products">
        <SectionHeader
          title="Ready-to-Deploy Solutions"
          subtitle="Specialized robotics systems tailored for high-precision environments and industrial automation."
        />
        <div className="products-grid">
          {productSections.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {productSections.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}

      <section id="technology" className="technology-section">
        <SectionHeader
          title="The Core Technology"
          subtitle="Empowering robots with human-like perception and superhuman precision through AI and ROS2."
        />
        <div className="technology-grid">
          {techCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="tech-icon">{React.cloneElement(card.icon, { size: 36 })}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <DemoRequestForm />

      <section id="contact-partnership" className="cta-section">
        <SectionHeader
          badge="Partnership"
          title="Partner With Us"
          subtitle="Collaborate with us to deploy scalable industrial autonomy across your facilities."
        />
        <div className="cta-actions">
          <a className="btn btn-outline" href="mailto:quinexusrobotics@gmail.com?subject=Partnership%20Inquiry">
            Partner With Us
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <div className="brand-wrap footer-brand">
              <img src="/Kinexus_logo.png" alt="Logo" className="brand-logo" />
              <span className="brand-text">
                KINE<span>ROBO</span>
              </span>
            </div>
            <p>
              Creating the global standard for autonomous industrial robotics. Building the future of intelligent
              automation today.
            </p>
          </div>
          <div>
            <h4>Contact Details</h4>
            <ul>
              <li>KINEROBO Pvt Ltd</li>
              <li>
                <a href="mailto:quinexusrobotics@gmail.com">quinexusrobotics@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919500925129">+91 9500925129</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="forge-accelerator">
          <img src={forgeLogo} alt="Forge logo" className="forge-logo" />
          <p>Accelerated by Forge</p>
        </div>
        <div className="footer-bottom">© 2026 KINEROBO Robotics Pvt Ltd. Engineering the Future.</div>
      </footer>
    </div>
  );
};

export default App;
