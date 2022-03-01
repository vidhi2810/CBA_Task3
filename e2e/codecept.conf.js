exports.config = {
  output: './output',
  helpers: {
    FileSystem: {},
    Puppeteer: {
      show: true,
      restart:false,
      keepBrowserState:true,
      uniqueScreenshotNames: true,
      keepBrowserState: true,
      getPageTimeout: 60000,
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForTimeout: 20000,
      windowSize: '1680x1050',
      waitForAction: 200,
      chrome: {
        args: ['--start-maximized','--no-sandbox','--disable-setuid-sandbox']
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
    AssertWrapper: {
      require: 'codeceptjs-assert'
    },
    FileSystem: {},
    multiple: {
      "basic": {
        // run all tests in chrome and firefox
        "browsers": ["chrome", "firefox"]
      },

      "smoke": {
        "browsers": [
          "firefox",
          // replace any config values from WebDriver helper
          {
            "browser": "chrome",
            "windowSize": "maximize",
            "desiredCapabilities": {
              "acceptSslCerts": true
            }
          },
        ]
      },
    }
  },
  include: {
    loginPage: './pages/login.js',
    responsivefightHome: './pages/responsivefightHome.js',
    newsPage: './pages/news.js',
    busPage: './pages/bus.js',
    leaderboardPage: './pages/leaderboard.js',
    },
  mocha: {
    reporterOptions: {
      reportDir: 'output'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/givensteps.js',
      './step_definitions/whensteps.js',
      './step_definitions/thensteps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'e2e'
}