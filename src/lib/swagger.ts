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
  },
  apis: [path.join(__dirname, '..', '*/**.ts'), '../../swagger.ts'],
})
