const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = 'JobController'
const schema = {
  jobsSchema: {
    title: 'All Jobs',
    type: 'object',
    properties: {
      sumOfJob: {
        type: 'integer',
      },
      jobs: {
        type: 'array',
        items: {
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  jobCreation: {
    title: 'Job Create',
    properties: {
      job_name: {
        type: 'string',
      },
    },
  },
  jobUpdate: {
    title: 'Job Modification',
    properties: {
      job_id: {
        type: 'integer',
      },
      job_name: {
        type: 'string',
      },
    },
  },
  jobDelete: {
    title: 'Job Deletion',
    properties: {
      job_id: {
        type: 'integer',
      },
    },
  },
}
const paths = {
  '/api/jobs': {
    get: {
      tags: [tag],
      parameters: [
        {
          name: 'filter_by_name',
          description: 'example: HR, PM, Backend, Frontend',
          in: 'query',
          schema: {
            type: 'string',
          },
          required: false,
        },
      ],
      responses: {
        200: {
          description: 'All Jobs',
          content: {
            'application/json': {
              schema: util1.getSchemaResponse(
                'jobsSchema',
                'jobsSchema',
                'object',
              ),
            },
          },
        },
      },
    },
  },
  '/api/job': {
    post: {
      tags: [tag],
      requestBody: {
        content: {
          'application/json': {
            schema: util1.getSchemaRequest('jobCreation'),
          },
        },
      },
      responses: {
        200: {
          description: 'Job Create',
          content: {
            'application/json': {
              schema: {
                properties: {
                  message: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
    put: {
      tags: [tag],
      requestBody: {
        content: {
          'application/json': {
            schema: util1.getSchemaRequest('jobUpdate'),
          },
        },
      },
      responses: {
        200: {
          description: 'Job Modification',
          content: {
            'application/json': {
              schema: {
                properties: {
                  message: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: [tag],
      requestBody: {
        content: {
          'application/json': {
            schema: util1.getSchemaRequest('jobDelete'),
          },
        },
      },
      responses: {
        200: {
          description: 'Job Deletion',
          content: {
            'application/json': {
              schema: {
                properties: {
                  message: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

exports.default = { schema, paths }
