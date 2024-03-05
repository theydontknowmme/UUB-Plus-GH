self.__uv$config = {
    prefix: '/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.handler.js',
    bundle: 'https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.bundle.js',
    config: 'https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
