# 🏛️ NyaySetuAI: Democratizing Justice through Intelligence

> **Empowering 1.4 Billion Citizens with AI-Driven Legal Assistance**

NyaySetuAI is a state-of-the-art legal assistance platform designed to bridge the gap between complex legal systems and the common citizen. By leveraging Generative AI for document drafting and secure method to share documents, we make justice accessible, transparent, and efficient for everyone, anywhere in India.

---
## 🔗 Key Links & Resources


- 🎥 **Video Demo**: [Watch on Google Drive](https://drive.google.com/file/d/1rJPredawqqiG2unOv_pls5I4ljXwAKEk/view?usp=sharing)
- 📊 **Presentation (PPT)**: [View on Google Slides](https://docs.google.com/presentation/d/12Ppq9JM9PsFdkoK8sKv1zrDM-P61rg-d/edit?usp=sharing&ouid=115360243046509219220&rtpof=true&sd=true)
- 🌐 **Live URL**: [NyaySetuAI](https://nyay-setu-prod.vercel.app/)

---

## 🚀 Vision & Mission

**Vision**: To make legal knowledge a fundamental right, not a luxury.

**Mission**: To simplify legal jargon, automate bureaucratic hurdles, and provide a secure bridge (Setu) between citizens and their legal rights.

---

## 🌟 Key Features  

### 🤖 AI Legal Assistant  
- **Plain-Language Law Explanation**: Converts complex IPC sections and legal terminology into simple, citizen-friendly language.
- **Semantic Legal Retrieval**: Uses vector databases to fetch legally relevant and structured responses.
- **Natural Language Understanding**: Allows users to describe legal issues without legal expertise and receive structured guidance.
- **Legal Q&A Engine**: Provides accurate, text-based legal assistance powered by LLMs and semantic retrieval.
---

### 📄 Automated Legal Document Drafting  
- **Structured RTI & Affidavit Drafting**: Generates legally formatted documents using validated templates to reduce rejection risk.
- **Error Minimization Framework**: Reduces procedural delays caused by manual drafting mistakes.
- **Guided Workflow Execution**: Step-by-step assistance to ensure correct legal document submission and compliance.

---

### ⚖️ Intelligent Legal Provision Prediction  
- **Context-Aware Legal Analysis**: Maps user narratives to appropriate IPC sections using AI-driven interpretation. 
- **Explainable Outputs**: Presents predicted sections along with simplified explanations for transparency. 
- **Confidence Score**: Provides confidence score along with each output.

---

### 📰 AI Legal Awareness Newsletter  
- **Agentic Automation**: Automatically fetches, summarizes, and curates legal updates.
- **Scheduled Delivery**: Weekly newsletter generation without manual intervention.
- **Continuous Legal Awareness**: Keeps citizens updated with new laws, amendments, and regulatory changes.

---

### 🔐 Secure & Controlled Legal Handling  
- **Secure File Sharing**: Ensures tamper-resistant document handling and integrity validation.
- **Secure Authentication**: Google Authentication for controlled access.  
- **Responsible AI Architecture**: Modular, scalable, and controlled AI pipeline for real-world legal reliability. 

---

### 🧠 Agentic AI + GenAI Synergy  
- **GenAI Core Engine**: Powers legal explanations, IPC prediction, and document drafting. 
- **Agentic AI Automation Layer**: Handles autonomous newsletter updates and legal information curation.
- **Citizen-Centric Design**: End-to-end guided workflows that convert legal uncertainty into executable action.

---
## 🛠️ Technology Stack  

### **Frontend**
- **Framework**: Next.js, TypeScript, low-code platforms (User-friendly, responsive interface)
- **Deployment**: Vercel
---

### **Backend**
- **Language**: Python 
- **Frameworks**: Flask / FastAPI (Secure, lightweight APIs) 
- **Deployment**: Render
- **Version Control**: GitHub 

---

### **AI & Orchestration**
- **LLM Provider**: OpenRouter 
- **Language Model**: meta-llama/Llama-3.1-8B-Instruct  
- **Embedding Model**: text-embedding-3-small
- **Vector Database**: ChromaDB (Semantic legal retrieval) 
- **Orchestration & Automation**: LangChain, n8n

---

### **Database & Storage**
- **Primary Database**: MongoDB 
- **Auxiliary Storage**: Google Sheets 
---

### **Security**
- **Blockchain Integration**: Python-based blockchain implementation for document integrity
- **Authentication**: Google Authentication 

---

## 🎯 Problem & Impact (Compact, Verified)

### ⚖️ The Justice Gap in India  
- **~5+ crore pending cases across all courts**, including ~4.6 crore in district/subordinate courts and ~63 lakh in High Courts as per NJDG data. 
- India has one of the **lowest judge-to-population ratios (~21 judges per million people)** globally, far below recommended benchmarks, contributing to delays.
- Legal awareness and access remain uneven, especially in rural regions where procedural knowledge and legal infrastructure are limited (rural-urban divide in legal access). 

### 🚧 Core Barriers to Justice  
1. **Cost Barrier** – Professional fees and procedural costs deter many low-income citizens.  
2. **Knowledge Barrier** – Complex legal jargon and statute interpretation challenge non-experts.  
3. **Access Barrier** – Rural and underserved areas lack adequate legal representation and court access.

### 🔍 Our Solution & Innovation  

#### 🤖 AI-Powered Legal Intelligence  
- Context-aware explanations for IPC and statutory provisions in simple language.  
- Jurisdiction-specific guidance with legal reasoning tailored to Indian law.  
- Automated, compliant generation of RTIs, FIR drafts, and affidavits.  

#### 🔐 Security for Legal Integrity  
- **SHA-256 hashing** ensures tamper-evident document fingerprints.  
- **Immutable timestamps** provide verifiable creation/sharing records.  
- **Controlled access** for lawyers and courts to preserve evidentiary integrity.

### 📊 Real-World Impact  

| Use Case | Traditional Process | With NyaySetuAI | Impact |
|----------|---------------------|------------------|--------|
| **RTI Drafting** | Days + cost | Minutes, low cost | Major time/cost reduction |
| **Initial Legal Help** | Wait + fees | Instant guidance | Improved access to justice |
| **Document Verification** | Manual checks | Blockchain-secured | Higher trust & admissibility |

### 📌 Why It Matters Now  
- Aligns with **digital governance goals** and access to justice mandates.  
- Helps mitigate **systemic judicial delays** from backlog and resource shortages.  
- Enhances **legal awareness and affordability** for rural and low-income groups.  

---

## 📁 Repository Structure

```
NyaySetu-Prod/
├── src/                         # Core Next.js application (Production)
├── public/                      # Static assets and resources
├── supplementary-code/          # Features
|   ├── IPC_SECTION-main/        # IPC Section Prediction
|   ├── blockchain/              # Secure file sharing
|   ├── draft-generation/        # Draft Generator
|   └── v3.1_Legal_chatbot/      # Legal chatbot
├── Presentation/                # Presentation materials
├── Problem Statement/           # Problem documentation
├── Configuration Files (Root)
│   ├── package.json            # Project dependencies
│   ├── package-lock.json       # Lock file
│   ├── tsconfig.json           # TypeScript configuration
│   ├── next.config.ts          # Next.js configuration
│   ├── tailwind.config.ts      # Tailwind CSS configuration
│   ├── postcss.config.mjs       # PostCSS configuration
│   ├── components.json         # Components configuration
│   ├── eslint.config.mjs        # ESLint configuration
│   ├── .gitignore              # Git ignore rules
│   └── .vercelignore           # Vercel ignore rules
└── Utility/Debug Scripts (Root)
    ├── check_user.js           # User checking script
    ├── check_user_output.txt   # Output from user check
    ├── debug_webhook.js        # Webhook debugging script
    ├── dump_bc_users.js        # Blockchain users dump script
    ├── list_collections.js     # Collections listing script
    ├── blockchain_users_dump.txt # Blockchain users data
    └── README.md               # Repository documentation
```

### 📌 Important Note

The code in the **`supplementary-code/`** directory represents our production-deployed backend systems and is included here **strictly for evaluation reference purposes**. All sensitive credentials, API keys, and production configurations have been removed for security. These modules are currently running on our live servers.

---

## 🏁 Getting Started

### Local Setup (Next.js)

1. **Clone & Install**:
   ```bash
   git clone https://github.com/your-org/nyaysetu-ai.git
   cd nyaysetu-ai
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env.local` file with your MongoDB and Auth credentials.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

### Running the Python Modules
See the individual READMEs in `supplementary-code/` for Python environment setup and generator execution.

---

## 👥 Team

**NyaySetu Development Team**  
*Building for a More Just India*

---

<div align="center">


*NyaySetu.ai - Bridging the Gap to Justice*

</div>
