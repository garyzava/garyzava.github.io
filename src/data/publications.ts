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
    title: 'Chat‑2‑DB: Conversational BigQuery with RAG',
    outlet: 'Blog',
    date: '2024‑12',
    url: 'https://github.com/garyzava/chat-to-database-chatbot/blob/main/Capstone%20Final%20Report.pdf',
    summary:
      'Designing and evaluating a text‑to‑SQL pipeline over BigQuery with retrieval and table augmentation guardrails.'
  },
  {
    title: 'Querying Ethereum on BigQuery: a Practical Guide',
    outlet: 'GitHub Self Publish',
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