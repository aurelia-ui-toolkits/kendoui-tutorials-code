import 'kendo-ui/js/kendo.autocomplete';

export class Autocomplete {
  public datasource: any;

  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: 'https://demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }
}
