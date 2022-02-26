import { Icon } from '@iconify/react';
import Link from 'next/link';

import Layout from '@/components/index/layout';

import styles from './footer.module.sass';

const SITEMAP_LINKS = [
  {
    title: 'HOME',
    url: '/',
  },
  {
    title: 'EXPERIENCE',
    url: '#experience',
  },
  {
    title: 'PORTFOLIO',
    url: '#portfolio',
  },
  {
    title: 'TECHNOLOGIES',
    url: '#technologies',
  },
  {
    title: 'CONTACT',
    url: '#contact',
  },
];

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Layout>
        <div className="content">
          <div className="profile">
            <div className="logo"></div>
            <h1>JIREH NIMES</h1>
            <div className="profile_links">
              <Icon icon="ant-design:linkedin-filled"/>
              <Icon icon="ant-design:github-filled"/>
            </div>
          </div>
          <div className="sitemap">
            {
              SITEMAP_LINKS.map((sitemap, index) => 
                <Link key={index} href={sitemap.url}>{ sitemap.title }</Link>
              )
            }
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Footer;
