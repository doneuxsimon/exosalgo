  
const hoppers = ['Axel', 'Bérengère', 'Marie', 'Joëlle',
                'Jean', 'Baudouin', 'Richard', 'Khalid',
                'Guillaume', 'Wassim', 'Élise', 'Madeline',
                'Matei', 'Audrey', 'Florian', 'Cemil',
                'Abdelilah', 'Agnès', 'Rachid', 'Dena',
                'Ayoube', 'Sifedine', 'Daniel', 'Maxime',
                'Aurore', 'Igor', 'Thomas', 'Alexandre']

module.exports = {
  hoppers
}

const splitClasses = becoders => {
  const shuffled = becoders.sort(() => Math.random() - .5)
  const halfLen = (becoders.length / 2) | 0

  return [
    shuffled.slice(0, halfLen),
    shuffled.slice(halfLen, becoders.length)
  ]
}

splitClasses(hoppers)
.forEach((c, i) => {
  console.log(`Classe ${i+1}: ${c.join(', ')}\n\n`)
})