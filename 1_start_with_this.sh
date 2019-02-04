npm run build
docker-compose down
docker build -t skobara/ssh . --force-rm
docker-compose up -d
