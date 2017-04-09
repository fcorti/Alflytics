function renderMenu () {

  // Urls and paths.
  var basePath = "/pentaho/plugin";
  var relativePath = "/plugin";
  var alflyticsPath = basePath + "/Alflytics";
  var alflyticsRelativePath = relativePath + "/Alflytics";
  var alflyticsApiPath = alflyticsPath + "/api";
  var alflyticsApiRelativePath = alflyticsRelativePath + "/api";

  // Current page path.
  var pagePaths = "/main|/configure|/install|/extract|/check|/publish|/about";
  var pagePath = location.pathname;
  pagePath = pagePath.substring(alflyticsApiPath.length);
  pagePath = pagePath.toLowerCase();

  // Home.
  document.write("<li " + (pagePath == "/main"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/main"  ? "" +  alflyticsApiPath +  "/main" : "#") + "\" " + (pagePath == "/main"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Home</a></li>");

  // Install.
  document.write("<li " + (pagePath == "/install"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/install"  ? alflyticsApiPath + "/install" : "#") + "\" " + (pagePath == "/install"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<strong>1.</strong> Install</a></li>");

  // Configure.
  document.write("<li " + (pagePath == "/configure"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/configure"  ? alflyticsApiPath + "/configure" : "#") + "\" " + (pagePath == "/configure"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<strong>2.</strong> Configure</a></li>");

  // Extract.
  document.write("<li " + (pagePath == "/extract"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/extract"  ? alflyticsApiPath +  "/extract" : "#") + "\" " + (pagePath == "/extract"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<strong>3.</strong> Extract</a></li>");

  // Check.
  document.write("<li " + (pagePath == "/check"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/check"  ? alflyticsApiPath +  "/check" : "#") + "\" " + (pagePath == "/check"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<strong>4.</strong> Check</a></li>");

  // Publish.
  document.write("<li " + (pagePath == "/publish"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/publish"  ? alflyticsApiPath +  "/publish" : "#") + "\" " + (pagePath == "/publish"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<strong>5.</strong> Publish</a></li>");

  // About.
  document.write("<li " + (pagePath == "/about"  ? "style=\"background-color: #A7CCE1;\"" : "") + ">");
  document.write("<a href=\"" + (pagePath != "/about"  ? alflyticsApiPath +  "/about" : "#") + "\" " + (pagePath == "/about"  ? "style=\"color: white;\"" : "") + ">");
  document.write("<span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span> About</a></li>");

} 
