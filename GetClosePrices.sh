#!/bin/bash

: <<'END'

Comments

END

./GetClosePrices.rb
casperjs --ignore-ssl-errors=true --ssl-protocol=any --web-security=no GetClosePrices.js
