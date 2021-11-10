//https://github.com/alcacoop/elasticsearch-scroll-stream
//npm install elasticsearch-scroll-stream --save

const { Client } = require('@elastic/elasticsearch')
const ElasticsearchScrollStream = require('elasticsearch-scroll-stream')

const client = new Client({ node: 'http://192.168.11.182:9200' })

// Create index and add documents here...

// You need to pass the client instance and the query object
// as parameters in the constructor
const es_stream = new ElasticsearchScrollStream(client, {
  index: 'book_smartcn',// replace with your elasticsearch index name
  //type: 'book_smartcn', 
  scroll: '10s',
  size: '1',
  _source: ['id']
});

// Pipe the results to other writeble streams..
es_stream.pipe(process.stdout)//TODO write es documents to mysql

es_stream.on('end', function() {
  console.log("End")
});