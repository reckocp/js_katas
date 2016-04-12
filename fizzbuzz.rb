def fizzbuzz(num)
  if num % 15 == 0
    puts "Fizzbuzz"
  elsif num % 5 == 0
    puts "Buzz"
  elsif num % 3 == 0
    puts "Fizz"
  else
    num
  end
end

puts fizzbuzz(1)
