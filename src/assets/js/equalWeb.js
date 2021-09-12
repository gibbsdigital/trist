// EqualWeb Accessibility Checker Browser Ext Script
// www.equalweb.com

window.interdeal = {
    "sitekey": "d96bb443d494dac91ccfa12512e79818",
    "Position": "Left",
    "Menulang": "EN",
    "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
    },
    "btnStyle": {
        "vPosition": [
            "80%",
            null
        ],
        "scale": [
            "0.6",
            "0.6"
        ],
        "icon": {
            "type": 11,
            "shape": "circle"
        }
    }
};
(function(doc, head, body){
    var coreCall             = doc.createElement('script');
    coreCall.src             = 'https://cdn.equalweb.com/core/3.0.3/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-7eVrsWwFQXxbr/QB7Zt+wVSQqLq8ulYJHplOZ5rv/8cre3RPseIPBmSERndeTFrpHRX8eDnIzwNckqynpi6IfA==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
