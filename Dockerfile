FROM node:22-alpine AS build

WORKDIR /app

# Set CI environment to disable interactive features
ENV CI=true
ENV NO_COLOR=1
ENV NG_CLI_ANALYTICS=false

# Copy package files
COPY package*.json ./

# Install dependencies (ora override in package.json fixes stripAnsi issue)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build:prod

# Runtime stage
FROM nginx:alpine
COPY dynamic-env.json /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/Naqliyat /usr/share/nginx/html

EXPOSE 80
