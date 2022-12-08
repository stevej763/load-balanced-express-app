# Load balanced NodeJs Express app

Just experimenting with building a dockerized application with round robin load balancing

deploy-production.sh will first build `Dockerfile_app` and `Dockerfile_lb`. 
Then it will spin up the docker-compose file, starting 4 instances of the NodeJs app and one Nginx load balancer

