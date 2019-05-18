import * as angular from 'angular';

// Polyfills and vendor files
import './polyfills';
import './vendor';
// Global styles
import './index.scss';
// Main module
import { appModule } from './app/app.module';

// Bootstrap the application
angular.module('application.bootstrap', [appModule]).name;
