import Layout from '@/components/index/layout';
import Title from '@/components/index/title';

import styles from './footer.module.sass';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Layout>
        <Title>FOOTER</Title>
      </Layout>
    </section>
  );
};

export default Footer;
