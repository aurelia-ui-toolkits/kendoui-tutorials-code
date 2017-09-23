import 'kendo-ui/js/kendo.autocomplete.min';

export class autocomplete{
  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: '//demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }    
}
