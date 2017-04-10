<?php
/*
Kevin Froman - Easy IPFS: easily interact with IPFS in php via this simple API
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
function cat($hash){
    $gotData = '';

    $server = curl_init();

    curl_setopt($server, CURLOPT_URL, 'http://127.0.0.1:5001/api/v0/cat?arg=' . $hash);

    curl_setopt($server, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($server, CURLOPT_BINARYTRANSFER, false);

    $gotData = curl_exec($server);
    
    curl_close($server);

    return $gotData;
}

function resolve($name){
    $gotData = '';
    $json = '';

    $server = curl_init();

    curl_setopt($server, CURLOPT_URL, 'http://127.0.0.1:5001/api/v0/name/resolve?arg=' . $name);
    
    curl_setopt($server, CURLOPT_RETURNTRANSFER, true);

    $gotData = curl_exec($server);

    $gotData = json_decode($gotData, true);

    if (isset($gotData['Path'])){
        $gotData = str_replace('/ipfs/', '', $gotData['Path']);
    }
    else{
        $gotData = 'invalid';
    }
    curl_close($server);

    return $gotData;
}

?>
