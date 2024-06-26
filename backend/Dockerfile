# Use the latest version of Node.js as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all files from the local machine to the working directory in the container
COPY . .

# Install the dependencies specified in package.json
RUN npm install

# Expose port 3000 to allow access to the Node.js application
EXPOSE 3000