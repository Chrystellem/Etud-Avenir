const path = require('path');

module.exports = {
    mode: 'development',

    /*
     * Ajouter ci-dessous les fichiers ts � compiler ind�pendamment des autres (import = le fichier � importer, filename = le fichier JS de sortie dans le dossier /dist)
     */
    entry: {
        home: { import: './wwwroot/src/exemple.tsx', filename: 'bundledExample.js' },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
};