const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'http://localhost:8081/api/v2/api-docs',
  serversPath: './servers'
})
