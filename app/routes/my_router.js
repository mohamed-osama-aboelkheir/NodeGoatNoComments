function myRouterHandler(req, res) {
    "use strict";
  
  const url = req.query.url;
    if (url) {
        res.redirect(url);
    } 
    else {
        res.send('Hello World');
    }
}

module.exports = myRouterHandler;
