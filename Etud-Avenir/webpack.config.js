const path = require('path');

module.exports = {
    mode: 'development',

    /*
     * Ajouter ci-dessous les fichiers ts à compiler indépendamment des autres (import = le fichier à importer, filename = le fichier JS de sortie dans le dossier /dist)
     */
    entry: {
        import: { import: './wwwroot/src/import.tsx', filename: 'bundledImport.js' },
        login: { import: './wwwroot/src/shared.tsx', filename: 'bundledShared.js' },
        profile: { import: './wwwroot/src/profile.tsx', filename: 'bundledProfile.js' },
        database: { import: './wwwroot/src/database.tsx', filename: 'bundledDatabase.js' },
        research: { import: './wwwroot/src/research.tsx', filename: 'bundledResearch.js' },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx', 'scss'],
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
};