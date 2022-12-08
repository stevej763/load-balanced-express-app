docker build -t express-lb -f Dockerfile_lb .
docker build -t express-app -f Dockerfile_app .
docker compose up -d