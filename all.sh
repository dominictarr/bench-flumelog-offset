
#echo 'bench file'
#node run.js ./bench-file.js ~/.ssb/flume/log.offset | tee data/file.csv
#echo 'bench blocks'
#node run.js ./bench.js ~/.ssb/flume/log.offset | tee data/blocks.csv
echo 'bench raw log'
node run.js ./bench-log_raw.js ~/.ssb/flume/log.offset | tee data/log.csv
echo 'bench json log'
node run.js ./bench-log_json.js ~/.ssb/flume/log.offset | tee data/json.csv




