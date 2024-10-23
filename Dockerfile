FROM nginx:alpine

COPY . .

EXPOSE 2000

CMD ["nginx" "-g" "daemon off;"]