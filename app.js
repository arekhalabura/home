function sendCommand(command) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.31/" + command, true);
    xhr.send();
}
