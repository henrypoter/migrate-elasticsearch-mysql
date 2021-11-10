# migrate-elasticsearch-mysql
Migrate data from mysql to elasticsearch


Java version & node js version provided.

When use the java version, you use RestHighLevelClient.


'''
curl -X GET "192.168.11.182:9200/book_smartcn/_search?scroll=1m&pretty" -H 'Content-Type: application/json' -d'
{
  "sort": [
    "_doc"
  ]
}'
'''