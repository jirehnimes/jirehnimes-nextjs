import Description from '@/components/index/description';
import Layout from '@/components/index/layout';
import LinkedIn from '@/components/index/linkedin';
import Title from '@/components/index/title';

import styles from './position.module.sass';

const Position = () => {
  return (
    <section className={styles.position}>
      <Layout>
        <Description>CURRENT ROLE</Description>      
        <Title>TEAM LEADER</Title>
        <Description>CAFE24 PHILIPPINES, INC.</Description> 
        <div className="linkedin">
          <div className="badge">
            <LinkedIn/>
          </div>
          <div className="message">
            <Title>WANT TO KNOW MORE?</Title>
            <Description>VISIT MY LINKEDIN PROFILE</Description> 
          </div>
        </div>     
      </Layout>
    </section>
  );
};

export default Position;
