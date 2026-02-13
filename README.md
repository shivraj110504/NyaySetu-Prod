# 🏛️ NyaySetuAI: Democratizing Justice through Intelligence

> **Empowering 1.4 Billion Citizens with AI-Driven Legal Assistance & Blockchain Integrity**

NyaySetuAI is a state-of-the-art legal assistance platform designed to bridge the gap between complex legal systems and the common citizen. By leveraging Generative AI for document drafting and Blockchain for evidence preservation, we make justice accessible, transparent, and efficient for everyone, anywhere in India.

---

## 🚀 Vision & Mission

**Vision**: To make legal knowledge a fundamental right, not a luxury.
**Mission**: To simplify legal jargon, automate bureaucratic hurdles, and provide a secure bridge (Setu) between citizens and their legal rights.

---

## 🌟 Key Features

### 🤖 AI Legal Assistant
- **Smarter Interaction**: Context-aware chatbot trained on Indian legal datasets.
- **Explainable Law**: Translates complex IPC/Crimes into simple, everyday language.
- **Multimodal**: Supports text and voice input (Hindi/English) for inclusive accessibility.

### 📄 Smart Document Drafting
- **RTI Generator**: Court-ready Right to Information applications with state-specific rule validation.
- **Affidavit Engine**: Automated generation of legally valid affidavits with secure watermarking.
- **Validation Logic**: Real-time compliance checking against the latest legal standards.

### 🔐 Blockchain Evidence Locker
- **Tamper-Proof Storage**: Secure document hashing using SHA-256 on a distributed ledger.
- **Verifiable Integrity**: Permanent record of document creation and sharing for court-ready evidence.
- **Zero-Knowledge Sharing**: Control exactly who sees your sensitive legal files.

### ⚖️ Jurisdictional Intelligence
- **Regional Support**: Tailored logic for 5+ Indian states (Maharashtra, Karnataka, Delhi, etc.).
- **Smart CITATIONS**: Automatic referencing of relevant sections and legal precedents.

---

## 🛠️ Technology Stack

### **Frontend & Backend Orchestration**
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### **Database & Auth**
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: google auth, next-auth

### **AI & Document Processing**
- **Generation**: Python-based Legal LLM Orchestrator
- **PDF Engine**: ReportLab (High-fidelity legal formatting)
- **State Logic**: Rule-based JSON jurisdiction profiles

### **Security**
- **Integrity**: SHA-256 Blockchain Hashing
- **Email**: using domain email for secure notifications

---

## 🎯 Problem & Impact

### The Justice Gap in India

**4+ Crore Cases Pending** • **15 Lawyers per 10,000 People** • **65% Rural Population with Limited Legal Access**

Most Indians face three critical barriers to justice:

1. **Cost Barrier**: Legal consultation costs ₹500-5,000, document drafting ₹1,000-10,000 - unaffordable for majority
2. **Knowledge Barrier**: Complex legal jargon and IPC sections are incomprehensible to common citizens
3. **Access Barrier**: Rural areas lack lawyers, urban areas have long waiting times

### Our Solution & Innovation

#### 🤖 AI-Powered Legal Intelligence
Unlike generic chatbots, our AI is **specifically trained on Indian legal datasets** (IPC, RTI Act, court precedents) to provide:
- Context-aware explanations of 100+ IPC sections
- State-specific legal guidance for 5+ jurisdictions
- Instant FIR/RTI/Affidavit generation in court-ready format

#### 🔐 Blockchain for Legal Integrity
First-of-its-kind integration where every document gets:
- **SHA-256 cryptographic fingerprint** for tamper-proof evidence
- **Immutable timestamp** proving document authenticity
- **Secure sharing** with controlled access for lawyers/courts

#### ⚖️ Real-World Impact

| Use Case | Traditional Process | With NyaySetuAI | Impact |
|----------|-------------------|-----------------|--------|
| RTI Application | 2-3 days, ₹2,000-5,000 | 5 minutes, ₹0 | **99% time & cost reduction** |
| Legal Consultation | 1-2 weeks wait, ₹1,000+ | Instant, ₹0 | **Democratized access** |
| Document Verification | Prone to tampering | Blockchain-secured | **Court-admissible proof** |

### Why This Matters Now

- **Digital India Mission**: Aligns with government's push for digital governance
- **RTI Act Awareness**: Empowers citizens to hold authorities accountable
- **Access to Justice**: Constitutional right, now technologically enabled
- **Post-COVID Reality**: Remote legal assistance is no longer optional



---

## 📁 Repository Structure

```
nyaysetu-ai-gitLab/
├── src/                    # Core Next.js application (Production)
├── public/                 # Static assets and resources
└── supplementary-code/     # Reference implementations for evaluators
    ├── draft-generation/   # AI document orchestration engine
    └── blockchain/         # Blockchain storage implementation
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
