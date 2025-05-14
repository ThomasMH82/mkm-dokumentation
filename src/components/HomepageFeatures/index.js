import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Grundlagen',
    Svg: () => (
      <a href="/docs/intro">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für den Einstieg in MyKitchenManager erklärt.
      </>
    ),
  },
  {
    title: 'Anlegen von Produkten und Rezepturen',
    Svg: () => (
      <a href="/docs/Produkte-und-Rezepturen">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit Produkten und Rezepturen erklärt.
      </>
    ),
  },
  {
    title: 'Anlegen und Bearbeiten von Speisenkarten',
    Svg: () => (
      <a href="/docs/category/anlegen-und-bearbeiten-der-speisekarte">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit Speisenkarten.
      </>
    ),
  },
  {
    title: 'Bestellen von Speisenkarten',
    Svg: () => (
      <a href="/docs/category/bestellen-von-speisekarten">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier wird erklärt wie man aus einer Speisenkarte besellen wird.
      </>
    ),
  },
  {
    title: 'Bestellen ohne Speisekarten',
    Svg: () => (
      <a href="/docs/category/bestellen-ohne-speisenkarte">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für Bestellungen ohne Speisekarten erläutert.
      </>
    ),
  },
  {
    title: 'Wareneingang',
    Svg: () => (
      <a href="/docs/category/wareneingang">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit dem Wareneingang erklärt.
      </>
    ),
  },
  {
    title: 'Produktion',
    Svg: () => (
      <a href="/docs/category/produktion">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit der Produktionsplanung.
      </>
    ),
  },
  {
    title: 'Verkäufe',
    Svg: () => (
      <a href="/docs/category/verkäufe">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit Verkäufen.
      </>
    ),
  },
  {
    title: 'Lager',
    Svg: () => (
      <a href="/docs/category/lager">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit ihrem Lager.
      </>
    ),
  },
  {
    title: 'Qualitätsmanagement',
    Svg: () => (
      <a href="/docs/category/qualitätsmanagement">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Hier werden die Grundlagen für die Arbeit mit dem Modul Qualitätsmanagement.
      </>
    ),
  },
]
/* const FeatureList = [
  {
    title: 'EK-Produkte',
    Svg: () => (
      <a href="/docs/category/ek-produkte">
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
      </a>  
    ),
    
    description: (
      <>
        Wir können es einfach nutzen und direkt anpassen.
      </>
    ),
  },
  {
    title: 'Lieferantenbestellungen',
    Svg: () => (
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
    ),
    
    description: (
      <>
        Wir können es einfach nutzen und direkt anpassen.
      </>
    ),
  },
  {
    title: 'Lagerbestände',
    Svg: () => (
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
    ),
    
    description: (
      <>
        Wir können es einfach nutzen und direkt anpassen.
      </>
    ),
  },
  {
    title: 'Rezepturen',
    Svg: () => (
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
    ),
    
    description: (
      <>
        Wir können es einfach nutzen und direkt anpassen.
      </>
    ),
  },
  {
    title: 'Speisekarten',
    Svg: () => (
      <img
        src='/img/sb_my_kitchen_icon_rgb_digital.png'
        alt="My Kitchen Manager"
        className={styles.featureSvg}
      />
    ),
    
    description: (
      <>
        Wir können es einfach nutzen und direkt anpassen.
      </>
    ),
  },
  {
    title: 'Produktionsaufträge',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'VK-Produkte',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Verkaufsaufträge',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },{
    title: 'Berichte',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },{
    title: 'Personal',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },{
    title: 'Kunden',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },{
    title: 'Lieferanten',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }
]; */


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
