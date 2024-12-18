
  var css = `
  html, body, #wrap { 
    font-family: 'Inter', sans-serif !important;
  }

  h2 { 
    font-size: 36px !important; 
  }



  /* Add any other CSS rules here */ 

  /* Agent Grid Layout Styles */
#agents ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    padding: 0;
    margin: 0;
}

#agents li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

#agents li:hover {
    transform: translateY(-5px);
    text-align: center;
}

#agents .h-28.w-28 {
    height: 200px;
    width: 200px;
    margin-bottom: 1rem;
    text-align: center;
}

#agents .flex.flex-col.pl-6 {
    padding: 0;
    width: 100%;
    text-align: center;
}

#agents img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    #agents ul {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;

        text-align: center;
    }
    
    #agents .h-28.w-28 {
        height: 150px;
        width: 150px;
    }
}

@media (max-width: 480px) {
    #agents ul {
        grid-template-columns: 1fr;
    }
}
`;

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);   


// Try to remove inline background styles (keep this from before)
const body = document.body;
body.style.background = 'none'; 
body.style.backgroundColor = 'white'; 

