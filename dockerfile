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

# Set default port
ENV PORT=4000

# Expose the port dynamically
EXPOSE $PORT

# Start the application
CMD ["node", "/app/server/server.mjs"]
