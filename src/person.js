const { v5 } = require("uuid");
const AWS = require("aws-sdk");
const axios = require("axios");
const baseUrl = "https://swapi.py4e.com/api/people/";
const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

const addPerson = async (event) => {
  try {
    const { id } = event.pathParameters;
    const regId = v5(id, MY_NAMESPACE);
    const validatePerson = getPerson(regId);

    // valido si ya existe el personaje en dynamodb para no agregarlo de nuevo
    if (validatePerson.length > 0) {
      return {
        status: 200,
        body: {
          person: validatePerson[0],
        },
      };
    } else {
      const url = `${baseUrl}${id}`;
      const personData = await getUrl(url);

      if (personData.name === undefined) {
        return {
          status: 404,
          body: {
            detail: "Person doesn't exist.",
          },
        };
      }

      const dynamodb = new AWS.DynamoDB.DocumentClient();

      const result = [];
      result.push(personData);

      let person;
      // traducción de campos a spanish
      person = result.map((p) => {
        return new personModel({
          id: regId,
          nombre: p.name,
          altura: p.height,
          peso: p.mass,
          color_cabello: p.hair_color,
          color_piel: p.skin_color,
          color_ojos: p.eye_color,
          anio_nacimiento: p.birth_year,
          genero: p.gender,
          planeta_natal: p.homeworld,
          peliculas: p.films,
          especies: p.species,
          vehiculos: p.vehicles,
          naves_estelares: p.starships,
          creado: p.created,
          modificado: p.edited,
          url: p.url,
        });
      })[0];

      await dynamodb
        .put({
          TableName: "peopleTable",
          Item: person,
        })
        .promise();

      return {
        status: 200,
        body: {
          person: person,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const getPeopleInDb = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "peopleTable" }).promise();
  const people = result.Items;

  return {
    status: 200,
    body: {
      people: people,
    },
  };
};

const getPerson = async (id) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb
    .get({
      TableName: "peopleTable",
      Key: { id },
    })
    .promise();

  return result;
};

const getUrl = async (url) => {
  response = await axios.get(url);
  return response.data;
};

const getPersonUrl = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    response = await axios.get(`${baseUrl}${id}`);
    return res.status(500).json(response.data);
  } catch (error) {
    return res.status(404).json("person not found");
  }
};

class personModel {
  constructor({
    id = null,
    nombre = null,
    altura = null,
    peso = null,
    color_cabello = null,
    color_piel = null,
    color_ojos = null,
    anio_nacimiento = null,
    genero = null,
    planeta_natal = null,
    peliculas = [],
    especies = [],
    vehiculos = [],
    naves_estelares = [],
    creado = null,
    modificado = null,
    url = null,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.color_cabello = color_cabello;
    this.color_piel = color_piel;
    this.color_ojos = color_ojos;
    this.anio_nacimiento = anio_nacimiento;
    this.genero = genero;
    this.planeta_natal = planeta_natal;
    this.peliculas = peliculas;
    this.especies = especies;
    this.vehiculos = vehiculos;
    this.naves_estelares = naves_estelares;
    this.creado = creado;
    this.modificado = modificado;
    this.url = url;
  }
}

module.exports = {
  addPerson,
  getPeopleInDb,
  getPersonUrl,
};
