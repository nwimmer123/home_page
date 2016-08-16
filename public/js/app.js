$(document).ready(function(){

  $(function () {

    var source = $('#portfolio_items-template').html();
    var template = Handlebars.compile(source);

    var context = { 
      portfolio_items: [
        {
        image: "public/images/read_it.png",
        title: "Solo Project",
        description: "Friends can share and discuss their favorites books.",
        language: "JavaScript, HTML, CSS",
        framework: "Bootstrap, Node, Express",
        library: "jQuery",
        database: "Moongoose, MongoDB",
        other: "Git, JSON, Handlebars",
        sitelink: "https://mysterious-basin-2931.herokuapp.com",
        sitename: "Read It",
        githublink: "https://github.com/nwimmer123/project-01",
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
        description: "Allows neighbors to connect by sharing skills to accomplish tasks by trading skills rather than paying for services.",
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
        githublink: "https://github.com/bw-giraffe/project_vagabond",
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
        sitelink: "https://andersen-engineering.com",
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
        sitelink: "https://ExcelExcelExcel.com",
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