# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "modal", to: "modal.js"
pin "second-modal", to: "second-modal.js"
pin "calculator", to: "calculator.js"
pin "share", to: "share.js"
pin "fraction", to: "fraction.js"