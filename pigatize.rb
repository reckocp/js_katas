def pigatize(text)
  if starts_with_vowel?(text)
    puts text + "way"
  else
    puts text +"ay"
  end
end

def starts_with_vowel?(text)
  vowels = %w[a e i o u]
  if vowels.include?(text[0].downcase)
    true
  else
    false
  end
end


puts pigatize("alaska")
