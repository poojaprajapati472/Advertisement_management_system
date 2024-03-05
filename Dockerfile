FROM node:18.16.0-alpine

WORKDIR /my_insta_sequalize

COPY package*.json ./

RUN npm i

COPY  . . 

ENV PORT=5000

EXPOSE 5000

##RUN THE NODE APP
CMD [ "npm","start" ] 
# or node ./dist/index.js