<p align="center">
  <a href="https://alberthernandez.dev/" target="blank"><img src="images/web.png" alt="Albert Hernandez Website" width="1000" /></a>
</p>

<h1 align="center">⭐ Albert Hernandez Website ⭐</h1>

<p align="center">
  Personal website of Albert Hernandez
</p>

<div align="center">
    <a href="#-developing">
        Developing
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-tools">
        Tools
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-configuration">
        Configuration
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-deploys">
        Deploys
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://alberthernandez.dev/">
        Website
    </a>
</div>

<br>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/🐢 node-20.x-green.svg" alt="node"/></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/📦 npm-10.x-red.svg" alt="npm"/></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/✨ Framework-NextJS-yellow.svg" alt="nextjs"/></a>
  <a href="https://vercel.com/albert-hernandez-dev/alberthernandez.dev"><img src="https://img.shields.io/badge/☁ Cloud-▲ Vercel-black.svg" alt="vercel"/></a>
  <a href="https://dash.cloudflare.com/ee5cacf057a2ebbe042cebfc8e8f3945/alberthernandez.dev"><img src="https://img.shields.io/badge/🚪 Firewall-Cloudflare-orange.svg" alt="cloudflare"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/🧪 Test-Vitest-green.svg" alt="Vitest"/></a>
  <a href="https://github.com/AlbertHernandez/alberthernandez.dev/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/📝 License-CC_BY_NC_4.0-blue.svg" alt="License"/></a>
</p>

## 🧑‍💻 Developing

There are two ways to develop in this project, using Docker or manually.

### 🐳 Docker

First, let's start by copying the `.env` file, to do so you can run:

```bash
cp .env.example .env
```

Now, you can start the app in development mode by running:

```bash
docker-compose up website
```

Also, if you want to start the app in production mode, you can run:

```bash
docker-compose up website-production
```

Now, you can open [http://localhost:3000](http://localhost:3000) in the browser to see the app running.

### ✍️ Manual

First, you need to create the `.env` file, to do so you can execute:

```bash
cp .env.example .env
```

Now, you need to configure the node environment, we recommend to use [nvm](https://github.com/nvm-sh/nvm) for it, but you can use another tool like [fnm](https://github.com/Schniz/fnm) or other:

```bash
nvm install
nvm use
```

Then, install the dependencies:

```bash
npm ci
```

After it, start the app in development mode:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in the browser to see the app running.

### ✅ Testing

To run the tests of the app, you can run:

```bash
npm run test
```

### 💅 Linting

To run the linter, execute the following command:

```bash
npm run lint
```

And for fixing lint issues automatically, you can execute:

```bash
npm run lint:fix
```

## 🎨 Configuration

The portfolio it has been created with the idea that all the content can be easily modified and adapted for any developer. To do so, we have created a configuration file located at `src/config/profile/index.ts` where we can modify the content of the website.

## 💼 Tools

- [Vercel](https://vercel.com/) as cloud provider.
- [Cloudflare](https://www.cloudflare.com/) for firewall and security.

## 🚀 Deploys

The deployment process is automatize using GitHub Actions and Vercel. First we should merge our changes to the `main` branch, this will trigger automatically the deployment to a preview environment where we can test the correct behaviour of the application. Once we know this is working fine, we can trigger the deployment to production by running the [deploy to production](https://github.com/AlbertHernandez/alberthernandez.dev/actions/workflows/deploy-to-production.yml) workflow.

| **🌍 Environment**                                                                 | **▶︎ Trigger**                                                                                                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Development](https://alberthernandezdev-git-main-albert-hernandez-dev.vercel.app) | When there is a change on `main` branch                                                                                                                |
| [Production](https://alberthernandez.dev/)                                         | Manually by running [deploy to production](https://github.com/AlbertHernandez/alberthernandez.dev/actions/workflows/deploy-to-production.yml) workflow |
