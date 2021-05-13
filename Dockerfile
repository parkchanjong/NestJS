FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]