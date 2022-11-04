# Set of instructions to build a docker container
FROM node:18
# Copy all files into app directory that we create, into the image
COPY . /app
# Set current working directory to /app
WORKDIR /app
# We are inside app directory now, execute this command
CMD node app.js
