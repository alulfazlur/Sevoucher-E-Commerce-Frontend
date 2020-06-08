FROM nginx:stable
MAINTAINER Fazlur Rahman "fazlur@alterra.id"

RUN mkdir -p /coba/www/Portofolio-E-Commerce-Frontend
RUN mkdir -p /coba/log

COPY default.conf /etc/nginx/conf.d

ADD build/. /coba/www/Portofolio-E-Commerce-Frontend

WORKDIR /coba/www/Portofolio-E-Commerce-Frontend
