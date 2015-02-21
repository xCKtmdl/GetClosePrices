def run(command, input = '')
IO.popen(command, 'r+') do |io |
        io.puts input
    io.close_write
return io.read
end
end


def delFiles
# delete file output.html if it exists
if File.file? 'output.html'
run 'rm output.html', ''
end

if File.file? 'casperInput.txt'
run 'rm casperInput.txt', ''
end

if File.file? 'nice.csv'
run 'rm nice.csv', ''
end
end
