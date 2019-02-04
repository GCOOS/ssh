npm run build
npm run generate
docker-compose down
docker build -t skobara/hab . --force-rm
docker-compose up -d
