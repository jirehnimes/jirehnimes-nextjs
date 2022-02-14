import Layout from '@/components/index/layout';

import BackgroundVideo from '@/components/index/background-video';

import styles from './jumbotron.module.sass';

const Jumbotron = () => {
  return (
    <section className={styles.jumbotron}>
      <BackgroundVideo/>
      <div className="background_overlay"/>
      <Layout>
        <div className="content">
          <h1>JIREH NIMES</h1>
          <p>
            I&lsquo;m a web developer from the Philippines who is passionate<br/>
            on delivering valuable outputs, learning new technologies, and<br/>
            collaboration in order to provide innovative solutions.
          </p>
        </div>
      </Layout>
    </section>
  );
};

export default Jumbotron;
