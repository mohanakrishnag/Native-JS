function createSecretHolder(secret) {
    return {
        setSecret: function (value) { secret = value; },
        getSecret: function () { return secret; }
    };
}