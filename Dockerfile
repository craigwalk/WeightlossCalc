FROM node:lts

WORKDIR /app

COPY ["package*.json",  "components/*",  ./ 

Run npm install

COPY . . 

RUN npm run build

CMD ["npm", "start"]