FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --prod
FROM nginx:alpine
COPY --from=build /app/dist/vehicle_management/usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

