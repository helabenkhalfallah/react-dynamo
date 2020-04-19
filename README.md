### react-dynamo

## Project

### What ?

Based on these projects : 

https://github.com/helabenkhalfallah/json-to-react-proptypes

https://github.com/helabenkhalfallah/react-cli

This application will autogenerate redux or graphql connected application (bootstrap an application, pages, components, services, reducers, actions, mutations, queries, ...).

### Why ?

To avoid redundant tasks that can be automated.

## How to use ?

(todo url)

## Used tools

For a Redux App :
- redux
- redux-saga

For a Graphql App :
- Apollo Client

## Redux application architecture 

Dynamo will generate an application with this organisation :

A folder **feature-name** :
- pages : statefull (Class)
- components : stateless (Funtionnal Pure Component)
- services : saga GET/POST service
- redux : reducer, actions, provider & dispatcher for the feature
- commons : reducer & saga root

(todo)

## Graphql application architecture 

(todo)


## Authors

Hela Ben Khalfallah - Creator - https://medium.com/@helabenkhalfallah


## License
This project is licensed under the MIT License - see the LICENSE.md file for details

