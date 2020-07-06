docker-compose up

npm run typeorm migration:create -- --name CreateLiveTable

npm run typeorm migration:run