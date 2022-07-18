import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate values={{ siteConfigTitle: 'Free Kalmykia' }}>
            {'{siteConfigTitle}'}
          </Translate>
        </h1>
        <h2 className="hero__subtitle">
          <Translate values={{ siteConfigTagline: 'In Numbers' }}>
            {'{siteConfigTagline}'}
          </Translate>
        </h2>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1 className="text-align-center font-monospace">
                <Translate>Facts About Kalmykia</Translate>
              </h1>
              <p className="text-indent-3">
                <Translate>
                  Kalmykia is non-Russian, and the only Buddhist, country in Europe under the domination of the Kremlin.
                </Translate>
              </p>
              <p className="text-indent-3">
                <Translate>
                  Today, after almost 200 years of subjection to the Russian rule, Kalmykia claims the right to be heard by the free world. Let the facts about Kalmykia speak for themselves.
                </Translate>
              </p>
              <h2 className="text-align-center font-monospace">
                <Translate>Territory</Translate>
              </h2>
              <p className="text-indent-3">
                <Translate>
                  Geographically, Kalmykia represents an area of over 29,000 sq. miles. Kalmyk ethnographical territory streches from Lower Don River in the west to Lower Volga River and Caspian Sea in the east. Kalmykia borders on Rostov Oblast (Don Cossacks territories) in the west, to the north on Russia, to the east on Astrakhan Oblast (territories of Kazakhs, Nogays, Tatars), and to the south on North Caucasus Republics. In the east Kalmykia has access to Caspian Sea. Capital of Kalmykia is Elista which lies right in the middle between Caspian and Black Seas.
                </Translate>
              </p>
              <h2 className="text-align-center font-monospace">
                <Translate>Population</Translate>
              </h2>
              <p className="text-indent-3">
                <Translate>
                  According to 2022 figures, the population of Kalmykia is about 268 thousand people, 60% of it being Kalmyks. The density of population is 9 per sq. miles. Couple of hundred thousands of Kalmyks live in Mongolia, Kirgizstan, China and all over the Russia. The total Kalmyk population can be estimated at 380 thousands.
                </Translate>
              </p>
              <h2 className="text-align-center font-monospace">
                <Translate>Natural and Industrial Resources</Translate>
              </h2>
              <p className="text-indent-3">
                <Translate>
                  Kalmykia is potentially one of the richest countries in Europe. It is currently an undeveloped country due to Russia's colonial and anti-development policies toward national republics, but with the wise government open to the world, it can produce millions of tons of crude oil and natural gas, related refined products, agricultural products. One of the main advantages of Kalmykia is its small population, per capita production indicators are very high:
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
