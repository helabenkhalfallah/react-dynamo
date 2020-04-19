### react-dynamo

## Project

### What ?

Based on these projects : 

https://github.com/helabenkhalfallah/json-to-react-proptypes

https://github.com/helabenkhalfallah/react-cli

Dynamo will autogenerate redux or graphql connected application (bootstrap an application, pages, components, services, reducers, actions, mutations, queries, ...).

### Why ?

To avoid redundant tasks that can be automated.

## How to use ?

https://helabenkhalfallah.github.io/react-dynamo/#/react-dynamo-home


## Used tools

For a Redux App :
- redux
- redux-saga

For a Graphql App :
- Apollo Client

## Naming convention

1. Feature name follow kebab-case naming convention.

```news, users, my-awesome-feature, ...```

2. Page name is require and follow UpperCamelCase naming convention and must end with Page suffix.

```TopNewsPage, UserDetailsPage, ...```

3. Component is a pure functionnal component and name follow UpperCamelCase naming convention.

  Accepted Component suffix :
  - View
  - List
  - Table
  - TableRow
  - Row

```TopNewsList, TopNewsRow, UserDetailsView, ...```

4. Service name follow UpperCamelCase naming convention and must end with Service suffix.

```TopNewsService, SubmitUserInfoService, ...```

## Redux application architecture 

Dynamo will generate an application with this organisation :

A parent folder **feature-name** which contains :
- **pages folder** : statefull (Class)
- **components folder** : stateless (Funtionnal Pure Component)
- **services folder** : saga GET/POST service
- **redux folder** : reducer, actions, provider & dispatcher for the feature
- **commons folder** : reducer & saga root

Dynamo **will generate a zip** with a page connected to redux :
* install required dependencies
* create saga services and attach them to reducers (services folder)
* create reducers and actions (redux folder)
* create Redux Provider and Dispatcher (redux folder)
* create ReducerRoot and SagaRoot (commons folder)

**Important :**
* Each service has its own : reducer, action, service file.
* Dynamo will generate required files you have only to copy/update files on your generated redux app.

## Graphql application architecture 

(todo)


## Authors

Hela Ben Khalfallah - Creator - https://medium.com/@helabenkhalfallah


## License
This project is licensed under the MIT License - see the LICENSE.md file for details

