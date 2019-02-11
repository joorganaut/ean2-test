    import { platformServer, renderModuleFactory } from '@angular/platform-server'
    import { enableProdMode } from '@angular/core'
    import * as express from 'express';
    import { writeFileSync, readFileSync } from 'fs-plus';
    import { join } from 'path';
    declare var __dirname;

    const PORT = 5000;
    enableProdMode();

    const app = express();

    let template = readFileSync(join(__dirname, '..', 'src', 'index.html')).toString();

    app.engine('html', (_, options, callback) => {
      const opts = { document: template, url: options.req.url };
    });

    app.set('view engine', 'html');
    app.set('views', 'src')

    app.get('*.*', express.static(join(__dirname, '..', 'src')));

    app.get('*', (req, res) => {
      res.render('index', { req });
    });

    app.listen(PORT, () => {
      console.log(`listening on http://localhost:${PORT}!`);
      console.log(template);
    });