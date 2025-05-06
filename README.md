# 📦 Azure Event Hub Consumer with NestJS

This project is a lightweight **NestJS microservice** that connects to **Azure Event Hubs** and consumes real-time messages using the official Azure SDK. It demonstrates how to integrate event-driven architectures into a structured NestJS application with clean lifecycle management and modular design.

---

## 🚀 Features

- 🔌 Connects to Azure Event Hubs
- 🧩 Modular NestJS architecture
- 🧾 Structured logging using Nest's `Logger`
- ♻️ Graceful startup and shutdown via lifecycle hooks
- 🔐 Environment-based configuration

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- Azure Event Hubs namespace & hub
- Shared Access Policy with **Listen** permission

---

### Installation

```bash
git clone https://github.com/waltermanias/azure-eventhub-nest-consumer.git
cd azure-eventhub-nest-consumer
yarn install
