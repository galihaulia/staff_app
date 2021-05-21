const usersDoc = require('./users.docs')
const jobsDoc = require('./jobs.docs')

const allDocs = [usersDoc.default, jobsDoc.default]
let apiDoc = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Staff App Api Documentation',
  },
  servers: [
    {
      url: '',
    },
  ],
  // security: ["bearerAuth"],
  paths: {},
  components: {
    schemas: {
      ErrorResponse: {
        type: 'object',
        properties: {
          statusesId: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
}
allDocs.forEach((doc) => {
  apiDoc.paths = Object.assign(Object.assign({}, apiDoc.paths), doc.paths)
  apiDoc.components.schemas = Object.assign(
    Object.assign({}, apiDoc.components.schemas),
    doc.schema,
  )
})
exports.default = () => {
  return apiDoc
}
