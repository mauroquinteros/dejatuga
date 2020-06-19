const $form = document.querySelector('.form')
const $counter = document.querySelector('#counter')

fetch('https://dejatuga.herokuapp.com/api/v1/gaa')
.then( response => response.json())
.then( ({data}) => {
  $counter.textContent = data
})

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

$form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const formData = new FormData($form)
  $form.reset()
  const data = {cuenta: formData.get('counter')}

  fetch('https://dejatuga.herokuapp.com/api/v1/counter/cuenta', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(r => r.json())
  .then(({data}) => {
    console.log('data',data)
    swal("Buen Trabajo!", "Gracias por contribuir con tu GAA!", "success");
  });
});