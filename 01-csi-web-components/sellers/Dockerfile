# Base image.
FROM nginx

# Installations
# RUN apt-get update
# RUN apt-get install vim less -y

# Copy files
COPY ./nginx.conf /etc/nginx/
#ADD ./.htpasswd /etc/nginx/
RUN mkdir -p /srv/www/lemoncode
ADD ./static /srv/www/lemoncode

# FROM nginx:alpine as app

# # TODO: Build for multiple architectures

# COPY nginx.conf /etc/nginx/nginx.conf 
# COPY static /var/www/html/static/

# EXPOSE 8080

# CMD [ "nginx", "-g", "daemon off;" ]