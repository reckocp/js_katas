def age_verifier(arr)
  arr.each do |age|
    if age >= 21
      puts "You are #{age}. Proceed."
    else
      puts "You are #{age}. You are too young."
    end
  end
end

age_verifier([10,20,30])
