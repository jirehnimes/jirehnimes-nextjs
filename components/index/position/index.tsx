import Description from '@/components/index/description';
import Layout from '@/components/index/layout';
import LinkedIn from '@/components/index/linkedin';
import Title from '@/components/index/title';
import Link from 'next/link';

import styles from './position.module.sass';

const Position = () => {
  return (
    <section className={styles.position}>
      <Layout>
        <Description>CURRENT ROLE</Description>
        <Title>SENIOR FULL STACK DEVELOPER</Title>
        <Description>MALVEDA HOLDINGS CORPORATION</Description>
        <div className="linkedin">
          <div className="badge">
            <LinkedIn/>
          </div>
          <div className="message">
            <Title>WANT TO KNOW MORE?</Title>
            <Description>
              VISIT MY <Link href="https://ph.linkedin.com/in/jireh-june-nimes-77a603109" target="_blank">LINKEDIN PROFILE</Link>
            </Description>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Position;
