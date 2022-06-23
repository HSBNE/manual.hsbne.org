import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_exploring_re_grb8.svg').default,
    description: (
      <>
        How does this crazy place even work anyway? Lets start from the beginning
        and dive into why and how we do things.
      </>
    ),
  },
  {
    title: 'Policy',
    Svg: require('@site/static/img/undraw_reviewed_docs_re_9lmr.svg').default,
    description: (
      <>
        The legal, contractual and self enforced rules on how we work. From the
        constitution through to guests and large project storage.
      </>
    ),
  },
  {
    title: 'Procedure',
    Svg: require('@site/static/img/undraw_check_boxes_re_v40f.svg').default,
    description: (
      <>
        Words on how to do common tasks, step by steps and schedules so you
        can have the best outcome.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
