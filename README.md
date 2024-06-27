# ACME Learning Center Web Application

## Summary
TeamSync, illustrating REST client with axios on a simulated API with json-server, using Vue Framework and PrimeVue UI Component Library. The application also shows how to support in-app navigation routing.

## Features
- REST client with axios
- Simulated API with json-server
- PrimeVue UI Component Library
- In-app navigation routing
- Reusable components

## Dependencies
- Vue
- Axios
- PrimeVue
- Vue Router
- json-server

## Dev Commands
```bash
npm init vue@latest
npm i primevue primeicons primeflex axios
npm install -g json-server

cd server
json-server --watch db.json --routes routes.json
```

## Mock API Start
Write the following commands in the terminal to start the mock API server.
```bash
cd server
sh start.sh
```