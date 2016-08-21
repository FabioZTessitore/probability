import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/templates/home/home.js';
import '../../ui/layouts/main_layout.js';

FlowRouter.route('/', {
  name: 'home-page',
  action() {
    BlazeLayout.render('MainLayout', { content: 'Home' });
  },
});
