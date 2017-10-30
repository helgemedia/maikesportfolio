// Contentful

var client = contentful.createClient({
  space: '2lb5n274af5z',
  accessToken: '26d05aa38cc58832a0601357711fb33d124fa3582416f83016125b4661efa837'
})

var imagesDiv = document.getElementById('pushgrid')

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.previewImage) {
      var previewImageUrl = 'https://' + entry.fields.previewImage.fields.file.url;
      var previewImageDiv = document.createElement("div");
      var previewImageLink = document.createElement("a");
      var previewImageFile = document.createElement("img");

      previewImageFile.src = previewImageUrl;
      previewImageLink.href = "#Placeholder";
      previewImageDiv.setAttribute("class", "grid-item");
      previewImageDiv.setAttribute("id", entry.sys.id);
      previewImageLink.appendChild(previewImageFile);
      previewImageDiv.appendChild(previewImageLink);
      $('.grid').append(previewImageDiv).masonry('appended', previewImageDiv);
      console.log(entry);
    }
  })
})