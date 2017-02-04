$_mod.def("/marko$4.0.0-rc.12/taglibs/cache/default-cache-manager", function(require, exports, module, __filename, __dirname) { var caches = {};

function createCache() {
    var cache = {};

    return {
        get: function(cacheKey, options, callback) {
            var value = cache[cacheKey];
            if (value !== undefined) {
                return callback(null, value);
            }

            var builder = options.builder;
            builder(function(err, value) {
                if (err) {
                    return callback(err);
                }

                if (value === undefined) {
                    value = null;
                }

                cache[cacheKey] = value;

                callback(null, value);
            });
        }
    };
}

var defaultCacheManager = {
    getCache: function(cacheName) {
        return caches[cacheName] || (caches[cacheName] = createCache());
    }
};

module.exports = defaultCacheManager;
});