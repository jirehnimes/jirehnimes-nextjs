import Image from 'next/image';

import Description from '@/components/index/description';
import Layout from '@/components/index/layout';
import Title from '@/components/index/title';

import styles from './experience.module.sass';

const COMPANIES = [
  {
    name: 'Cafe24 Philippines, Inc.',
    image: '/images/companies/cafe24.png',
    url: 'https://cafe24.ph/',
  },
  {
    name: 'CC Mobile Financial Services Philippines, Inc.',
    image: '/images/companies/cash_credit.png',
    url: 'https://cafe24.ph/',
  },
  {
    name: 'Ematic Solutions Philippines',
    image: '/images/companies/ematic_solutions.png',
    url: 'https://cafe24.ph/',
  },
  {
    name: 'Total Assurance Solutions Group',
    image: '/images/companies/tas.png',
    url: 'https://cafe24.ph/',
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <Layout>
        <Title>6 YEARS</Title>
        <Description>WORKING PROFESSIONALLY</Description>      
        <Description>SINCE JUNE 2016</Description>     

        <div className="images_list">
          {
            COMPANIES.map(
              (company, index) => <div 
                className="images_container"
                key={index}
              >
                <div>
                  <Image 
                    src={company.image}
                    key={index}
                    alt={company.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            )
          }
        </div>

        <p className="disclaimer">
          DISCLAIMER: COMPANY LOGOS INCLUDED ABOVE WERE COMPANIES THAT I’VE WORKED WITH THROUGHOUT MY WORKING EXPERIENCE. 
          IMAGE FILES USED WERE SEARCHED AND DOWNLOADED FROM THEIR OFFICIAL WEBSITE OR FROM SEARCH ENGINE. 
          I DON’T TAKE OWNERSHIP OF THESE LOGOS, CREATED OR DESIGNED THEM, OR USING THEM FOR PROFIT.
        </p>
      </Layout>
    </section>
  );
};

export default Experience;
