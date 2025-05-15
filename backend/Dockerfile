# Build stage
FROM node:16 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Production stage
FROM node:16-alpine

WORKDIR /app

COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/src ./src

EXPOSE 3000

CMD ["npm", "start","node", "src/app.js"]