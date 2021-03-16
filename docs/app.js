let inputIn = document.querySelector('.entered_data');
let button = document.querySelector('button');
let out_result = document.querySelector('.data_obtained');

button.onclick = function(){
  let dna = inputIn.value;
    const dnaToRna = (dna) => {
    dna = dna.toLocaleUpperCase().replace(/\s/g,'');
    let rna = '';
      if (dna === '') {
        return 'Ошибка: Пустая строка';
        };
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'G') {
            rna += 'C';
        } else if (dna[i] === 'C') {
            rna += 'G';
        } else if (dna[i] === 'T') {
            rna += 'A';
        } else if (dna[i] === 'A') {
            rna += 'U';
        } else {
          return 'Ошибка: Данные введены неверно';
          };
      };
    return rna;
    };
  const result_rna = dnaToRna(dna);
  out_result.innerHTML = result_rna;
}
  inputIn.value = '';
