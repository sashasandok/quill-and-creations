import path from 'path'
import swaggerJsDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJsDoc({
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
  apis: [path.join(__dirname, '..', '*/**.ts'), '../../swagger.ts'],
})
