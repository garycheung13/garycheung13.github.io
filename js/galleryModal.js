const gdProjects = {
  bgpa: {
    title: "Building Girls Protective Assets",
    description:
      "<p>Layout design and typesetting for a 56-page book on designing girls\u2019 education programs in developing countries. Project was done as part of my role as a graphic designer for Population Council.</p>",
    images:
      '<img src="../images/graphic_design/bgpa_outside_1.png" alt="" class="mb-5"><img src="../images/graphic_design/bgpa_inside_1.png" alt="" class="mb-5"><img src="../images/graphic_design/bgpa_inside_2.png" alt="">',
  },
  bookmarks: {
    title: "Ending Eclampsia Bookmarks",
    description:
      "<p>Promotional bookmarks for created for Population Council\u2019s \u201CEnding Eclampsia\u201D campaign.</p>",
    images:
      '<img src="../images/graphic_design/bookmark_full_mock.jpg" class="mb-5" alt=""><img src="../images/graphic_design/bookmarks_full.png" alt="">',
  },
  ark: {
    title: "Deadly Weather Visualization",
    description:
      "<p>For my internship at Arkadium, I designed a visualization illustrating the effects of deadly weather</p>",
    images: '<img src="../images/graphic_design/weather_mockup.png" alt="" class="mb-5"><img src="../images/graphic_design/weather1.png" alt="" class="mb-5"><img src="../images/graphic_design/weather2.png" alt="" class="mb-5"><img src="../images/graphic_design/weather3.png" alt="" class="mb-5">',
  },
  tea: {
    title: "Website Design for a online tea shop",
    description: "<p>As a design exercise, I designed the same website for a fictional tea shop using two different design styles (modern and postmodern).</p>",
    images: '<img src="../images/graphic_design/modern_tea.jpg" alt="" class="mb-5"><img src="../images/graphic_design/postmo_tea.jpg" alt="">'
  },
  pineapple: {
    title: "Pineapple Poster",
    description:
      "<p>A poster combining a botanical illustration of a pineapple with typography. The poster’s copy “Travelers Welcomed” was based on the symbolic meaning of the pineapple (welcome or hospitality) along with an low-saturation color palette combined with the clear contrasting color for the typography.</p>",
    images: '<img src="../images/graphic_design/pineapple.png" alt="" class="mb-5">',
  },
  internship: {
    title: "Internship Infographic",
    description: "<p>I designed infographic going over the highlights of my summer internship at Arkadium. The infographic begins in New York and ends in Russia to illustrate my collaboration with the company's Russian office.</p>",
    images: '<img src="../images/graphic_design/intern_info.png" alt="" class="mb-5">',
  },
  coffee: {
    title: "Coffee Infographic",
    description: "<p>A print infographic about history and fun facts about coffee with an emphasis on typography.</p>",
    images: '<img src="../images/graphic_design/coffee_full.png" alt="" class="mb-5">',
  },
  sushi: {
    title: "Sushi Alphabet",
    description: "<p>I designed a tabloid-sized poster which showed off a type of sushi for each letter of the alphabet. The drawing for each letter was hand-drawn Photoshop and meant to evoke the aesthetic style of an Japanese ink painting.</p>",
    images: '<img src="../images/graphic_design/sushi_poster_full.png" alt="" class="mb-5">',
  },
  lsa: {
    title: "Psych Study Participation Poster",
    description: "<p>A flyer encouraging research participation in a study being conducted by the University of Michigan’s psychology department. I also designed a sticker to go with the poster.</p>",
    images: '<img src="../images/graphic_design/owl_poster.png" alt="" class="mb-5"><img src="../images/graphic_design/owl_sticker.png" alt="">'
  }
};

$("#gd-modal").on("show.bs.modal", function (e) {
  const button = $(e.relatedTarget);
  const recipient = button.data("project");

  const modal = $(this);
  modal.find(".gd-item__heading").text(gdProjects[recipient].title);
  modal
    .find(".gd-item__desc")
    .append(JSON.parse(JSON.stringify(gdProjects[recipient].description)));
  modal
    .find(".gd-item__images")
    .append(JSON.parse(JSON.stringify(gdProjects[recipient].images)));
});

// get rid of the inserted html when the modal closes
$("#gd-modal").on("hide.bs.modal", function () {
  console.log("called");
  $(".gd-item__desc").empty();
  $(".gd-item__images").empty();
});
