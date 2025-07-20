import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quill and Creations API with MongoDB Basic Auth',
      version: '1.0.0',
      description: 'A CRUD Quill and Creations project',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
  },
  apis: [`${__dirname}/controllers/**/*.ts`, `${__dirname}/controllers/**/*.js`],
})
