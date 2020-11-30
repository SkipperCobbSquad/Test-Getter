const os = require('os');
const puppeteer = require('puppeteer-core');

let MASTER_PATH = '';
OS_TYPE = os.type();
if (OS_TYPE === 'Windows_NT') {
  const edgePaths = require('edge-paths');
  MASTER_PATH = edgePaths.getEdgePath();
} else if (OS_TYPE === 'Linux') {
  const FirefoxProfile = require('firefox-profile');
  const myProfile = new FirefoxProfile();
  MASTER_PATH = myProfile.path();
}