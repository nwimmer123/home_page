$(document).ready(function(){

  $(function () {

    var source = $('#portfolio_items-template').html();
    var template = Handlebars.compile(source);

    var context = { 
      portfolio_items: [
        {
        image: "public/images/readitV2.png",
        title: "Solo Project",
        description: "I wanted to try converting a project from Node to Rails and increase functionality.",
        language: "Ruby, JavaScript, HTML, CSS",
        framework: "Bootstrap, Rails",
        library: "jQuery",
        database: "PostgreSQL",
        other: "Git, JSON, Handlebars",
        sitelink: "https://readittogether.herokuapp.com",
        sitename: "Read It v.2",
        githublink: "https://github.com/nwimmer123/readit_rails",
        },
        {
        image: "public/images/type.png",
        title: "Solo Project",
        description: "Improve your typing skills.",
        language: "JavaScript, HTML, CSS",
        framework: "Bootstrap",
        library: "jQuery",
        database: "NA",
        other: "Git",
        sitelink: "http://typetothestars.bitballoon.com",
        sitename: "Type To The Stars",
        githublink: "https://github.com/nwimmer123/typeStars",
        },
                {
        image: "public/images/openWords.png",
        title: "Solo Project",
        description: "I needed to generate arrays of random words and couldn't find one,so I created one.",
        language: "JavaScript, HTML, CSS",
        framework: "Bootstrap, Node",
        library: "jQuery",
        database: "NA",
        other: "Git",
        sitelink: "https://http://openwords.herokuapp.com/",
        sitename: "openWords",
        githublink: "https://github.com/nwimmer123/openWords",
        },
        {
        image: "public/images/adventures.png",
        title: "Solo Project",
        description: 'A user can play and create "Choose Your Own Adventure" stories.',
        language: "Ruby, HTML, CSS",
        framework: "Rails, Bootstrap",
        library: "NA",
        database: "PostgreSQL",
        other: "Git",
        sitelink: "https://adventure-creator.herokuapp.com",
        sitename: "Adventure Creator",
        githublink: "https://github.com/nwimmer123/Adventure_Creator",
        },
        {
        image: "public/images/share.png",
        title: "Group Project",
        description: "Allows neighbors to connect by sharing skills to accomplish tasks.",
        language: "Ruby, HTML, CSS",
        framework: "Rails, Bootstrap",
        library: "NA",
        database: "PostgreSQL",
        other: "Git",
        sitelink: "https://sharetastic.herokuapp.com",
        sitename: "Sharetastic",
        githublink: "https://github.com/kehontas/share",
        },
        {
        image: "public/images/vagabonder.png",
        title: "Group Project",
        description: "A web site to discuss your travels and favorite cities.",
        language: "Ruby, HTML, CSS",
        framework: "Rails, Bootstrap",
        library: "NA",
        database: "PostgreSQL",
        other: "Git",
        sitelink: "http://vagabonders.herokuapp.com",
        sitename: "Vagabonder",
        githublink: "https://github.com/nwimmer123/project_vagabond",
        },
        {
        image: "public/images/andersen.png",
        title: "Freelance Work",
        description: "Site for a structural engineer.",
        language: "JavaScript, HTML, CSS",
        framework: "Bootstrap",
        library: "jQuery",
        database: "NA",
        other: "Git, GoDaddy Hosting",
        sitelink: "http://andersen-engineering.com",
        sitename: "Andersen Engineering",
        githublink: "https://github.com/nwimmer123/andersen-engineering",
        },
        {
        image: "public/images/excel.png",
        title: "Freelance Work",
        description: "Site for an Excel consultant.",
        language: "JavaScript, HTML, CSS",
        framework: "Bootstrap",
        library: "jQuery",
        database: "NA",
        other: "Git, GoDaddy Hosting",
        sitelink: "http://ExcelExcelExcel.com",
        sitename: "ExcelExcelExcel",
        githublink: "https://github.com/nwimmer123/david-excel",
        },

      ]
    };

    var theCompiledHtml = template(context);

    $('.content-placeholder').html(theCompiledHtml);
    
    // $(document.body).append(theCompiledHtml);

  });

});