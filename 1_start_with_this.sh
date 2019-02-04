npm run build
docker-compose down
docker build -t skobara/hab . --force-rm
docker-compose up -d
