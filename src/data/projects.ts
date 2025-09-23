export interface Project {
  /** The name of the project */
  title: string;
  /** A short blurb describing what the project does */
  description: string;
  /** A list of technology or domain tags used to filter or label the project */
  tags: string[];
  /** URL of the GitHub repository */
  repo: string;
  /** Optional URL of a live demo or hosted version */
  demo?: string;
  /** Path to an image representing the project.  Should reside in the public/assets folder */
  image: string;
  /** Key resource to surface (e.g. PDF or notebook) */
  fileLink: string;
  /** Bulleted highlights about the project */
  bullets: string[];
}

export const projects: Project[] = [
  {
    title: 'Chat‑2‑DB',
    description:
      'A GenAI chatbot that converts natural language to SQL using Retrieval‑Augmented and Table‑Augmented Generation methods.  The project demonstrates how to democratise access to structured data, combining LLM providers with vector search.',
    tags: ['BigQuery', 'RAG', 'Text‑to‑SQL', 'Gradio', 'Python'],
    repo: 'https://github.com/garyzava/chat-to-database-chatbot',
    demo: '',
    image: '/assets/chat2db-art.png',
    fileLink:
      'https://github.com/garyzava/chat-to-database-chatbot/blob/main/Capstone%20Final%20Report.pdf',
    bullets: [
      'Employs both RAG and TAG to generate SQL from natural language questions',
      'Supports multiple LLM providers and vector search with PGVector for retrieval',
      'Includes an evaluation framework and observability via Langfuse analytics'
    ]
  },
  {
    title: 'Ethereum RAG with BigQuery',
    description:
      'An end‑to‑end retrieval‑augmented generation pipeline over Ethereum blockchain data stored in BigQuery.  It demonstrates how to explore transaction and contract metadata using natural language and provides sample queries and data modelling best practices.',
    tags: ['Ethereum', 'BigQuery', 'RAG', 'Data Modelling'],
    repo: 'https://github.com/garyzava/bigquery-ai',
    demo: '',
    image: '/assets/ethereum-rag-art.png',
    fileLink:
      'https://github.com/garyzava/bigquery-ai/blob/main/notebooks/02.chat2db-app.ipynb',
    bullets: [
      'Queries Ethereum blockchain data in BigQuery using conversational prompts',
      'Constructs a retrieval pipeline over transaction and contract metadata',
      'Provides a Colab notebook with sample queries and an end‑to‑end demo'
    ]
  }
];