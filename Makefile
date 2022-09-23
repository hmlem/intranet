prod:
	docker-compose down --remove-orphans --volumes
	docker-compose up -d --build
	docker-compose logs -f