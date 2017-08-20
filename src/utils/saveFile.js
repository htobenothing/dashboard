export function saveFile(data,filename){
  console.log('data')

  let file = new Blob([data],{type:"text/plain;charset=utf-8"})

  // create element, its href is the file URL
  let a = document.createElement('a');
  let url = URL.createObjectURL(file)
  a.href = url
  // set the filename
  a.download = filename; 
  // make invisiable
  a.style.display = 'none';

  // append to the document
  document.body.appendChild(a);

  console.log("Click")
  // fire click event, to download
  a.click();
  // delete

  // setTimeout(function() {
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);  
  // }, 0); 

}