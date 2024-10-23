# Step 1: Use an official Node.js runtime as a base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install all the dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the application port (typically 3000 for Node.js apps)
EXPOSE 8000

# Step 7: Command to run the application
CMD [ "node", "src/server.js" ]
