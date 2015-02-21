#!/usr/bin/env ruby


# GetClosePrices.rb
# author: Aaron Gabriel

# This ruby script is the first part
# of the bash script GetClosePrices.sh

# First this script is called to scrape
# a stock's YF page for the csv download link.
# The link gets placed into a input file for casperjs
# (I ran into problems passing it from here as a command line
# argument to casperjs. For some reason it tries to open it
# as a script)
# and then the casperjs script GetClosePrices.js reads the
# input file for the csv download url.

# functions used from aux.rb: run, DelFiles
# run - executes shell commands
# DelFiles - checks for and deletes output.html, casperInput.txt, and nice.csv

require '/home/code/ruby-curl/aux.rb'

delFiles

# curlURL - string which is the url we will curl from
# in the laster application, obviously some sort of list of URLs will be iterated over
# but for this example, this is the YF with the prices for the stock,
# and we will grep this thing for csv download link


# originally I thought I would do all the scraping with casperjs,
# but I have found it is much easier to do the actual scraping with
# curl in Ruby.
# Then on the flip-side, it turned out I had a problem curling the
# actual csv links from this site to save, but casperjs proved useful
# for that part.

curlURL="http://finance.yahoo.com/q/hp?s=ALKM+Historical+Prices"

# curl the page from YF into local file output.html
run 'curl ' + curlURL + '>output.html', ''


# read file into string fileString
if File.file? 'output.html'
fileString=""
file = File.open("output.html")
file.each {|line|
fileString << line
}
end

# grep (match by regex) the output.html file for the
# csv download link
fileString =~ /<a href="([^"]+)csv"/
href = $1 + "csv"

file1=File.open('casperInput.txt', 'w')

# input file to casper is expected to be input line, \n, delimited
file1.puts curlURL + "\n" + href

