#!/bin/bash

: <<'END'

GetClosePrices.sh

script meant to act as management for ruby
script GetClosePrices.rb and casperjs script
GetClosePrices.js

GetClosePrices.rb - Curls YF stock Historical Prices page,
 greps csv download link, and creates a casperInput.txt file
 for GetClosePrices.js

GetClosePrices.js - downloads csv for the stock

END

./GetClosePrices.rb
casperjs --ignore-ssl-errors=true --ssl-protocol=any --web-security=no GetClosePrices.js
