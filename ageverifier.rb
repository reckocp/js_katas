def age_verifier(age)
  if age < 21
    print "You are too young."
  else
    print "Proceed."
  end
end

puts age_verifier(20)
