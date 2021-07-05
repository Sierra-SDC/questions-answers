FROM alpine:latest
RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
EXPOSE 3000

ENTRYPOINT [ "node" ]
CMD ["./server/start.js"]
