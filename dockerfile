FROM node:18 AS build
 
WORKDIR /app
 
COPY package.json package-lock.json ./
RUN npm install
 
COPY . .
 
# Build the Angular app for production
RUN npm run build --prod
 
# Stage 2: Serve the Angular app with NGINX
FROM nginx:alpine
 
# Copy the build output to replace the default NGINX HTML
COPY --from=build /app/dist/angularassignments /usr/share/nginx/html
 
# Expose port 80
EXPOSE 80
 
# Start NGINX
CMD ["nginx", "-g", "daemon off;"]