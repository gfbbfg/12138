module.export={proxy:{'/api':{target:'http://msearchcdn.kugou.com/',changeOrigin:true,rewrite:path=>path.replace(/^\/api/,'')}}}