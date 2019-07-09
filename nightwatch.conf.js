module.exports = {
    "src_folders" : ["tests"],
    "page_objects_path" : ["page-objects"],
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules/.bin/chromedriver",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
    //     desiredCapabilities: {
    //       browserName: 'chrome',
    //       javascriptEnabled : true,
    //       acceptSslCerts : true,
    //       chromeOptions: {mobileEmulation: {
    //       deviceMetrics: {width: 360, height: 640, pixelRatio: 3},
    //     }
    //   }
    // }
  }
}
}