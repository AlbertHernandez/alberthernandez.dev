FROM node:20-alpine3.18 AS base

ENV DIR /app
WORKDIR $DIR
ARG NPM_TOKEN

FROM base AS deps

RUN apk update && apk add --no-cache libc6-compat dumb-init=1.2.5-r2

COPY package*.json .

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ".npmrc" && \
    npm ci && \
    rm -f .npmrc

FROM base AS development

ENV NODE_ENV development
ENV HOSTNAME "0.0.0.0"

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE $PORT

CMD ["npm", "run", "dev"]

FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS production

ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE $PORT

CMD ["node", "server.js"]
