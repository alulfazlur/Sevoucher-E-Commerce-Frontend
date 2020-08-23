FROM nginx:stable
MAINTAINER Fazlur Rahman "fazlur@alterra.id"

RUN mkdir -p /sevoucher/www/Portofolio-E-Commerce-Frontend
RUN mkdir -p /sevoucher/log

COPY default.conf /etc/nginx/conf.d

ADD build/. /sevoucher/www/Portofolio-E-Commerce-Frontend

WORKDIR /sevoucher/www/Portofolio-E-Commerce-Frontend
