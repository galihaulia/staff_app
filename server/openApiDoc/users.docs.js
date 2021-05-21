const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = 'UserController'
const schema = {
  usersSchema: {
    title: 'All Users',
    type: 'object',
    properties: {
      sumOfUser: {
        type: 'integer',
      },
      users: {
        type: 'array',
        items: {
          properties: {
            id: {
              type: 'integer',
            },
            fullName: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            job: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  userSchema: {
    title: 'User',
    properties: {
      id: {
        type: 'integer',
      },
      fullName: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      job: {
        type: 'string',
      },
    },
  },
  userCreation: {
    title: 'User Create',
    properties: {
      full_name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      job_id: {
        type: 'integer',
      },
    },
  },
  userUpdate: {
    title: 'User Modification',
    properties: {
      user_id: {
        type: 'integer',
      },
      full_name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      job_id: {
        type: 'integer',
      },
    },
  },
  userDelete: {
    title: 'User Deletion',
    properties: {
      user_id: {
        type: 'integer',
      },
    },
  },
}
const paths = {
  '/api/users': {
    get: {
      tags: [tag],
      parameters: [
        {
          name: 'filter_by_name',
          description: '',
          in: 'query',
          schema: {
            type: 'string',
          },
          required: false,
        },
        {
          name: 'filter_by_job',
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
          description: 'Users',
          content: {
            'application/json': {
              schema: util1.getSchemaResponse(
                'usersSchema',
                'usersSchema',
                'object',
              ),
            },
          },
        },
      },
    },
  },
  '/api/user': {
    get: {
      tags: [tag],
      parameters: [
        {
          name: 'user_id',
          in: 'query',
          schema: {
            type: 'integer',
          },
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'User',
          content: {
            'application/json': {
              schema: util1.getSchemaResponse(
                'userSchema',
                'userSchema',
                'object',
              ),
            },
          },
        },
      },
    },
    post: {
      tags: [tag],
      requestBody: {
        content: {
          'application/json': {
            schema: util1.getSchemaRequest('userCreation'),
          },
        },
      },
      responses: {
        200: {
          description: 'User Create',
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
            schema: util1.getSchemaRequest('userUpdate'),
          },
        },
      },
      responses: {
        200: {
          description: 'User Modification',
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
            schema: util1.getSchemaRequest('userDelete'),
          },
        },
      },
      responses: {
        200: {
          description: 'User Deletion',
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
