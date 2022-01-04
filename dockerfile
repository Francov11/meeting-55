FROM node:current-alpine 

COPY . /app/
WORKDIR /app
RUN /bin/sh -c 'npm i'


CMD [ "npm", "start" ]