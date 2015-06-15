angular.module('myApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/modules/services/nav/header-centered/header-centered.html',
    "<div class='nav-header flexbox row {{nav.classes.cont}}'>\r" +
    "\n" +
    "\t<div class='flex1 left nav-header-left-cont'>\r" +
    "\n" +
    "\t\t<div class='flexbox row'>\r" +
    "\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.left' class='nav-header-left flex1 {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<h3 class='flex3 center nav-header-title-cont {{nav.title.classes.cont}}'>\r" +
    "\n" +
    "\t\t<a ng-show='nav.title.href' class='nav-header-title' ng-href = '{{nav.title.href}}' ng-bind-html='nav.title.html'></a>\r" +
    "\n" +
    "\t\t<div ng-hide='nav.title.href' class='nav-header-title' ng-click = 'nav.title.click()' ng-bind-html='nav.title.html'></div>\r" +
    "\n" +
    "\t</h3>\r" +
    "\n" +
    "\t<div class='flex1 right nav-header-right-cont'>\r" +
    "\n" +
    "\t\t<div class='flexbox row'>\r" +
    "\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.right' class='nav-header-right flex1 {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/services/nav/footer-flex/footer-flex.html',
    "<div class='nav-footer flexbox row {{nav.classes.cont}}'>\r" +
    "\n" +
    "\t<div ng-repeat='button in nav.buttons' class='flex1 nav-footer-button-cont {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t</a>\r" +
    "\n" +
    "\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<a ng-if='button.html' ng-show='button.href' class='nav-footer-button' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-footer-button' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/header/header.html',
    "<div class='header {{classes.cont}}' ng-controller='HeaderCtrl'>\r" +
    "\n" +
    "\t<div class='header-fixed' ng-include='nav.template'></div>\r" +
    "\n" +
    "\t<div class='header-spacer'>&nbsp;</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/footer/footer.html',
    "<div class='footer {{classes.cont}}' ng-controller='FooterCtrl'>\r" +
    "\n" +
    "\t<div class='footer-fixed' ng-include='nav.template'></div>\r" +
    "\n" +
    "\t<div class='footer-spacer'>&nbsp;</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/home/home.html',
    "<div class='home' ng-controller='HomeCtrl'>\r" +
    "\n" +
    "home body content here\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/login/login.html',
    "<div ng-controller='LoginCtrl' class='login'>\r" +
    "\n" +
    "\t<div app-login forgot-pass='forgotPass' login='login'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/signup/signup.html',
    "<div ng-controller='SignupCtrl' class='signup'>\r" +
    "\n" +
    "\t<div app-signup signup='signup'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/passwordReset/password-reset.html',
    "<div class='password-reset center center-margin padding' ng-controller='PasswordResetCtrl'>\r" +
    "\n" +
    "<div class='text-center'>\r" +
    "\n" +
    "\tCheck your email for your reset code and enter it below!<br />\r" +
    "\n" +
    "\tIt may take a few minutes to arrive and make sure to check your SPAM folder :(\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class='jrg-forminput-form' name='passResetForm' ng-submit='submitForm()'>\r" +
    "\n" +
    "\t<div class='input-group no-label'>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' placeholder='Email' ng-model='formVals.email' opts='' required></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' placeholder='Reset Key' ng-model='formVals.password_reset_key' opts='' required></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' type='password' placeholder='New Password (6+ characters)' ng-model='formVals.password' opts='' required ng-minlength='6'></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' type='password' placeholder='Confirm Password' ng-model='formVals.password_confirm' opts='' required></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<button class='btn btn-primary btn-block jrg-forminput-submit' type='submit' >Update Password</button>\r" +
    "\n" +
    "\t<div class='text-info'>{{msgNotify}}</div>\r" +
    "\n" +
    "</form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/logout/logout.html',
    "<div class='logout' ng-controller='LogoutCtrl'>\r" +
    "\n" +
    "Logging out..\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/userDelete/user-delete.html',
    "<div ng-controller='UserDeleteCtrl'>\r" +
    "\n" +
    "Deleting user.. This cannot be undone and all data will be removed!\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/callback/callback-twitter-auth/callback-twitter-auth.html',
    "<div ng-controller='CallbackTwitterAuthCtrl'>\r" +
    "\n" +
    "\tLoading..\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/callback/callback-facebook-auth/callback-facebook-auth.html',
    "<div ng-controller='CallbackFacebookAuthCtrl'>\r" +
    "\n" +
    "\tLoading..\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/callback/callback-google-auth/callback-google-auth.html',
    "<div ng-controller='CallbackGoogleAuthCtrl'>\r" +
    "\n" +
    "\tLoading..\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/dev-test/test/test.html',
    "<div class='test' ng-controller='TestCtrl'>\r" +
    "\n" +
    "\tTest\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<!--<div hm-tap='tapIt($event, {})' hm-swipeleft='swipeIt($event, \"left\", {})' hm-swiperight='swipeIt($event, \"right\", {})' hm-options='{swipe_velocity: 0.1}' style='min-height:100px;'>-->\r" +
    "\n" +
    "\t<div ng-click='tapIt($event, {})' ng-swipe-left='swipeIt($event, \"left\", {})' ng-swipe-right='swipeIt($event, \"right\", {})' style='min-height:100px;'>\r" +
    "\n" +
    "\t\t{{user}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/dev-test/design/design.html',
    "<div ng-controller='DesignCtrl'>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='margin-xlarge-tb'>\r" +
    "\n" +
    "\t\t<h2>buttons</h2>\r" +
    "\n" +
    "\t\t<div class='margin'>\r" +
    "\n" +
    "\t\t\t<a class='btn-link'>Link</a>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class='margin'>\r" +
    "\n" +
    "\t\t\t<span class='btn'>Btn</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-primary'>Primary</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-warning'>Warning</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-danger'>Danger</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-success'>Success</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-info'>Info</span>\r" +
    "\n" +
    "\t\t\t<span class='btn btn-inverse'>Inverse</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='margin-xlarge-tb'>\r" +
    "\n" +
    "\t\t<h2>typography</h2>\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "\t\t<div class='margin-large-tb'>\r" +
    "\n" +
    "\t\t\t<h4>font families</h4>\r" +
    "\n" +
    "\t\t\t<div class=''>Normal: The quick brown fox jumped over the lazy dog..</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "\t\t<div class='margin-large-tb'>\r" +
    "\n" +
    "\t\t\t<h4>font sizes</h4>\r" +
    "\n" +
    "\t\t\t<div class='h1'>xxx large</div>\r" +
    "\n" +
    "\t\t\t<div class='h2'>xx large</div>\r" +
    "\n" +
    "\t\t\t<div class='h3'>x large</div>\r" +
    "\n" +
    "\t\t\t<div class='h4'>large</div>\r" +
    "\n" +
    "\t\t\t<div class='h5'>normal</div>\r" +
    "\n" +
    "\t\t\t<div class='h6'>small</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='margin-xlarge-tb'>\r" +
    "\n" +
    "\t\t<h2>colors</h2>\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "\t\t<div class='design-color-item margin-small-tb {{color.class}}' ng-repeat='color in colors'>\r" +
    "\n" +
    "\t\t\t<div class='design-color-swatch'>&nbsp;</div><div class='design-color-text'>{{color.class}}</div>\r" +
    "\n" +
    "\t\t\t<div class='design-color-color'>{{color.class}}</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/dev-test/socketio/socketio.html',
    "<div ng-controller='SocketioCtrl'>\r" +
    "\n" +
    "\tsocketio (chat) demo\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\tTry opening up a second browser (tab/window) and talking to yourself!\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\tAdd new message:\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<input type='text' ng-model='formVals.socketMsg' placeholder='new message here' />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<button class='btn' ng-click='addMessage({})'>Add It!</button>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<div ng-repeat='data in socketData'>{{data.msg}}</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/dev-test/social/social.html',
    "<div ng-controller='SocialCtrl'>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<!--\r" +
    "\n" +
    "\t<div class='btn' ng-click='shareFacebook()'>Share Facebook</div>\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\t-->\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='btn' ng-click='shareFacebookFeed()'>Share Facebook Feed</div>\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='btn' ng-click='shareTwitter()'>Share Twitter</div>\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/modules/pages/dev-test/e2e/e2e.html',
    "<div ng-controller='E2eCtrl'>\r" +
    "\n" +
    "\t<div class='e2e-cookies'>\r" +
    "\n" +
    "\t\t<div>Cookies</div>\r" +
    "\n" +
    "\t\t<div ng-repeat='(key, val) in cookies' class='{{key}}'>\r" +
    "\n" +
    "\t\t\t<span class='key'>{{key}}</span> <span class='val'>{{val}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class='e2e-user'>\r" +
    "\n" +
    "\t\t<div>User</div>\r" +
    "\n" +
    "\t\t<div ng-repeat='(key, val) in user' class='{{key}}'>\r" +
    "\n" +
    "\t\t\t<span class='key'>{{key}}</span> <span class='val'>{{val}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );

}]);
