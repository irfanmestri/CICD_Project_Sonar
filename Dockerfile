FROM nginx:alpine

COPY . .

EXPOSE 8000

CMD ["nginx" "-g" "daemon off;"]