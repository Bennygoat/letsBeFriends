// 有空家preview spinner
// show preview
photoFileUploader.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    preview.src = reader.result;
  };
});

// submit friends info, photo
