let str = document.getElementById('text');
console.log(str);

function deleteTags(str) {
   let result = str.replace("<[^>]*>","")

   return result;
};

console.log(deleteTags(str));
