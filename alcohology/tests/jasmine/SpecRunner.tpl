<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner</title>
  <link rel="shortcut icon" type="image/png" href="<%= temp %>/jasmine_favicon.png">
<% css.forEach(function(style){ %>
  <link rel="stylesheet" type="text/css" href="<%= style %>">
  <script src="ext/build/ext-all-debug.js"></script>
<% }) %>

</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
      enabled: true,
      paths: {
        'Alcohology': 'app'
      }
    });
  </script>

<% with (scripts) { %>
  <% [].concat(polyfills, jasmine, boot, vendor, helpers, src, specs,reporters).forEach(function(script){ %>
  <script src="<%= script %>"></script>
  <% }) %>
<% }; %>
</body>
</html>