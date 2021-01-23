FROM node:13.14.0 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-platform
COPY . .
RUN yarn build

FROM nginx:1.19.3-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# docker build -f Dockerfile -t test:01 .

# docker build --no-cache -t  docker-registry-default.appsdigit.inet.co.th/poc-consent-dev/cmp-uat:new-v2-1 . && docker push docker-registry-default.appsdigit.inet.co.th/poc-consent-dev/cmp-uat:new-v2-1;