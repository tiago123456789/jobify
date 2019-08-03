module.exports = {
    isAuthenticated(request, response, next) {
        if (request.session.user) {
            next();
        } else {
            response.redirect("/auth");
        }
    }
}