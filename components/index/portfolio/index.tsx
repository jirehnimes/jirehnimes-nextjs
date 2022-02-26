import Layout from '@/components/index/layout';
import Title from '@/components/index/title';

import styles from './portfolio.module.sass';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="position">
        <Layout>
          <Title>PORTFOLIO</Title>
        </Layout>
      </div>
    </section>
  );
};

export default Portfolio;
