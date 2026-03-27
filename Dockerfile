FROM node:24-alpine AS base
WORKDIR /app

FROM base AS builder
COPY package.json package-lock.json ./
COPY third-party-ui-component ./third-party-ui-component
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runner
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
