FROM node:24-alpine3.20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
