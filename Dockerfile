# Build the deployment container
#FROM gliderlabs/alpine:latest

FROM node:14.15.1


# Copy compiled musl binary
# COPY pingcli-rs ./

WORKDIR /usr/src/app

#COPY index.js ./
COPY package.json ./


# Set executable permissions
#RUN ["chmod", "+x", "/pingcli-rs"]
#RUN ["npm", "install"]

RUN npm install

# Execute binary
#CMD /pingcli-rs -e email@gmail.com
#CMD node index.js

EXPOSE 8080

CMD ["npm", "start" ]


COPY . .
