      function loadIframeCss(){
            const iframeContainer = document.querySelector("[name='intercom-messenger-frame']")
            iframeContainer.addEventListener('click', function() {
              // console.log('Div was clicked!');
            });

            var style = document.createElement('style');
            style.type = "text/css";
            style.textContent =
              '#spaces-home > div > div > div > div > div > div > div > div {' +
              '  top: 20% !important;' +
              '}' 
            ;

            iframeContainer.contentDocument.head.appendChild(style);

            const iframeContainer2 = document.querySelector("[name='intercom-launcher-frame']")
            iframeContainer2.addEventListener('click', function() {
              console.log('Div was clicked!');
            });

            var style1 = document.createElement('style');
            style1.type = "text/css";
            style1.textContent =
              '#intercom-container .intercom-launcher div img {' +
              '   max-width: 165px !important;' +
              '   max-height: 165px !important;' +
              '}' +
              '.intercom-launcher {' +
              '   width: 165px !important;' +
              '   height: 165px !important;' +
              '}' +
              '.intercom-launcher { background: none !important }' +
              '#intercom-container .intercom-launcher div svg path { fill: #0d6efd; } '
            ;

            iframeContainer2.contentDocument.head.appendChild(style1);
            
        }


        waitForContainer("div.intercom-with-namespace-d8cv7q", function(){
          loadIframeCss();
        });

        waitForContainer("[name='intercom-messenger-frame']", function(){
          loadIframeCss();
        });
