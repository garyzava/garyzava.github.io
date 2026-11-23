export interface Publication {
  /** Title of the article, post or paper */
  title: string;
  /** The publication outlet (e.g. blog, conference, etc.) */
  outlet: string;
  /** Publication date in YYYY‑MM or YYYY‑MM‑DD format */
  date: string;
  /** URL pointing to the full text or PDF */
  url: string;
  /** Short summary of the content */
  summary: string;
}

export const publications: Publication[] = [
  {
    title: 'Why 90% Accuracy in Text-to-SQL is 100% Useless',
    outlet: 'Towards Data Science',
    date: '2026‑01‑12',
    url: 'https://towardsdatascience.com/why-90-accuracy-in-text-to-sql-is-100-useless/',
    summary:
      'Argues that a text-to-SQL system people use without a data expert must be right every time, so 80 or 90 percent accuracy is not enough to keep their trust. Explains the measures that matter: execution accuracy, focused evaluation, soft F1 and a language model as judge. Shows that models above 90 percent on the older Spider 1.0 benchmark fall to 10 to 20 percent on Spider 2.0.'
  },
  {
    title: 'Querying Ethereum on BigQuery: a Practical Guide',
    outlet: 'Kaggle BigQuery AI hackathon',
    date: '2025‑09‑22',
    url: 'https://github.com/garyzava/bigq-ethereum-rag',
    summary:
      'How to explore the Ethereum dataset, write queries, and build retrieval‑augmented metadata over blockchain tables.'
  },
  {
    title: 'Building Token Recommenders on GCP',
    outlet: 'Blog',
    date: '2024‑03',
    url: '',
    summary:
      'Frameworks and best practices for building recommendation engines on Google Cloud Platform using BigQuery and AI Platform.'
  }
];