# Use the official Node.js image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copies the package.json and package-lock.json files to leverage Docker caching
COPY package.json package-lock.json  ./


# Install dependencies
RUN npm install

# If you prefer to install nodemon as a dev dependency instead of globally
# and use it through a script in your package.json, ensure it's listed in your package.json
# and skip the global installation step here.

# Copy the rest of your application's code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Command to run your app using nodemon, assuming you have a "dev" script in your package.json
CMD ["npm", "run", "dev"]
