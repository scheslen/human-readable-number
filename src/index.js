module.exports = function toReadable (number) {
  let value=parseInt(number);
  if ( isNaN(value)) return 'No number';
  if (value===0) return 'zero';

  const a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const b = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
  const c = ['','thousand ','million ','billion ','trillion '];

  let sReadable='';

  let sValue=value.toString().split('');
  if (value<0) {sValue=sValue.slice(1);}
  let qDigit=sValue.length;

  let n1,n2,n3;

  let iRank=0;
  let iDigit=0;
  while (qDigit-iDigit>0){
    if (iRank>c.length-1){return 'too much'}
    sReadable=c[iRank++]+sReadable;
    n1=Number(sValue[qDigit-iDigit-1]);
    if (qDigit-iDigit>1){
      n2=Number(sValue[qDigit-iDigit-2]+sValue[qDigit-iDigit-1] );
      if (n2<20){
        sReadable=a[n2]+sReadable;
        }
      else {
        n2=Number(sValue[qDigit-iDigit-2]);
        if (n2>0 && n1>0)
           {sReadable=b[n2].trim()+' '+a[n1]+sReadable;}  // -
        else if(n2>0){sReadable=b[n2]+sReadable}
             else {sReadable=a[n1]+sReadable;}
      }
    }
    else{
      sReadable=a[n1]+sReadable;
    }
    if (qDigit-iDigit>2){
      n3=Number(sValue[qDigit-iDigit-3]);
      if (n3>0){sReadable=a[n3]+'hundred '+sReadable;}
    }
    iDigit+=3;
  }

  if (value<0) {sReadable='negative '+ sReadable;}

  return sReadable.trim();
}

