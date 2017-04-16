export class Customer {
     constructor(
          public firstName = '',
          public lastName = '',
          public email = '',
          public sendCatalog = false,
          public addressType = 'home',
          public street1?: '',
          public street2?: '',
          public city?: '',
          public state = '',
          public zip?: string
     ) { }
     // tslint:disable-next-line:eofline
}