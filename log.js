const log4js = require('log4js');
// log the cheese logger messages to a file, and the console ones as well.
log4js.configure({
  appenders: {
    mainLog: { 
      type: 'file', 
      filename: './logs/main.log',
      // maxLogSize: 1 * 1024 * 1024, // = 10Mb
      maxLogSize: 1 * 1024 * 1024 , // = 10Mb
      backups: 3, // keep five backup files
      // compress: true, // compress the backups
      keepFileExt:true,
      encoding: 'utf-8',
      mode: 0o0640,
      flags: 'a'
    },
    busiLog: { type: 'file', filename: './logs/busi.log' },
    console: { type: 'console' }
  },
  categories: {
    mainLog: { appenders: ['mainLog','console'], level: 'trace' },
    busiLog: { appenders: ['busiLog','console'], level: 'trace' },
    default: { appenders: ['busiLog','console'], level: 'trace' },
  }
});

const mainLog = log4js.getLogger('mainLog');
const busiLog = log4js.getLogger('busiLog');


for(var i=0;i<100000;i++){
  mainLog.debug(Date.now())
}