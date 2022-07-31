
import { faker } from '@faker-js/faker/locale/pt_BR';

export default {

    cadastro: function() {

      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
      
      var dados = {
          first: firstName,
          last: lastName,
          email: faker.internet.email(firstName),
          emailNilay: faker.internet.email('nilay_conte'),
          password: '134679rA'
          
      }
      return dados
    }
}