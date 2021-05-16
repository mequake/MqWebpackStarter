import cuid from 'cuid';
import App from './app';
// import './assets/css/styles.css';
import('./assets/css/mystyles.scss');
const startupArgs = [cuid(), 'mq.local', 8080];
const app = new App(startupArgs);
app.Start();
