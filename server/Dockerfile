# Step 1: Use the official Node.js 16 (LTS) image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) files into the container
COPY package*.json ./

# Install the dependencies in the package.json
RUN npm install

# Copy the rest of your application's code into the container
COPY . .

# Your application binds to port 8000, make sure the container does too
EXPOSE 8080

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "index.js" ]
