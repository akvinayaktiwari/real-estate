FROM node:16 


WORKDIR /app

COPY . .
COPY package*.json ./
COPY pages ./pages
COPY components ./components


RUN npm install --production
RUN npx browserslist@latest --update-db


RUN npm run build
EXPOSE 3000


CMD ["npm", "start"]
