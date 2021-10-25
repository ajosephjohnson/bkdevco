# base image
FROM node:16

# set working directory
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies using npm
ADD package.json yarn.lock /app/
RUN npm install

# Copy all frontend files to new "app" folder
COPY . /app/

CMD ["bash", "-c", "gatsby develop -H 0.0.0.0 -p 3000"]