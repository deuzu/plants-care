FROM node:lts-bullseye

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]

COPY ["webpack.config.js", "tsconfig.json", "./"]
COPY ["src/", "./src/"]
RUN ["npm", "run", "build"]

# Remove all files & folders except `dist/`
RUN ["sh", "-c", "ls -h | grep -v dist | xargs rm -rf"]

ENTRYPOINT ["node", "dist/main.js"]
EXPOSE 80
