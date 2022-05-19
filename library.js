// ES5 object oriented library using prototypes

// constructor
function libraryHTTP() {
    this.http = new XMLHttpRequest(); 
}

// GET Request
libraryHTTP.prototype.get = function(url, callback) { 
    this.http.open('GET', url, true); 

    let self = this; // "this" in the if statement below is out of scope- so we need to use self
    this.http.onload = function() {
    if(self.http.status === 200) { // this.http.status is out of scope. We must declare another variable above (self)
        callback(null, self.http.responseText); // null will be the first parameter to be passed back (error)
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}



// POST Request 
libraryHTTP.prototype.post = function(url, data, callback) { // this takes data as a parameter, we are adding AND sending data
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); // value of application/json: it is the data type we are working with

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText); // null is passing the error first 
    } // No need to check the status since we are posting data

    this.http.send(JSON.stringify(data)); // our data will be a regular js object. so to send this data we need to use JSON.stringify() method
}


// PUT Request 
libraryHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}



// DELETE Request 
libraryHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
    if(self.http.status === 200) {
        callback(null, 'Post Deleted'); // the response is gonna be an empty object cause we are deleting a post
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();

}