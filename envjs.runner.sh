#!/bin/bash

# establish working directory
#cd /Users/evilbyte/Projects/JasmineTest/

# cleanup previous test runs
rm -f test-results/*.xml

# fire up the envjs environment
#java -cp js.jar:jline.jar org.mozilla.javascript.tools.shell.Main -opt -1 envjs.bootstrap.js $@

java -cp lib/js.jar:lib/jline.jar org.mozilla.javascript.tools.shell.Main -opt -1 -f lib/envjs.bootstrap.js -f test.js

