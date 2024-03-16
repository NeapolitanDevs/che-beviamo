FROM node:20 as builder

RUN npm install -g \
        npm@8.19.2 \
    && npm install -g \
        @angular/cli@13 \
    && apt-get update \
    && apt-get install -y jq

COPY . /src/code
WORKDIR /src/code

RUN npm i
RUN npm run build
RUN mv "dist/che-beviamo" /src/build

FROM nginx:latest

COPY --from=builder /src/build /usr/share/nginx/html/home/cocktail
