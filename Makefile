# Define the default target to show help text
default: help

# Bring up Docker Compose in detached mode
up: check-prereqs ## Bring up Docker Compose in detached mode
	docker-compose -f docker-compose.dev.yaml up -d

# Bring down Docker Compose
down: check-prereqs ## Bring down Docker Compose
	docker-compose -f docker-compose.dev.yaml down
	

# View logs from Docker Compose
logs: check-prereqs ## View logs from Docker Compose
	docker-compose -f docker-compose.dev.yaml logs -f

# Clear Docker cache (specifically for images built by Docker Compose)
clear-cache: check-prereqs ## Clear Docker cache (specifically for images built by Docker Compose)
	docker-compose -f docker-compose.dev.yaml down --rmi local --remove-orphans -
	docker image prune -f
	docker volume prune -f

# Check for prerequisites
check-prereqs: ## Check for all prerequisites
	@which docker >/dev/null || (echo "Docker is not installed, please install it" && exit 1) 
	@which docker-compose >/dev/null || (echo "Docker Compose is not installed, please install it" && exit 1)
	@which act >/dev/null || (echo "Act is not installed, please install it" && exit 1)

# run act to run the github actions localy 
act: ## run act to run the github actions localy
	@act

# Dynamically generate help text from comments
help: ## Display this help message
	@awk 'BEGIN {FS = ":.*?## "; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

