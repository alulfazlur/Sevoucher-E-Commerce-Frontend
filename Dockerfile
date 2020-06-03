FROM nginx:stable
MAINTAINER Fazlur Rahman "fazlur@alterra.id"

RUN mkdir -p /coba/www/Portofolio-E-Commerce-Frontend
RUN mkdir -p /coba/log
RUN mkdir -p /coba/cert

COPY default.conf /etc/nginx/conf.d/

ADD build/. /coba/www/Portofolio-E-Commerce-Frontend/
ADD cert/fazlurtech_my_id.crt cert/fazlurtech_my_id.key /coba/cert/

WORKDIR /coba/www/Portofolio-E-Commerce-Frontend