const fetchImages = () =>
  //call azure function from getimages
  fetch("/api/getimages", {
    cache: "no-store",
  }).then((res) => res.json());

export default fetchImages;