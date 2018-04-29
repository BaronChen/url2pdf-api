FROM node:9.8.0-alpine
WORKDIR /tmp
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
WORKDIR /app
COPY . /app
RUN mv /tmp/node_modules ./ 
EXPOSE 3000
CMD npm start