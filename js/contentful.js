// Contentful

var client = contentful.createClient({
  space: '2lb5n274af5z',
  accessToken: '26d05aa38cc58832a0601357711fb33d124fa3582416f83016125b4661efa837'
})

var imagesDiv = document.getElementById('pushgrid');
var site = document.getElementsByTagName('body')[0];
var projects = [];

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.previewImage) {
      var previewImageUrl = 'https://' + entry.fields.previewImage.fields.file.url;
      var previewImageDiv = document.createElement("div");
      var previewImageLink = document.createElement("a");
      var previewImageFile = document.createElement("img");
      var projectTag = entry.fields.title.replace(/\s/g, '');

      previewImageFile.src = previewImageUrl;
      previewImageLink.href = "#" + projectTag;
      previewImageDiv.setAttribute("class", "grid-item");
      previewImageDiv.setAttribute("id", projectTag);
      previewImageLink.appendChild(previewImageFile);
      previewImageDiv.appendChild(previewImageLink);
      $('.grid').append(previewImageDiv);

      var projectDiv = document.createElement("div");
      var innerDiv = document.createElement("div");
      var contentbox = document.createElement("div");
      var textbox = document.createElement("div");
      var picturebox = document.createElement("div");
      var titlefield = document.createElement("h3");
      var description = document.createElement("p");
      var linkfield = document.createElement("a");
      var backlink = document.createElement("a");

      entry.fields.images.forEach( function(image) {
        var imagediv = document.createElement("div");
        var imageElement = document.createElement("img");
        var ImageUrl = 'https://' + image.fields.file.url;

        imageElement.src = ImageUrl;
        imagediv.classList.add("slide");

        imagediv.appendChild(imageElement);
        picturebox.appendChild(imagediv);
      });

      titlefield.innerHTML = entry.fields.title;
      description.innerHTML = entry.fields.description;
      linkfield.innerHTML = entry.fields.linktext;
      linkfield.setAttribute("href", entry.fields.link);
      linkfield.setAttribute("target", "_blank");
      backlink.setAttribute("href", "#Portfolio");
      backlink.innerHTML = '<br><br>Zurück<br><br>';
      projectDiv.classList.add("content", projectTag);
      innerDiv.classList.add("inner");
      contentbox.classList.add("contentbox", "projectbox");
      textbox.classList.add("textbox");
      picturebox.classList.add("picturebox", "p-" + projectTag)

      textbox.appendChild(titlefield);
      textbox.appendChild(description);
      if(entry.fields.link) {
        textbox.appendChild(linkfield);
      }
      textbox.appendChild(backlink);
      contentbox.appendChild(textbox);
      contentbox.appendChild(picturebox);
      innerDiv.appendChild(contentbox);
      projectDiv.appendChild(innerDiv);
      site.appendChild(projectDiv);

      var projectString = '.' + projectTag;
      projects.push(projectTag);
      sitemap['#' + projectTag] = function() { $(projectString).addClass('visible');}
    }
  })
})
