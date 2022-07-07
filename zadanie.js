const array1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const array2 = [160, 3, 1719, 19, 11, 13, -21];
const array3 = [2,3];
function search($integers){
    if($integers.length <3){
        return 'Zbyt krótka długość tablicy! Powinna wynosić conajmniej 3!';
    }
    else{
        let evenResult = $integers.filter(el => el % 2 === 0);
        let oddResult = $integers.filter(el => el % 2 === 1)
        return (evenResult.length ===1) ? evenResult[0]: oddResult.length===1 ? oddResult[0]:"Tablica nie posiada dokładnie 1 odmiennego elementu od reszty(parzystego lub nieparzystego)!";
    }

  }
  console.log(search(array1));
  console.log(search(array2));
  console.log(search(array3));