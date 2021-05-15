import cuid from 'cuid';
import App from './app';
// import './assets/css/styles.css';
import('./assets/css/mystyles.scss');
const startupArgs = [cuid()];
const app = new App(startupArgs);
app.Start();
