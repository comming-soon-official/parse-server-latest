import Parse from 'parse/dist/parse.min.js'

// Initialize Parse
Parse.initialize('myAppId', 'myJavascriptKey')
Parse.serverURL = 'http://localhost:1337/parse'

export default Parse
