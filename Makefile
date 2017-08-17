install-node-modules:
	npm install
build: install-node-modules
	docker build -t lurker:latest .
