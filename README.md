# hello-devops-ci

Node.js "Hello World" web application with automated CI/CD using GitHub Actions.  
This project demonstrates best practices for building, testing, and validating code quality in a DevOps workflow.

![CI](https://github.com/joao-dore/hello-devops-ci/actions/workflows/ci.yml/badge.svg)

---

## 📌 Project Overview

This repository contains a simple Express.js server that responds to basic HTTP requests, and a GitHub Actions pipeline that runs tests and linting on pull requests and pushes to `main`.

---

## 🚀 Features

- Simple web server using **Express**
- Health and hello world endpoints
- Automated testing with **Jest + Supertest**
- CI/CD pipeline with **GitHub Actions**
- Node.js version matrix testing
- Caching of dependencies for faster builds

---

## 📡 Endpoints

| Method | Path      | Description           |
|--------|-----------|-----------------------|
| GET    | `/`       | Returns “Hello World” |
| GET    | `/health` | Health check (200 OK) |

---

## 🧰 Technologies Used

- **Express** — web framework
- **Jest & Supertest** — testing framework
- **ESLint** — code linting
- **GitHub Actions** — CI/CD

---

## 📋 Prerequisites

- Node.js **>= 20**
- npm

---

## 🔧 Installation

```bash
npm ci
```

---

## ▶️ Running the App Locally

```bash
npm start
```
Visit: http://localhost:3000

To override the default port:

```bash
PORT=8080 npm start
```


---

## 🧪 Running Tests

```bash
npm test
```

CI mode (with coverage)

```bash
npm run test:ci
```


---

## 🔁 CI/CD with GitHub Actions

This pipeline runs on:
- Pull request creation/updates
- Push to main

Workflow steps:
1. Checkout code
2. Setup Node.js (20.x, 22.x) + npm cache
3. Install dependencies (npm ci)
4. Run ESLint
5. Run tests with coverage
6. Upload coverage artifact

This enforces quality gates on every pull request.

---

## 🛠 Design Decisions
- Express: Simple, widely adopted HTTP framework
- Jest + Supertest: Reliable HTTP testing in CI
- Node matrix testing: Ensures compatibility across Node versions
- Graceful shutdown: Prepares app for containerized environments
- Basic request logging and centralized error handling are included to aid observability and debugging.


---

## 📈 Extending for Production

To take this project to a production readiness level:
- Docker multi-stage build
- Structured logs (e.g., pino)
- Distributed tracing (OpenTelemetry)
- Code scanning (Dependabot, CodeQL)
- Deployment step (ECS/EKS, etc.)

---

## 🧑‍💻 How to Contribute
1. Fork the repo
2. Create a branch: feature/my-feature
3. Open a PR
4. Ensure tests and lint pass

---

## 📄 License

This project is intended for technical assessment purposes.

---

