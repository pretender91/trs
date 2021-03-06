import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api/v1',
  host: ENV.adapterUrl,
  authorizer: 'authorizer:default',

  shouldBackgroundReloadAll(){
    return false;
  }
});

