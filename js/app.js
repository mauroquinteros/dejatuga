function ga() {
  let doc = new jsPDF();
  var img = new Image();
  img.src = "img/ga.jpg";
  console.log(img);
  doc.setFontSize(40);
  doc.text(40, 20, "Gracias por dejar tu ga");
  doc.addImage(img, "jpg", 10, 40, 180, 180);
  doc.save("CertifiGa.pdf");
}

const $form = document.querySelector('.form')
$form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const formData = new FormData($form)
  $form.reset()
  fetch('https://dejatuga.herokuapp.com/api/v1/counter/cuenta', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(r => r.json())
  .then(data => console.log('data',data));
});