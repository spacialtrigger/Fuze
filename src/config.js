// Config loader utility

module.exports = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  agent: {
    name: process.env.AGENT_NAME || 'Fuze',
    version: process.env.AGENT_VERSION || '1.0.0'
  },
  
  api: {
    port: parseInt(process.env.API_PORT) || 3000,
    host: process.env.API_HOST || 'localhost'
  },
  
  github: {
    token: process.env.GITHUB_TOKEN,
    apiUrl: process.env.GITHUB_API_URL || 'https://api.github.com'
  },
  
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/app.log'
  }
};
