/*
Kevin Froman - IPFS Comments. A distributed comment system for static websites
Copyright (C) 2017 Kevin Froman

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

window.onerror = function(message, url, lineNumber){
  switch (message){
    case 'Error: Unknown ASCII armor type':
      alert('Not a pgp message');
    break;
  }
  return true;
}

var ipns = 'QmTNjTQy6sGFG39VSunS4v1UZRfPFevtGzHwr2h1xfa5Bh'; // IPNS for comments

var gateways = ['gateway.ipfs.io', '127.0.0.1:8080']; /* Domain and port of ipfs gateway, protocol is assumed and forced to be https except in the case of 127.0.0.1*/
var inserts = ['crypto.chaoswebs.net/ipfs-comments/insert.php']; /* domain and port and path of insert script, forced to be https*/

var testImg = 'http://127.0.0.1:5001/ipfs/QmU3o9bvfenhTKhxUakbYrLDnZU7HezAVxPM6Ehjw9Xjqy/8f70e85e85c6a23c75c6862292d871c0.png';

var localIPFS = false;


// Hacky way to detect if a user has IPFS installed
var img = document.createElement('img');

img.src =  testImg;

img.onload = function() {
    localIPFS = true;
};


$.get( 'https://' + inserts[0], function( data ) {
  //alert( "Data Loaded: " + data );
  });
