# Rick and Morty Character Explorer

## Overview

This web application allows you to browse and discover information about characters from Rick and Morty. Ready to start? Visit the [live project](https://rick-and-morty-wgk6.vercel.app/login) here and login with your username and job title to begin.

## Technolgoies

This project is built using the following main technologies:

-   Next.js v15 (App Router)
-   Chakra UI v3 as the UI kit
-   Apollo GraphQL for API communication

## Getting Started

You can run the project locally in two ways:

### Docker

```bash
docker build -t rick-and-morty:1.0.0 .
docker run -p 3000:3000 -d rick-and-morty:1.0.0
```

### Without Docker

```bash
npm install
npm run dev
```

You can view the project at: http://localhost:3000
