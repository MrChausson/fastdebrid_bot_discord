//Goes directly to get api of fastdebrid.tk
const { link } = require('fs');
const https = require('https')

function get_fastdebrid_link(link) {
const url = 'https://fastdebrid.tk/get_link.php?link=' + link; 
return (url);
}

module.exports = { get_fastdebrid_link }