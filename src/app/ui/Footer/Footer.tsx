import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import styles from './Footer.module.css';
export const FooterComponent: React.FC = () => {
  return (
    <footer className={`bg-gray-100 ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.title}>Company</h4>
          <ul className={styles.list}>
            <li><a href="/about" className={styles.link}>About Us</a></li>
            <li><a href="/careers" className={styles.link}>Careers</a></li>
            <li><a href="/press" className={styles.link}>Press</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Help</h4>
          <ul className={styles.list}>
            <li><a href="/support" className={styles.link}>Customer Support</a></li>
            <li><a href="/faq" className={styles.link}>FAQ</a></li>
            <li><a href="/returns" className={styles.link}>Returns & Refunds</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Contact Us</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>Email: support@example.com</li>
            <li className={styles.contactItem}>Phone: +1 234 567 890</li>
            <li className={styles.contactItem}>Address: 123 Main Street, Anytown, USA</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Follow Us</h4>
          <ul className={styles.socialList}>
            <li><a href="https://facebook.com" className={styles.socialLink}>Facebook</a></li>
            <li><a href="https://twitter.com" className={styles.socialLink}><AiFillInstagram></AiFillInstagram></a></li>
            <li><a href="https://instagram.com" className={styles.socialLink}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} Nostromo. All rights reserved.</p>
      </div>
    </footer>
  );
};