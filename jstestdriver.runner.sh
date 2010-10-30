# cleanup previous test runs
rm -f test-results/*.xml

#run all tests and output xml reports
java -jar lib/jstestdriver-1.2.2.jar --tests all --testOutput test-results