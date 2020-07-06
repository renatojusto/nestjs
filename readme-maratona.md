docker-compose up

npm run typeorm migration:create -- --name CreateLiveTable

npm run typeorm migration:run

docker run -p 3000:3000 renatoalejusto/maratonafullcycle-nestjs:latest

docker build . -t maratonafullcycle-nestjs_app:latest
docker tag maratonafullcycle-nestjs_app:latest renatoalejusto/maratonafullcycle-nestjs:latest
docker push renatoalejusto/maratonafullcycle-nestjs:latest