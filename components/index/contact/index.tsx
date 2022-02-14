import Layout from '@/components/index/layout';
import Title from '@/components/index/title';

import styles from './contact.module.sass';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Layout>
        <Title>GET IN TOUCH</Title>
      </Layout>
    </section>
  );
};

export default Contact;
