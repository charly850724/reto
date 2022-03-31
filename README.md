<!--
title: 'Reto Técnico'
description: '•	Crear una API en Node.js con el framework Serverless para un despliegue en AWS. 
              •	Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre). 
              •	Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints. 
              •	Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos. 
              •	Crear un endpoint GET que muestre la data almacenada.'
language: nodeJS
authorName: 'Charly Trejo'
-->

## Usage

### Deployment

```
$ serverless deploy --verbose
```

After deploying, you should see output similar to:

```bash
Deploying aws-lambda-starwars to stage dev (us-west-2)

✔ Service deployed to stack aws-lambda-starwars-dev (152s)

endpoints:
  POST - https://crjd0r9kq9.execute-api.us-west-2.amazonaws.com/person/{id}
  GET - https://crjd0r9kq9.execute-api.us-west-2.amazonaws.com/person
functions:
  createPerson: aws-lambda-starwars-dev-createPerson (13 MB)
  getPeople: aws-lambda-starwars-dev-getPeople (13 MB)
```

### Invocation

After successful deployment, you can call the created application via Rest API Client:

```
endpoint:
  POST - https://crjd0r9kq9.execute-api.us-west-2.amazonaws.com/person/{id}

  
  Save an individual person or character within the Star Wars universe from the Star Wars API by ID in DynamoDb.
  If the character's ID exists in DynamoDB, it only shows the previously saved record.
```

Which should result in response similar to the following:

```json
{
  "status": 200,
  "body": {
    "person": {
      "id": "f49aa4ff-ac5c-534d-a334-b753966c0c0e",
      "nombre": "Luke Skywalker",
      "altura": "172",
      "peso": "77",
      "color_cabello": "blond",
      "color_piel": "fair",
      "color_ojos": "blue",
      "anio_nacimiento": "19BBY",
      "genero": "male",
      "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
      "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
      ],
      "especies": [
        "https://swapi.py4e.com/api/species/1/"
      ],
      "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
      ],
      "naves_estelares": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
      ],
      "creado": "2014-12-09T13:50:51.644000Z",
      "modificado": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.py4e.com/api/people/1/"
    }
  }
}
```

```
endpoint:
  GET - https://crjd0r9kq9.execute-api.us-west-2.amazonaws.com/person

  Gets the people within the Star Wars universe saved in DynamoDb.
```

Which should result in response similar to the following:

```json
{
  "status": 200,
  "body": {
    "people": [
      {
        "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
        "nombre": "C-3PO",
        "color_cabello": "n/a",
        "vehiculos": [],
        "altura": "167",
        "modificado": "2014-12-20T21:17:50.309000Z",
        "url": "https://swapi.py4e.com/api/people/2/",
        "peso": "75",
        "peliculas": [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
          "https://swapi.py4e.com/api/films/5/",
          "https://swapi.py4e.com/api/films/6/"
        ],
        "naves_estelares": [],
        "color_piel": "gold",
        "especies": [
          "https://swapi.py4e.com/api/species/2/"
        ],
        "creado": "2014-12-10T15:10:51.357000Z",
        "id": "88fcb92e-c9b0-5598-85f1-f1b92d109d6e",
        "color_ojos": "yellow",
        "anio_nacimiento": "112BBY",
        "genero": "n/a"
      },
      {
        "planeta_natal": "https://swapi.py4e.com/api/planets/8/",
        "nombre": "R2-D2",
        "color_cabello": "n/a",
        "vehiculos": [],
        "altura": "96",
        "modificado": "2014-12-20T21:17:50.311000Z",
        "url": "https://swapi.py4e.com/api/people/3/",
        "peso": "32",
        "peliculas": [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
          "https://swapi.py4e.com/api/films/5/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/"
        ],
        "naves_estelares": [],
        "color_piel": "white, blue",
        "especies": [
          "https://swapi.py4e.com/api/species/2/"
        ],
        "creado": "2014-12-10T15:11:50.376000Z",
        "id": "f846f10f-1a33-5e26-ab94-9fe7d656fc54",
        "color_ojos": "red",
        "anio_nacimiento": "33BBY",
        "genero": "n/a"
      },
      {
        "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
        "nombre": "Luke Skywalker",
        "color_cabello": "blond",
        "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/14/",
          "https://swapi.py4e.com/api/vehicles/30/"
        ],
        "altura": "172",
        "modificado": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.py4e.com/api/people/1/",
        "peso": "77",
        "peliculas": [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/"
        ],
        "naves_estelares": [
          "https://swapi.py4e.com/api/starships/12/",
          "https://swapi.py4e.com/api/starships/22/"
        ],
        "color_piel": "fair",
        "especies": [
          "https://swapi.py4e.com/api/species/1/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "id": "f49aa4ff-ac5c-534d-a334-b753966c0c0e",
        "color_ojos": "blue",
        "anio_nacimiento": "19BBY",
        "genero": "male"
      }
    ]
  }
}
```

