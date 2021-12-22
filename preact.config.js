config.module.loaders[4].include = [
    path.resolve(__dirname, 'src/pages'),
    path.resolve(__dirname, 'src/features'),
    path.resolve(__dirname, 'src/style'),
    path.resolve(__dirname, 'src/layout')
];

config.module.loaders[5].exclude = [
    path.resolve(__dirname, 'src/pages'),
    path.resolve(__dirname, 'src/features'),
    path.resolve(__dirname, 'src/style'),
    path.resolve(__dirname, 'src/layout')
];