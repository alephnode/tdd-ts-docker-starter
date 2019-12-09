# TDD TS Docker Starter Kit

Starter kit for new Node-based back-end projects. 

Motivation is to have a development environment that achieves as close to environment parity as possible with production. In addition, this kit supports tests that run at all times for immediate feedback when a unit breaks.

## Stack Opinions:
- Node for app development 
- Express for RESTful endpoints 
  CAVEAT: This is a starter for microservices. GraphQL is superior for client-facing APIs
- TypeScript for type safety and optimal DX
- Jest for the testing suite
- Docker for deployment and dev/prod parity

## Getting started

To install dependencies, run:

`yarn install`

For local development: 

`yarn dev`