// Logger utility for consistent logging across the application

const fs = require('fs');
const path = require('path');

class Logger {
  constructor(filename) {
    this.filename = filename;
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const dir = path.dirname(this.filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${level}: ${message} ${JSON.stringify(data)}`;
    
    console.log(logMessage);
    
    if (this.filename) {
      fs.appendFileSync(this.filename, logMessage + '\n');
    }
  }

  info(message, data) {
    this.log('INFO', message, data);
  }

  error(message, data) {
    this.log('ERROR', message, data);
  }

  warn(message, data) {
    this.log('WARN', message, data);
  }

  debug(message, data) {
    this.log('DEBUG', message, data);
  }
}

module.exports = Logger;
