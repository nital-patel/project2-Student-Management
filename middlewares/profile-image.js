const fetch = require('isomorphic-fetch');

const getProfileImage = (req, res, next) => {
    fetch(`https://randomuser.me/api/?gender=${req.body.gender}`)
        .then((fetchRes) => {
            return fetchRes.json();
        }).then((jsonFetchRes) => {
            req.body.profile_image = jsonFetchRes.results[0].picture.large;
            next();
    });
};

module.exports = {
    getProfileImage
};