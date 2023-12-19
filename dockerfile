# Stage 1: Build the application
FROM node:20.10-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# Stage 2: Serve the application
FROM node:20.10-alpine as serve
COPY --from=build /app/dist/giftify /app
EXPOSE 4080
ENV PORT=4080
CMD ["node", "/app/server/server.mjs"]
