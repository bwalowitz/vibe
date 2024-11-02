<script>
  var css = `
  html, body, #wrap { 
    background-color: black !important; 
    font-family: 'Inter', sans-serif !important;
    color: #fff !important;
  }

  h2 { 
    font-size: 36px !important; 
    color: white !important;
  }

li {
color: white !important;
}

  /* Add any other CSS rules here */ 
`;

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);   


// Try to remove inline background styles (keep this from before)
const body = document.body;
body.style.background = 'none'; 
body.style.backgroundColor = 'black'; 
</script>
