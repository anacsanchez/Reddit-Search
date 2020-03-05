FROM node:alpine
WORKDIR /app
ADD package.json /tmp
RUN cd /tmp && npm install
RUN mv /tmp/node_modules /app
COPY . /app
RUN npm run build
CMD ["npm", "run", "start"]
